const hamburgerIcon = document.querySelector(".header__hamburger-icon");
const menu = document.querySelector(".header__menu");

function handleMenu() {

  if(menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display ="block";
  };
}

hamburgerIcon.addEventListener("click", handleMenu);