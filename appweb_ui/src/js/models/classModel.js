//Simulacion
export function getAllClasses(){
    return Promise.resolve([
        {
            id: 1,
            nombre: 'Fundamentos de Programacion',
            imagen: 'https://th.bing.com/th/id/OIP.jZuoAZ3Il0rZel2uUZLC2AHaHa?rs=1&pid=ImgDetMain'
        },
        {
            id: 2,
            nombre: 'Desarrollo web',
            imagen: 'https://th.bing.com/th/id/OIP.pBCzgrYOZW6V1i9zLs-njwHaFj?rs=1&pid=ImgDetMain'
        },
        {
            id: 3,
            nombre: 'Programacion Orientada a Objetos',
            imagen: 'https://th.bing.com/th/id/OIP.asWHbM3xoywdEwUxFJCRggHaF7?rs=1&pid=ImgDetMain'
        }
    ]);
}