export function renderClassCard(clase){
    const tarjeta=document.createElement('div');
    tarjeta.className='bg.white rounded-lg shadow hover:shadow-lg p-4';
    tarjeta.innerHTML=`
        <img src="${clase.imagen}" alt="${clase.nombre}" class="w-full h-32 object-cover rounded-t-lg">
        <h3 class="mt-2 text-lg font-bold text-center">${clase.nombre}</h3>
    `;
    return tarjeta;
}