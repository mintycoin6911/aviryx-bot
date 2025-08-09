(async function () {
  const el = document.getElementById('tracker');
  const pair = (typeof DEXSCREENER_PAIR !== 'undefined') ? DEXSCREENER_PAIR : ('' + (process.env?.DEXSCREENER_PAIR || ''));
  try {
    if (!pair || pair === 'undefined') { el.textContent = 'Chart link coming soon.'; return; }
    el.innerHTML = `<a href="${pair}" target="_blank">Open chart on Dexscreener</a>`;
  } catch (e) { el.textContent = 'Tracker unavailable right now.'; }
})();