/* const subItem = document.getElementById("sub_item");
const navItem = document.getElementById("nav_item"); */


document.getElementById('hamburger').addEventListener('click', showNav);

function showNav() {
    
    const navMenu = document.getElementById('nav_bar');

    if(navMenu.style.display == 'none') {
        navMenu.style.display = 'block';
    } else {
        navMenu.style.display = 'none'
    }

}

export { showNav }