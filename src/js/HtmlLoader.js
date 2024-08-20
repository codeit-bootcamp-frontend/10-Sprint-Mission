import {ComponentLoader} from "./ComponentCheckFunction.js";

window.addEventListener('load', () => {
  let allElements = document.getElementsByTagName('*');
  Array.prototype.forEach.call(allElements, (element) => {
    let includeHtml = element.dataset.includeHtml;
    if (includeHtml) {
      fetch(includeHtml)
        .then(response => {
          if (!response.ok) throw new Error('네트워크 리스펀스 에러\n' + response.status);
          return response.text();
        })
        .then(data => {
          element.outerHTML = data;
          const loadEvent = new Event('load');
          element.addEventListener('load', () => { 
            let allElements = document.getElementsByTagName('*');
            Array.prototype.forEach.call(allElements, (element) => {
              ComponentLoader(element);
            })
          });
          element.dispatchEvent(loadEvent);
        })
        .catch(error => {
          console.error('Fetch 에러\n', error);
          alert('Fetch 에러!');
        })

    }
  })
})