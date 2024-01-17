
const menuBtn = document.querySelector('.navbar .menu_btn i');
const mobileMenu = document.querySelector('.navbar .nav_items');
const menuItems = document.querySelectorAll('.navbar .nav_items a');


menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
});

// Scrolling Feature
const navbar = document.querySelector('.navbar');
document.addEventListener('scroll', () => {
    let scrolled = window.scrollY;

    if(scrolled > 600) {
        navbar.classList.add('shadow');
    } else {
        navbar.classList.remove('shadow');
    }
});

// Year autoupdate feature
const year = document.getElementById('year');
const currentYear = new Date().getFullYear();
const newYear = new Date(`january 01 ${currentYear + 1} 00:00:00`);
year.innerHTML = currentYear;