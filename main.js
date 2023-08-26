const path = 'config';

let construirNavBar = async()=>{
    let peticion = await fetch(`${path}.json`);
    let res = await peticion.json();
    let seleccion = document.querySelector('#myJsonNavBar');
    seleccion.insertAdjacentHTML('beforeend',/* HTML */`   
    <a href="/" class="d-flex align-items-center link-body-emphasis text-decoration-none">
        <span class="fs-4">
            <img src=${res.navBar.logo} alt="logo">
        </span>
    </a>
    <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <a class="py-2 link-body-emphasis text-decoration-none --bs-gray-600" href="#">${res.navBar.textoIngreso}</a>
    </nav>
    `)
}

construirNavBar();

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

let construirTarjetas = async()=>{
    let peticion = await fetch(`${path}.json`);
    let res = await peticion.json();
    let cards = res.bloque2;
    let lastCard = res.bloque2[res.bloque2.length-1];
    cards.pop();
    let seleccion = document.querySelector('#myJsonSection2');
        seleccion.insertAdjacentHTML('beforeend', /* HTML*/ `     
        ${cards.map((value)=> /* HTML */ `
            <div class="col">
                <div class="card mb-4 shadow-sm">
                    <div class="py-3 bg-danger opacity-75 text-light">
                        <h4 class="my-0 fw-normal">${value.textoPlan}</h4>
                    </div>
                    <div class="card-body">
                        <h1 class="card-title pricing-card-title">${value.textoPrecio}<small    class="text-body-secondary fw-light">/mo</small></h1>
                    </div>
                </div>
            </div>
    `).join(" ")}`);
    seleccion.insertAdjacentHTML('beforeend', /* HTML*/ ` 
    <div class="col">
        <div class="card mb-4 shadow-sm">
            <div class="py-3 text-bg-primary bg-danger border">
                <h4 class="my-0 fw-normal">${lastCard.textoPlan}</h4>
            </div>
            <div class="card-body">
                <h1 class="card-title pricing-card-title">${lastCard.textoPrecio}<small class="text-body-secondary fw-light">/mo</small></h1>
            </div>
        </div>
    </div>
    `);
}

construirTarjetas();

let construirTabla = async() =>{
    let peticion = await fetch (`${path}.json`);
    let res = await peticion.json();
    let seleccion = document.querySelector('#myJsonTable');
        seleccion.insertAdjacentHTML('beforeend', /* HTML */ `
            ${res.table.tHead.map((value)=>/* HTML */`
            <thead>
                <tr>
                    <th  style="width: 34%;">${value.tag1}</th>
                    <th class="fs-5 fw-semibold" style="width: 22%;">${value.tag2}</th>
                    <th class="fs-5 fw-semibold" style="width: 22%;">${value.tag3}</th>
                    <th class="fs-5 fw-semibold" style="width: 22%;">${value.tag4}</th>
                </tr>
            </thead>
            `).join(" ")}
            ${res.table.tBody.map((value)=>/* HTML */`
                <tr>
                    <th scope="row" class="text-start fs-5 fw-light">${value.feature}</th>
                    <td class="fs-5 fw-normal text-secondary">${value.texto1}</td>
                    <td class="fs-5 fw-normal text-secondary">${value.texto2}</td>
                    <td class="fs-5 fw-normal text-secondary">${value.texto3}</td>
                </tr>
            `).join(" ")}
        `);
}

construirTabla();


let construirTexto = async()=>{
    let peticion = await fetch(`${path}.json`);
    let res = await peticion.json();
    let seleccion = document.querySelector('#myJsonText');
    seleccion.insertAdjacentHTML('beforeend',/* HTML */`   
        <p>${res.bloque3.texto}</p>
    `)
}

construirTexto();

let construirFooter = async()=>{
    let peticion = await fetch(`${path}.json`);
    let res = await peticion.json();
    let seleccion = document.querySelector('#myJsonFooter');
    seleccion.insertAdjacentHTML('beforeend',/* HTML */`
        <div class="col-12 col-md">
            <small class="d-block mb-3 text-body-secondary">&copy; ${res.footer.textoSmall}</small>
        </div>
            ${res.footer.about.map((value)=>/* HTML */`
            <div class="col-6 col-md">
                <ul class="list-unstyled text-small">
                    <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">${value.tag1}</a></li>
                    <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">${value.tag2}</a></li>
                    <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">${value.tag3}</a></li>
                </ul>
            </div>
        `).join(" ")};
    `)
};

construirFooter();