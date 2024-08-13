//판다마켓 클릭시 루트 페이지로 이동
const btnMarket = document.getElementById("btnMarket");
if (btnMarket) {
  btnMarket.addEventListener("click", () => {
    window.open('/', '_blank');
  });
} else {
  console.error("Element with id 'btnMarket' not found");
}
//로그인 버튼 클릭 시 로그인 화면으로 이동
const btnLogin = document.getElementById("btnLogin");
btnLogin.addEventListener("click", () => {
  window.open('/login', '_blank')
});

//장보러가기 버튼 클릭 시 장보러가기 화면으로 이동
const btnShopping = document.getElementById("btnShopping");
btnShopping.addEventListener("click", () => {
  window.open('/items', '_blank')
});

//푸터 아이콘 클릭시 각각의 홈페이지로 이동
const images = document.querySelectorAll('.footer-icon');
images.forEach(image => {
  image.addEventListener('click', () => {
    const imageUrl = image.getAttribute('alt')
    if (imageUrl) {
      console.log(imageUrl)
      window.open(imageUrl, '_blank')
    } else {
      console.error('Image alt attribute is missing or empty')
    }
  })
})
