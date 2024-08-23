import {ComponentCheckFunction} from './ComponentCheckFunction.js';

/**
 * 모든 요소를 가져와서 ComponentCheckFunction 함수를 실행한다.
 */
const ComponentLoader = () => {
  const allElements = document.getElementsByTagName('*');
  Array.prototype.forEach.call(allElements, (element) => {
    ComponentCheckFunction(element);
  })
}

window.addEventListener('load', ComponentLoader)