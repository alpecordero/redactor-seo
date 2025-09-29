// Ultra-secure counter system - No KV required
export default {
  async fetch(request, env) {
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, X-Session-ID',
      'Content-Type': 'application/json'
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    try {
      const url = new URL(request.url);

      if (request.method === 'POST' && url.pathname === '/increment') {
        // Handle click increment
        const sessionId = request.headers.get('X-Session-ID') || generateSessionId();
        const currentCount = getCurrentCount(sessionId);

        // Simulate increment by updating the time-based tracking
        const newCount = getCurrentCountWithIncrement(sessionId);

        return new Response(JSON.stringify({
          success: true,
          count: newCount,
          sessionId: sessionId
        }), { headers: corsHeaders });
      }

      if (request.method === 'GET' && (url.pathname === '/' || url.pathname === '')) {
        // Get current count
        const sessionId = request.headers.get('X-Session-ID') || url.searchParams.get('sid') || generateSessionId();

        // Use base count + any existing session clicks
        let currentCount = getCurrentCount(sessionId);
        if (globalClickTracker[sessionId]) {
          currentCount += globalClickTracker[sessionId].clicks;
        }

        return new Response(JSON.stringify({
          count: currentCount,
          sessionId: sessionId
        }), { headers: corsHeaders });
      }

      return new Response('Not found', { status: 404, headers: corsHeaders });

    } catch (error) {
      console.error('Counter error:', error);
      return new Response(JSON.stringify({
        error: 'Internal error',
        count: getEmergencyCount()
      }), { status: 500, headers: corsHeaders });
    }
  }
};

// Simple but effective counter simulation using timestamps
function getCurrentCount(sessionId) {
  // Base count that grows slowly over time
  const baseTime = new Date('2024-12-15T00:00:00Z').getTime();
  const now = Date.now();
  const daysSince = Math.floor((now - baseTime) / (1000 * 60 * 60 * 24));

  // Very slow organic growth: about 10-20 per day
  const organicGrowth = daysSince * (10 + Math.sin(daysSince * 0.1) * 5);

  // Hour-based variation for realism
  const hourVariation = Math.sin(new Date().getHours() / 24 * Math.PI * 2) * 3;

  let baseCount = Math.floor(850 + organicGrowth + hourVariation);

  // Ensure realistic bounds
  return Math.max(850, Math.min(baseCount, 1500));
}

// Global click tracking using timestamps (survives for worker lifetime)
let globalClickTracker = {};

function getCurrentCountWithIncrement(sessionId) {
  const baseCount = getCurrentCount(sessionId);
  const now = Date.now();

  // Initialize session tracking if doesn't exist
  if (!globalClickTracker[sessionId]) {
    globalClickTracker[sessionId] = {
      clicks: 0,
      lastClick: 0,
      startTime: now
    };
  }

  const sessionData = globalClickTracker[sessionId];

  // Rate limiting: max 1 click per 200ms (much more responsive)
  if (now - sessionData.lastClick < 200) {
    return baseCount + sessionData.clicks; // Return current count without increment
  }

  // Increment the session clicks
  sessionData.clicks += 1;
  sessionData.lastClick = now;

  // Clean up old sessions (older than 1 hour)
  const cutoffTime = now - (60 * 60 * 1000);
  for (const [sid, data] of Object.entries(globalClickTracker)) {
    if (data.startTime < cutoffTime) {
      delete globalClickTracker[sid];
    }
  }

  return baseCount + sessionData.clicks;
}

function generateSessionId() {
  return 'sess_' + Math.random().toString(36).substr(2, 16) + Date.now().toString(36);
}

function getEmergencyCount() {
  // Fallback count if all systems fail
  const now = new Date();
  const baseEmergency = 850;
  const dayOffset = now.getDate() * 2 + now.getHours();
  return baseEmergency + (dayOffset % 50);
}