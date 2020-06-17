
import { Card1 } from './mainScreen/widgets/card1';

const elements = {
  colorChooseButton: document.querySelector("#colorChoose"),
};

elements.colorChooseButton.addEventListener("click", () => {
  window.location.pathname = "dist/html/colorChoose.html";
});



const navbar = () => {

    const navBrand = document.getElementsByTagName('nav')[0];


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
}

const serviceSection = () => {
  const el = document.querySelector(".wwd-group");

  el.insertAdjacentHTML("beforeend", new Card1().create(
    "color-fill-outline",
    "Decorative paint",
    `Choose from wide range of colors. We will then produce your desired color.`
  ));
  el.insertAdjacentHTML("beforeend", new Card1().create(
    "color-filter-outline",
    "Design",
    `Wide range of lady designs will help you to give your wall a unique look.`
  ));
  el.insertAdjacentHTML("beforeend", new Card1().create(
    "hammer-outline",
    "Tools",
    `Be it be rollers, be it be brush, you name the tools, we got you.`
  ));

};
navbar();
serviceSection();
