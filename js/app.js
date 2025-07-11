let menuBars = document.querySelector(".menu-bar");
let menuClose = document.querySelector(".menu-close");
let menu = document.querySelector(".menu");
let overLay = document.querySelector(".overlay")

menuBars.addEventListener("click", () => {
    menu.style.left = "0px"
    overLay.style.display = "block"
})
menuClose.addEventListener("click", () => {
    menu.style.left = "-300px"
    overLay.style.display = "none"

})




// Overlay Effect

// let menuBars = document.querySelector(".menu-bar");
// let menuClose = document.querySelector(".menu-close");
// let menu = document.querySelector(".menu");
// let overLay = document.querySelector(".overlay");

// function openMenu() {
//   menu.style.left = "0px";
//   overLay.style.display = "block";
// }

// function closeMenu() {
//   menu.style.left = "-300px";
//   overLay.style.display = "none";
// }

// menuBars.addEventListener("click", (e) => {
//   e.stopPropagation();  // Body click বন্ধ করবে
//   openMenu();
// });

// menuClose.addEventListener("click", () => {
//   closeMenu();
// });

// overLay.addEventListener("click", () => {
//   closeMenu();
// });

// document.addEventListener("click", (e) => {
//   if (overLay.style.display === "block") {
//     // যদি overlay শো হয়
//     if (!menu.contains(e.target) && !menuBars.contains(e.target)) {
//       closeMenu();
//     }
//   }
// });
