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
          const loadEvent = new Event('load'); // Fetch로 삽입된 HTML파일은 load 이벤트를 발생시키지 않음
          element.addEventListener('load', () => { // IncludeComponent.js의 일부코드
            let allElements = document.getElementsByTagName('*');
            Array.prototype.forEach.call(allElements, (element) => {
              let includeComponent = element.dataset.includeComponent;
              if (includeComponent) {
                fetch(includeComponent)
                  .then(response => {
                    if (!response.ok) throw new Error('네트워크 리스펀스 에러\n' + response.status);
                    return response.text();
                  })
                  .then(data => {
                    const regex = /<script[\s\S]*?<\/script>/g;
                    let match;
                    const results = [];

                    while ((match = regex.exec(data)) !== null) {
                      results.push(match[0]);
                    }

                    element.outerHTML = data;

                    for (let s of results) {
                      const newScript = document.createElement('script');
                      const srcMatch = s.match(/src=['"]?([^'"]+)['"]?/);

                      if (srcMatch && srcMatch[1]) newScript.src = srcMatch[1];
                      else newScript.text = s.replace(/<script.*?>|<\/script>/g, '');

                      document.body.appendChild(newScript);
                    }
                  })
                  .catch(error => {
                    console.error('Fetch 에러\n', error);
                    alert('Fetch 에러!');
                  })

              }
            })
          });
          element.dispatchEvent(loadEvent); // load 이벤트 강제 발생
        })
        .catch(error => {
          console.error('Fetch 에러\n', error);
          alert('Fetch 에러!');
        })

    }
  })
})