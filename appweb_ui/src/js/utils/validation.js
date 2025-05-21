export function validateUsername(username) {
  const sanitized = username.trim();
  if (!sanitized) throw new Error("El nombre de usuario no puede estar vacío.");
  if (sanitized.length < 3) throw new Error("El nombre de usuario debe tener al menos 3 caracteres.");
  if (!/^[a-zA-Z0-9_]+$/.test(sanitized)) throw new Error("El nombre de usuario solo puede contener letras, números y guiones bajos.");
  return sanitized;
}

export function validatePassword(password) {
  if (!password) throw new Error("La contraseña no puede estar vacía.");
  if (password.length < 6) throw new Error("La contraseña debe tener al menos 6 caracteres.");
  return password;
}

export function sanitizeText(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
