window.addEventListener('load', () => {
  let allElements = document.getElementsByTagName('*');
            Array.prototype.forEach.call(allElements, (element) => {
              let includeComponent = element.dataset.includeComponent;
              if(includeComponent) {
                fetch(includeComponent)
                  .then(response => {
                    if(!response.ok) throw new Error('네트워크 리스펀스 에러\n' + response.status);
                    return response.text();
                  })
                  .then(data => {
                    element.outerHTML = data;
                  })
                  .catch(error => {
                    console.error('Fetch 에러\n', error);
                    alert('Fetch 에러!');
                  })
                
              }
            })
})