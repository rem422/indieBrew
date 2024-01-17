const navbar = document.querySelector('.navbar');
const menuBtn = document.querySelector('.navbar .menu_btn i');
const mobileMenu = document.querySelector('.navbar .nav_items');
const menuItems = document.querySelectorAll('.navbar .nav_items a');
const year = document.getElementById('year');


menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
});

// Scrolling Feature
document.addEventListener('scroll', () => {
    let scrolled = window.scrollY;

    if(scrolled > 600) {
        navbar.classList.add('shadow');
    } else {
        navbar.classList.remove('shadow');
    }
});