const hamburger_menu = document.getElementById('menu');
const menu_container = document.getElementById('menuContainer');
const menu_list = document.getElementById('menuList');
const header = document.getElementsByTagName('header');

const header_limit = 580;

document.addEventListener('scroll', ()=> {
    if(window.pageYOffset >= header_limit){
        header[0].classList.add('down');
        menu_list.classList.remove('animated');
    }else{
        header[0].classList.remove('down');
        menu_list.classList.add('animated');
    }
});

menu_container.addEventListener('click', function(){
    hamburger_menu.classList.toggle('close');
    hamburger_menu.classList.toggle('open');
    menu_list.classList.toggle('show');
    menu_list.classList.toggle('hiden');
});