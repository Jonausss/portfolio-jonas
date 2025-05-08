function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

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

//Show animation on load ======
navButtonsEls = document.getElementsByClassName("nav-button");
Array.prototype.forEach.call(navButtonsEls, function(buttonEl) {
  buttonEl.style.opacity = "0";
})
navButtonsAnimation();
async function navButtonsAnimation(){
  for (let i = 0; i < navButtonsEls.length; i++) {
    await sleep(50);
    navButtonsEls[i].style.opacity = "1";
  }
}
