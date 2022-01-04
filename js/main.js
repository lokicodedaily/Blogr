// let menu = document.querySelector(".menu");

let product = document.querySelector(".product");
let connect = document.querySelector(".connect");
let company = document.querySelector(".company");

const productMenu = document.querySelector(".product-menu");
const companyMenu = document.querySelector(".company-menu");
const connectMenu = document.querySelector(".connect-menu");

product.addEventListener("click", openList);
connect.addEventListener("click", openList);
company.addEventListener("click", openList);
// menu.addEventListener("click", openList);

function openList(e) {
  if (e.target.classList.contains("product")) {
    productMenu.classList.toggle("current");
    if(productMenu.classList.contains("current")){
        e.target.querySelector(".white-down").style.transform =
          "rotate(180deg)";
    } else {
      e.target.querySelector(".white-down").style.transform = "rotate(0deg)";
    }
  } else if (e.target.classList.contains("connect")) {
    connectMenu.classList.toggle("current");
    if (connectMenu.classList.contains("current")) {
      e.target.querySelector(".white-down").style.transform = "rotate(180deg)";
    } else {
      e.target.querySelector(".white-down").style.transform = "rotate(0deg)";
    }
  } else if (e.target.classList.contains("company")) {
    companyMenu.classList.toggle("current");
    if (companyMenu.classList.contains("current")) {
      e.target.querySelector(".white-down").style.transform = "rotate(180deg)";
    } else {
      e.target.querySelector(".white-down").style.transform = "rotate(0deg)";
    }
  }
}

let hamburger = document.querySelector("#hamburger");
let close = document.querySelector("#close");
hamburger.addEventListener("click", hamMenu);
close.addEventListener("click", closeMenu);

function hamMenu(e) {
  hamburger.style.display="none";
  close.style.display ="inline-block";
  document.querySelector(".hamburger-menu").classList.add("active");
}

function closeMenu(e) {
  close.style.display="none";
  hamburger.style.display="inline-block";
  document.querySelector(".hamburger-menu").classList.remove("active");
}


