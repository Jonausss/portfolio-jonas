//==========HEADER SECTION==========//

//Hide|Show Header ======
const navElement = document.querySelector("nav");
let isVisible = true;

window.addEventListener("scroll", () => {
  const currentScrollPos = window.pageYOffset;

  if (currentScrollPos < 50 && !isVisible) {
    navElement.style.display = "flex";
    navElement.style.opacity = "1";
    isVisible = true;
  } else if (currentScrollPos >= 50 && isVisible) {
    navElement.style.opacity = "0";
    isVisible = false;
  }
});

navElement.addEventListener("transitionend", (event) => {
  if (event.propertyName === "opacity" && !isVisible) {
    navElement.style.display = "none";
  }
});