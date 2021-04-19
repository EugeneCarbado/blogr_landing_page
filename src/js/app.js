const subItem = document.getElementsByName("subItem");


document.getElementById('hamburger').addEventListener('click', showNav);

function showNav() {
    
    const navMenu = document.getElementById('nav_bar');
    navMenu.classList.toggle('burger_active');
}



// document.addEventListener('click', showSubMenu);

function showSubMenu() {
    // if (window.innerWidth < 900) {
    //     this.children[1].classList.toggle('sub_item_active');
    // }
    // if (window.innerWidth < 900) {
    //     for (let i = 0; i < navItem.length; i++) {
    //         navItem[i].addEventListener('click', function() {
    //             navItem[i].nextElementSibling.classList.toggle('sub_item_active');
    //         })
    //     }
    // }
}

export { showNav, showSubMenu }