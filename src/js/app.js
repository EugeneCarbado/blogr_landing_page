const subItem = document.getElementsByName("subItem");
// const navSingleItem = document.querySelector(".nav__bar");
// const navItem = document.getElementsByName("navItemHeading");
const navMenu = document.getElementById('nav_bar');


document.getElementById('hamburger').addEventListener('click', showNav);

function showNav() {
    navMenu.classList.toggle('burger_active');
}

// navMenu.addEventListener('click', showSubMenu);

// function showSubMenu() {
//     console.log("clicked!");
//     for (let i = 0; i < subItem.length; i++) {
//         subItem[i].nextElementSibling.classList.toggle('sub_item_active');
//     }
// }

// if (window.innerWidth < 900) {
//     for (let i = 0; i < subItem.length; i++) {
//         subItem[i].addEventListener('click', function() {
//             subItem[i].nextElementSibling.classList.toggle('sub_item_active');
//         })
//     }
// }

export { showNav }