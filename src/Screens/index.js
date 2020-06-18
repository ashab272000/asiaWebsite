
import { Card1 } from './mainScreen/widgets/card1';
import { setupNavBar } from './navbar';




const colorChooseButton = document.getElementsByClassName("colorChoose");
const scrollAnimateElements = document.getElementsByClassName("scrollAnimate");
/*
colorChooseButton.addEventListener("click", () => {
  window.location.pathname = "dist/html/colorChoose.html";
});*/

for (let item of colorChooseButton){
    item.addEventListener("click", () => {
        window.location.pathname = "html/colorChoose.html";
    });
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


setupNavBar("");
serviceSection();

console.log(window.location.pathname);
