// Funciones para hashear con SHA-256 usando SubtleCrypto

// Convierte ArrayBuffer a cadena hex
function bufferToHex(buffer) {
  const bytes = new Uint8Array(buffer);
  return Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('');
}

// Hashea una cadena (p. ej. contraseña) y devuelve su hex digest
export async function hashSHA256(text) {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  return bufferToHex(hashBuffer);
}
