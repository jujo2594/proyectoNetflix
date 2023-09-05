# NETFLIX CLONE

#### We start to modified a bootstrap example, the goal is clone the netflix window for choose a plan (https://www.netflix.com/signup/planform), but keeping the bootstrap stucture.



#### HEADER: 

I used a '.png' file for the netflix logo, and I modified the menu just leaving a 'Sign In' option in the navbar. Under the 'navbar' was  added a short text, about the advantages of getting a netflix plan, in this part I added a short text and some 'check icons' with a color red font. 

```html
<header>
      <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
        <a href="/" class="d-flex align-items-center link-body-emphasis text-decoration-none">
          <span class="fs-4">
            <img src="./assets/netflixLogo.png" alt="logo">
          </span>
        </a>
        <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <a class="py-2 link-body-emphasis text-decoration-none --bs-gray-600" href="#">Sing In</a>
        </nav>
      </div>

```



#### MAIN CONTENT:

I started modifying the squares border and shape, In this squares I added the price and name of each plan. Also I changed the' background-color' for the netflix-red. 

Under this squares, I modified a table with the features and differences of each plan, in this part I changed the 'font-size' 'font-weight' and ' color'. 

Finally in the main section, I just added a paragraph with addional information and a hypelink to the 'terms and conditions'. 

```html
 <main>
      <div class="row row-cols-1 row-cols-md-3 column-gap-lg-5 justify-content-center text-center">
        <div class="col">
          <div class="card mb-4 shadow-sm">
            <div class="py-3 bg-danger opacity-75 text-light">
              <h4 class="my-0 fw-normal">Basic</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">$ 6,99<small class="text-body-secondary fw-light">/mo</small></h1>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-4 shadow-sm">
            <div class="py-3 bg-danger opacity-75 text-light">
              <h4 class="my-0 fw-normal">Standard</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">$ 15,49<small class="text-body-secondary fw-light">/mo</small></h1>
            </div>
          </div>
        </div>  
        <div class="col">
          <div class="card mb-4 shadow-sm">
            <div class="py-3 text-bg-primary bg-danger border">
              <h4 class="my-0 fw-normal">Premium</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">$ 19,99<small class="text-body-secondary fw-light">/mo</small></h1>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="table-responsive ">
        <table class="table text-center">
          <thead>
            <tr>
              <th  style="width: 34%;"></th>
              <th class="fs-5 fw-semibold" style="width: 22%;">BASIC</th>
              <th class="fs-5 fw-semibold" style="width: 22%;">STANDARD</th>
              <th class="fs-5 fw-semibold" style="width: 22%;">PREMIUM</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" class="text-start fs-5 fw-light">Video Quality</th>
              <td class="fs-5 fw-normal text-secondary">Good</td>
              <td class="fs-5 fw-normal text-secondary">Better</td>
              <td class="fs-5 fw-normal text-secondary">Best</td>
            </tr>
            <tr>
              <th scope="row" class="text-start fs-5 fw-light">Resolution</th>
              <td class="fs-5 fw-normal text-secondary">720p</td>
              <td class="fs-5 fw-normal text-secondary">1080p</td>
              <td class="fs-5 fw-normal text-secondary">4K+HDR</td>
            </tr>
          </tbody>

```

#### FOOTER: 

Finallly the footer section, I just modified the text content and I change the font properties as 'font-size' 'font-weight' and 'color'. 



```HTML
<footer class="pt-4 my-md-5 pt-md-5 border-top fs-6 fw-normal">
      <div class="row">
        <div class="col-12 col-md">
          <small class="d-block mb-3 text-body-secondary">&copy; Campuslands 2023 Bucaramanga</small>
        </div>
        <div class="col-6 col-md">
          <ul class="list-unstyled text-small">
            <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">FAQ</a></li>
            <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Help Center</a></li>
            <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Cookie Preferences</a></li>
          </ul>
        </div>
    </footer>
```
All this was for the initial structure of the netflix website and the styles, the second part of this project is to insert the main content using a local json, with javascript.


#### MAIN JS: 

I use a json to organize and insert the content into our html file, for the main content and made the website more interanctive. I create function for each section of the netflix select plan site just to being organized. 

This is an example for the navbar content. Besides, I create fucntions for the header, cards, tables, text and footer.

```JAVASCRIPT
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
```