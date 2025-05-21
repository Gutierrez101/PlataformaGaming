// classModel.js
// Datos de ejemplo con imagen + retos

const classes = [
  {
    id: 1,
    name: "Marcos de Trabajo",
    image: "images/marco-de-referencia.png",
    retos: [
      { id: 1, title: "React" },
      { id: 2, title: "Next.js" },
    ],
    students: ["student1", "student2"]
  },
  {
    id: 2,
    name: "Desarrollo web",
    image: "images/software.png",
    retos: [
      { id: 1, title: "HTML5" },
      { id: 2, title: "CSS" }
    ],
    students: ["student1"]
  },
  {
    id: 3,
    name: "Almacenamiento en la nube",
    image: "images/archivo.png",
    retos: [
      { id: 1, title: "AWS" },
      { id: 2, title: "Heroku" }
    ],
    students: ["student2"]
  }
];

export function getClasses() {
  return classes;
}

export function getClassById(id) {
  return classes.find(c => c.id === Number(id)) || null;
}

export function getClassesByTeacher(teacher) {
  return classes.filter(c => c.teacher === teacher);
}
