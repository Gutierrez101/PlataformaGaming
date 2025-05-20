// userModel.js
// Gestión “en memoria” de usuarios

const users = [
  { username: "teacher1", password: "1234", role: "teacher" },
  { username: "student1", password: "abcd", role: "student" },
];

// Devuelve el array entero
export function getUsers() {
  return users;
}

// Añade un usuario (único username)
export function addUser({ username, password, role }) {
  if (users.find(u => u.username === username)) {
    throw new Error("Usuario ya existe");
  }
  users.push({ username, password, role });
}

// Autentica y devuelve el usuario o null
export function authenticate(username, password) {
  return users.find(u => u.username === username && u.password === password) || null;
}
