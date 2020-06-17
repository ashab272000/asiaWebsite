

export const setupNavBar = (toPath) => {

    const navBrand = document.getElementsByTagName('nav')[0];
    navBrand.insertAdjacentHTML("beforeend", htmlNav(toPath));
    
    const mobileNavButton = document.getElementById('mobileNavButton');


    window.onscroll = () => {
        const docEl = document.documentElement;
        const sTop = (pageYOffset || docEl.scrollTop)  - (docEl.clientTop || 0);

        if(sTop > 100){
            navBrand.classList.add("scrolledNav");
        }else if(sTop == 0){
            navBrand.classList.remove("scrolledNav");    
        }
        //navBrand.style.display =  sTop > 10 ? navBrand.classList.add("scrolledNav") : navBrand.classList.remove("scrolledNav"); ;
    };
    
    mobileNavButton.addEventListener('click',  navSelection); 

}

const navSelection = () => {
    const nav = document.querySelector("#mobileNavButton");
    const mainNav = document.querySelector("#mainNav");
    if (nav.classList.contains("navSelected")) {
      nav.classList.remove("navSelected");
      nav.classList.add("navUnselected");
      mainNav.style.transform = "translate(200px, 0px)";
    } else {
      nav.classList.add("navSelected");
      nav.classList.remove("navUnselected");
      mainNav.style.transform = "translate(0px, 0px)";
    }
};

const htmlNav = (toPath) => {
    
    return `
    <div class="container">
          <div
            id="mobileNavButton"
            class="navUnselected"
          >
            <div id="bar1" class="bar"></div>
            <div id="bar2" class="bar"></div>
            <div id="bar3" class="bar"></div>
          </div>
          <h2 id="nav-branding"><a href="${toPath}index.html">Asia Exhibition</a></h2>
          <ul id="mainNav">
            <li>
              <a href="${toPath}html/colorChoose.html" >
                Decorate
              </a>
            </li>
            <li>
              <a href="${toPath}index.html#service_section">
                Services
              </a>
            </li>
            <li>
              <a href="${toPath}index.html#about">
                About Us
              </a>
            </li>
            <li>
              <a href="${toPath}index.html#contactUs">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
    `;
}