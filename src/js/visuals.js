function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const navEl = document.querySelector("nav");
const navButtonsEls = document.getElementsByClassName("nav-button");
const asideEls = document.querySelectorAll("aside");
const asideSlidebuttonsEls = document.getElementsByClassName("jon-aside-button");

//===== LOAD PAGE =====
asideEls.forEach(el => { //Disable all asides when page load
  el.style.display = "none";
  el.style.opacity = "0";
})


//Hide|Show Header & Aside ======

window.addEventListener("scroll", () => { //Disable and enable elements when scroll
  const currentScrollPos = window.pageYOffset;

  if (currentScrollPos < 50) {
    navEl.style.display = "flex";
    navEl.style.opacity = "1";

    asideEls.forEach(el => {
      el.style.opacity = "0"
      noneWhenTransitionEnd(el);
    })
  } 
  else if (currentScrollPos >= 50) {
    navEl.style.opacity = "0";
    noneWhenTransitionEnd(navEl);

    asideEls.forEach(el => {
      el.style.opacity = "1"
      el.style.display = "flex";
    })
  }
});
function noneWhenTransitionEnd(element){
  element.addEventListener("transitionend", (event) => {
    if (event.propertyName === "opacity") {
      element.style.display = "none";
    }
  });
}

//Show animation on load ======
navButtonsEls.forEach(el => {
  el.style.opacity = "0";
})
navButtonsAnimation();
async function navButtonsAnimation(){
  for (let i = 0; i < navButtonsEls.length; i++) {
    await sleep(50);
    navButtonsEls[i].style.opacity = "1";
  }
}

//========= ASIDE ===========
//show buttons when hover
asideSlidebuttonsEls.forEach((el, index) => {
  el.addEventListener("hover", () => {
    console.log("oi")
  })
})