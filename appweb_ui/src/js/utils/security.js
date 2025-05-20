/** Sanitización básica */
export function sanitize(str) {
  return str.replace(/[<>"'`;]/g, '').trim();
}