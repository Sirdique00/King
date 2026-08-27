// Sadeeq AI V2 — client-side security helpers.
// These helpers validate input only; authorization remains server-side.

export function normalizeOrigin(value) {
  try {
    const url = new URL(String(value).trim());
    if (!['http:', 'https:'].includes(url.protocol)) return null;
    if (url.username || url.password) return null;
    return url.origin;
  } catch {
    return null;
  }
}

export function isValidBotId(value) {
  return /^[A-Za-z0-9_-]{12,64}$/.test(String(value || ''));
}

export function clearSensitiveSessionStorage(prefix = 'sadeeq:') {
  for (let i = sessionStorage.length - 1; i >= 0; i -= 1) {
    const key = sessionStorage.key(i);
    if (key && key.startsWith(prefix)) sessionStorage.removeItem(key);
  }
}
