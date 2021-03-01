
//Navbar 를 스크롤에 따라 위로가면 투명하게 아래로내리면 핑크색
const navbar = document.querySelector("#Navbar");
const navbarheight = navbar.getBoundingClientRect().height;
//메뉴 선택시 그위치로 자동 스크롤링
const navbarMenu = document.querySelector("#navbar__menu");
const li = navbarMenu.childNodes;
//home 구간  Contact me 클릭시 이동.
function ScrollMenu(){
 
   /*  console.log(li); 
    for(let i=0;i<li.length;i++){

        li[i].addEventListener('click',(event)=>{ //event사용 안하고.  
           const hi = li[i].id;
        
           const select = document.querySelector(hi);
           select.scrollIntoView();
  

        }) ;
       
    } */

   
     navbarMenu.addEventListener('click',(event)=>{
       const target = event.target;
        const id = target.dataset.id;
       
        if(id === null)
            return;
       
            const scrollTo = document.querySelector(id);
            scrollTo.scrollIntoView({behavior:"smooth"}); 
    }); 
    }

function NavBarScroll(){
    window.addEventListener('scroll',() =>{
        if(window.scrollY > navbarheight)
        navbar.classList.add('navbar--dark');
       else
       navbar.classList.remove('navbar--dark')
     });
}
function init(){
    NavBarScroll();
    ScrollMenu();

}

init();