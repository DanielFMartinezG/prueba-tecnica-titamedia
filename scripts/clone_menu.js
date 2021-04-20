const menu_container = document.getElementsByClassName("menu-container");
const grid_container = document.getElementsByClassName("grid-container");
const clone_menu = menu_container[0].cloneNode(true);
const clone_menu_search = clone_menu.getElementsByClassName("item-search");
clone_menu.removeChild(clone_menu_search[0]);
grid_container[0].before(clone_menu);