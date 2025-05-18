import {getAllClasses} from '../models/classModel.js';// importar la funcion getAllClasses
import { renderClassCard } from '../views/renderClasses.js'; // importar la funcion renderClassCard

// Esta funcion se encarga de inicializar la aplicacion
(async function init(){
    const clases=await getAllClasses();
    const grid=document.getElementById('class-grid');
    clases.forEach(c => grid.appendChlild(renderClassCard(c)));         
})();
