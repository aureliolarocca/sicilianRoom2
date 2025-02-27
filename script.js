function toggleMenu() {
  const hamMenu = document.querySelector(".ham-menu");
  const hamMenuContent = document.querySelector(".ham-menu-content");
  const spanHamMenu = document.querySelectorAll(".bar");
  let spanHamMenu1 = spanHamMenu[0];
  let spanHamMenu2 = spanHamMenu[1];
  let spanHamMenu3 = spanHamMenu[2];
  spanHamMenu1.classList.toggle("transform1");
  spanHamMenu2.classList.toggle("remove");
  spanHamMenu3.classList.toggle("transform2");
  hamMenuContent.classList.toggle("show");
  const logo = document.querySelector(".logo");
  logo.classList.toggle("active");
}
