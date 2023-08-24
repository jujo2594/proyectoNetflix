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

      <div class="pricing-header ms-xxl-5 text-start">
        <h3 class="fs-6 fw-light">STEP 1 OF 3</h3>
        <h1 class="display-4 fs-2 fw-semibold text-body-emphasis">Choose the plan that it's right for you</h1>
        <p class="d-flex flex-row align-items-center column-gap-2 fs-6 text-body-secondary"><svg class="bi" width="35" height="35"><use class="text-danger" xlink:href="#check"/></svg> Watch all you want. Add-free.</p>
        <p class="d-flex flex-row align-items-center column-gap-2 fs-6 text-body-secondary"><svg class="bi" width="35" height="35"><use class="text-danger" xlink:href="#check"/></svg> Recomendations just for you.</p>
        <p class="d-flex flex-row align-items-center column-gap-2 fs-6 text-body-secondary"><svg class="bi" width="35" height="35"><use class="text-danger" xlink:href="#check"/></svg> Change or cancel your plan anytime.</p>
      </div>
    </header>
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

          <tbody>
            <tr>
              <th scope="row" class="text-start fs-5 fw-light">Watch on your TV, computer, mobile phone and tablet</th>
              <td><svg class="bi" width="24" height="24">
                  <use class="text-secondary" xlink:href="#check" />
                </svg></td>
              <td><svg class="bi" width="24" height="24">
                  <use class="text-secondary" xlink:href="#check" />
                </svg></td>
              <td><svg class="bi" width="24" height="24">
                  <use class="text-secondary" xlink:href="#check" />
                </svg></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="fs-6 fw-light text-secondary w-75 ms-xxl-4">
        <p>
          HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our <a href="https://help.netflix.com/legal/termsofuse">Terms of Use</a> for more details.
          Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard and 1 with Basic.
        </p>
      </div>
    </main>
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
        <div class="col-6 col-md">
          <ul class="list-unstyled text-small">
            <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Privacy</a></li>
            <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Netflix Shop</a></li>
            <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Corporate Information</a></li>
          </ul>
        </div>
        <div class="col-6 col-md">
          <ul class="list-unstyled text-small">
            <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Terms of Use</a></li>
          </ul>
        </div>
      </div>
    </footer>
```

