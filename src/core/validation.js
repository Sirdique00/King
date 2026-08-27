export function requiredString(value, field) {
  if (typeof value !== 'string' || value.trim() === '') {
    throw new TypeError(`${field} is required.`);
  }
  return value.trim();
}

export function normalizeOrigin(value) {
  const raw = requiredString(value, 'origin');
  const url = new URL(raw);

  if (!['http:', 'https:'].includes(url.protocol)) {
    throw new TypeError('Only HTTP(S) origins are allowed.');
  }

  if (url.username || url.password) {
    throw new TypeError('Origins must not contain credentials.');
  }

  return url.origin.toLowerCase();
}
