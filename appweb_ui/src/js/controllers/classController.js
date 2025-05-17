import {getAllClasses} from '../models/classModel.js';
import { renderClassCard } from '../views/renderClasses.js';

(async function init(){
    const clases=await getAllClasses();
    const grid=document.getElementById('class-grid');
    clases.forEach(c => grid.appendChlild(renderClassCard(c)));         
})();
