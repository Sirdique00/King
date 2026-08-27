export function ok(data = null) {
  return Object.freeze({ ok: true, data, error: null });
}

export function fail(code, message) {
  return Object.freeze({
    ok: false,
    data: null,
    error: Object.freeze({ code, message }),
  });
}
