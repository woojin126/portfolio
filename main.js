
//Navbar 를 스크롤에 따라 위로가면 투명하게 아래로내리면 핑크색
const navbar = document.querySelector("#Navbar");
const navbarheight = navbar.getBoundingClientRect().height;

function init(){
  window.addEventListener('scroll',() =>{
     if(window.scrollY > navbarheight)
     navbar.classList.add('navbar--dark');
    else
    navbar.classList.remove('navbar--dark')
  });

}

init();