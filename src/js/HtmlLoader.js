import { ComponentCheckFunction } from "./ComponentCheckFunction.js";

/**
 * 최종 index.html 파일을 로드할 때 실행되며 HTML 파일에 data-include-html 속성이 있으면 그 속성값의 경로의 파일을 가져와서 innerHTML로 대체한다.
 * 해당 파일을 가져올 때 ComponentCheckFunction 함수를 실행한다.
 */
const HtmlLoader = () => {
  const allElements = document.getElementsByTagName('*');
  Array.prototype.forEach.call(allElements, (element) => {
    const includeHtml = element.dataset.includeHtml;
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
            const allElements = document.getElementsByTagName('*');
            Array.prototype.forEach.call(allElements, (element) => {
              ComponentCheckFunction(element);
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
}

window.addEventListener('load', HtmlLoader);