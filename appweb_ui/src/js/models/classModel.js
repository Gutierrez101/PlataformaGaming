//Simulacion
export function getAllClasses(){
    return Promise.resolve([
        {
            id: 1,
            nombre: 'Matemáticas',
            imagen: 'https://example.com/matematicas.jpg'
        },
        {
            id: 2,
            nombre: 'Ciencias',
            imagen: 'https://example.com/ciencias.jpg'
        },
        {
            id: 3,
            nombre: 'Historia',
            imagen: 'https://example.com/historia.jpg'
        }
    ]);
}