'use strict';

const hamburger_menu = document.getElementById('menu');
const menu_container = document.getElementById('menuContainer');
const menu_list = document.getElementById('menuList');
const header = document.getElementsByTagName('header');
const main_logo = document.getElementById('logo');
const label_class = document.getElementsByClassName('label');
const events_img = document.getElementById('eventImg');

const header_limit = 80;

main_logo.addEventListener('click', () => window.location = "/")

header[0].classList.contains('down') ? header[0].style.marginTop = 7 + "vh" : header[0].style.marginTop = 5 + "vh";

document.addEventListener('scroll', () => {
    if (window.pageYOffset >= header_limit) {
        header[0].style.marginTop = 5 + "vh";
        header[0].classList.add('down');
        menu_list.classList.remove('animated');
    } else {
        header[0].style.marginTop = ((-window.pageYOffset * 10) / (header_limit * 1.5)) + 5 + "vh";
        header[0].classList.remove('down');
        menu_list.classList.add('animated');
    }
});

menu_container.addEventListener('click', function () {
    hamburger_menu.classList.toggle('close');
    hamburger_menu.classList.toggle('open');
    menu_list.classList.toggle('show');
    menu_list.classList.toggle('hiden');
});

if (label_class[0]) {
    const text_label = '<p>Join us for <strong>Happy Hour daily!</strong></p><p>from 3pm to 6pm</p>';
    label_class[0].innerHTML = text_label;
}

events_img.addEventListener('click', function () {
    events_img.classList?.toggle('zoom-in');
});