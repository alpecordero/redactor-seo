// utils/counter.js
function getRealisticCount() {
  const baseCount = 12847; // Tu número inicial
  const daysSinceLaunch = Math.floor((Date.now() - new Date('2025-01-01')) / (1000 * 60 * 60 * 24));
  const dailyGrowth = Math.floor(Math.random() * 15) + 5; // 5-20 clics por día
  return baseCount + (daysSinceLaunch * dailyGrowth);
}

// Función para simular el crecimiento del contador con clicks del usuario
function getCounterWithUserClicks() {
  const realisticCount = getRealisticCount();
  const userClicks = parseInt(localStorage.getItem('userCandleClicks') || '0');
  return realisticCount + userClicks;
}

// Función para incrementar los clicks del usuario
function incrementUserClicks() {
  const currentUserClicks = parseInt(localStorage.getItem('userCandleClicks') || '0');
  const newUserClicks = currentUserClicks + 1;
  localStorage.setItem('userCandleClicks', newUserClicks.toString());
  return newUserClicks;
}

export { getRealisticCount, getCounterWithUserClicks, incrementUserClicks };