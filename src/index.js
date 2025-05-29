import "./style.scss"
import Pic from "./hehe-cat.jpg"
import { getText } from "./helper";

function component() {
  const element = document.createElement('div');

  const heading = document.createElement('h3');
  heading.innerHTML = getText();

  element.appendChild(heading);

  const myImage = new Image();
  myImage.src = Pic;

  element.appendChild(myImage);

  return element;
}

document.body.appendChild(component());