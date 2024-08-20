import {ComponentLoader} from './ComponentCheckFunction.js';

window.addEventListener('load', () => {
  let allElements = document.getElementsByTagName('*');
  Array.prototype.forEach.call(allElements, (element) => {
    ComponentLoader(element);
  })
})