import {ComponentCheckFunction} from './ComponentCheckFunction.js';

const ComponentLoader = () => {
  let allElements = document.getElementsByTagName('*');
  Array.prototype.forEach.call(allElements, (element) => {
    ComponentCheckFunction(element);
  })
}

window.addEventListener('load', ComponentLoader)