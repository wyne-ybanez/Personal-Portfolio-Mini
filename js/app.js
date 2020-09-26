const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');
// Whenever I click - it closes automatically
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');

// Reactive if I click
hamburger.addEventListener('click',()=> {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

// IF we go down lower in the website
// The nav bar will be coloured
document.addEventListener('scroll',() => {
    var scroll_position = window.scrollY;
     if(scroll_position > 550){
        header.style.backgroundColor = ""; 
    }else{
        header.style.backgroundColor = "transparent";
    }
});

// IF i Click it will close automatically
menu_item.forEach(item =>{
    item.addEventListener('click', ()=> {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});


