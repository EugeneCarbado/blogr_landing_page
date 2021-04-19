document.getElementById('hamburger').addEventListener('click', showNav);
document.getElementById('product').addEventListener('click', showSubMenu);
document.getElementById('company').addEventListener('click', showSubMenu);
document.getElementById('connect').addEventListener('click', showSubMenu);

function showNav() {
    const navMenu = document.getElementById('nav_bar');
    navMenu.classList.toggle('burger_active');
}

function showSubMenu(e) {
    e.target.nextElementSibling.classList.toggle('sub_item_active');
}

export { showNav, showSubMenu }