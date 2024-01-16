const navbar = document.querySelector('.navbar');
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

document.addEventListener('scroll', () => {
    let scrolled = window.scrollY;

    if(scrolled > 10) {
        navbar.classList.add('shadow');
    } else {
        navbar.classList.remove('shadow');
    }
})

