// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

// mostrar y ocultar el menú general
const menuToggleElement = document.getElementById("toggle-menu");
const menuElement = document.getElementById("menu");

function toggleMenu(){
    menuElement.classList.toggle("hide");
}

menuToggleElement.addEventListener('click', toggleMenu);

// -----------------------------------------------------

// mostrar y ocultar el submenu product
const submenuProductToggleElement = document.getElementById("toggle-submenu-product");
const submenuProductElement = document.getElementById("submenu-product");
const arrowProductElement = document.getElementById("arrow-product");

function toggleSubmenuProduct(){
    submenuProductElement.classList.toggle("hide");
    arrowProductElement.classList.toggle("header__nav--sublist-arrow-down");

    submenuCompanyElement.classList.add("hide");
    submenuConnectElement.classList.add("hide");
    arrowCompanyElement.classList.remove("header__nav--sublist-arrow-down");
    arrowConnectElement.classList.remove("header__nav--sublist-arrow-down");
}

submenuProductToggleElement.addEventListener('click', toggleSubmenuProduct);


// -----------------------------------------------------

// mostrar y ocultar el submenu company
const submenuCompanyToggleElement = document.getElementById("toggle-submenu-company");
const submenuCompanyElement = document.getElementById("submenu-company");
const arrowCompanyElement = document.getElementById("arrow-company");

function toggleSubmenuCompany(){
    submenuCompanyElement.classList.toggle("hide");
    arrowCompanyElement.classList.toggle("header__nav--sublist-arrow-down");

    submenuProductElement.classList.add("hide");
    submenuConnectElement.classList.add("hide");
    arrowProductElement.classList.remove("header__nav--sublist-arrow-down");
    arrowConnectElement.classList.remove("header__nav--sublist-arrow-down");
}

submenuCompanyToggleElement.addEventListener('click', toggleSubmenuCompany);


// -----------------------------------------------------

// mostrar y ocultar el submenu connect
const submenuConnectToggleElement = document.getElementById("toggle-submenu-connect");
const submenuConnectElement = document.getElementById("submenu-connect");
const arrowConnectElement = document.getElementById("arrow-connect");

function toggleSubmenuConnect(){
    submenuConnectElement.classList.toggle("hide");
    arrowConnectElement.classList.toggle("header__nav--sublist-arrow-down");

    submenuCompanyElement.classList.add("hide");
    submenuProductElement.classList.add("hide");
    arrowCompanyElement.classList.remove("header__nav--sublist-arrow-down");
    arrowProductElement.classList.remove("header__nav--sublist-arrow-down");
}

submenuConnectToggleElement.addEventListener('click', toggleSubmenuConnect);