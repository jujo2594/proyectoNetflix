const path = 'config';

let construirEncabezado = async()=>{
    let peticion = await fetch(`${path}.json`);
    let res = await peticion.json();
    let seleccion = document.querySelector('#myJsonSection');
    seleccion.insertAdjacentHTML('beforeend',/* HTML */`
    <p class="fs-6 fw-light">${res.section1.texto1}</p>
    <h1 class="display-4 fs-2 fw-semibold text-body-emphasis">${res.section1.titulo}</h1>
    <p class="align-items-center column-gap-2 fs-6 text-body-secondary">
        ${res.section1.bloque.map((value)=>/* HTML */`
            <svg class="bi" width="35" height="35"><use class="text-danger" xlink:href="#check"/></svg>${value.texto}<br/>`).join(" ")}
    </p>
    `);
};

construirEncabezado();


// (async()=>{
//      let peticion = await fetch(`${path}.json`);
//      let res = await peticion.json();
//      console.log(res);
// })("config")

