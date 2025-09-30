// Professional counter system - completely opaque implementation
const COUNTER_API = 'https://redactor-seo-counter.dawn-smoke-fbd0.workers.dev';

let sessionId = null;

// Initialize secure session
function initSession() {
  sessionId = sessionStorage.getItem('cs_sid') || null;
}

// Get current count from secure backend
async function getCurrentCount() {
  try {
    initSession();

    const url = sessionId ? `${COUNTER_API}?sid=${sessionId}` : COUNTER_API;
    const headers = sessionId ? { 'X-Session-ID': sessionId } : {};

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...headers
      }
    });

    if (!response.ok) throw new Error('Network error');

    const data = await response.json();

    if (data.sessionId && !sessionId) {
      sessionId = data.sessionId;
      sessionStorage.setItem('cs_sid', sessionId);
    }

    return data.count || 13000;
  } catch (error) {
    console.warn('Counter service unavailable, using fallback');
    return getFallbackCount();
  }
}

// Increment counter securely
async function incrementCount() {
  try {
    if (!sessionId) await getCurrentCount(); // Initialize if needed

    const response = await fetch(`${COUNTER_API}/increment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Session-ID': sessionId
      }
    });

    if (!response.ok) {
      if (response.status === 429) {
        throw new Error('RATE_LIMITED');
      }
      throw new Error('Network error');
    }

    const data = await response.json();
    return data.success ? data.count : null;
  } catch (error) {
    if (error.message === 'RATE_LIMITED') {
      throw error;
    }
    console.warn('Counter increment failed');
    return null;
  }
}

// Secure fallback calculation (client-side only when backend fails)
function getFallbackCount() {
  const t = Date.now();
  const d = new Date();
  const base = 13000;
  const variance = Math.sin(t / 900000) * 200; // 15-min cycle
  const daily = d.getDate() * 31 + d.getHours() * 7;
  return Math.floor(base + variance + (daily % 400));
}

export { getCurrentCount, incrementCount };