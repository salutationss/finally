/* SPLASH ANIMATION */
let intro = document.querySelector(".intro");
let logo = document.querySelector(".logo-header");
let logoSpan = document.querySelectorAll(".logo");

window.addEventListener("DOMContentLoaded", () => {
  //bg.style.display = "none";
  setTimeout(() => {

    logoSpan.forEach((span, idx) => {

      setTimeout(() => {

        span.classList.add("active");
      }, (idx + 1) * 400);
    });

    setTimeout(() => {
        
        logoSpan.forEach((span, idx) => {
  
          setTimeout(() => {
  
            span.classList.remove("active");
            span.classList.add("fade");
          }, (idx + 1) * 50);
        });
    }, 2000)
    
    setTimeout(() => {
      intro.style.top = "-100vh";
      // reset the background
    
    }, 2300)
  });
});

/*/ SLIDER /*/
const slidesContainer = document.getElementById("slides-container");
const slideArrowPrev = document.getElementById("slide-arrow-prev");
const slideArrowNext = document.getElementById("slide-arrow-next");

slideArrowPrev.addEventListener("click", () => {
  slidesContainer.scrollBy({
    top: 0,
    left: -slidesContainer.offsetWidth,
    behavior: "smooth",
  });
  if (slidesContainer.scrollLeft <= 0) {
    slidesContainer.scrollTo({
      top: 0,
      left: slidesContainer.scrollWidth,
      behavior: "smooth",
    });
  }
});

slideArrowNext.addEventListener("click", () => {
  slidesContainer.scrollBy({
    top: 0,
    left: slidesContainer.offsetWidth,
    behavior: "smooth",
  });
  if (
    slidesContainer.scrollLeft + slidesContainer.offsetWidth >=
    slidesContainer.scrollWidth
  ) {
    slidesContainer.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
});
/*/ End of Slider /*/
// DOM content loaded
document.addEventListener("DOMContentLoaded", () => {
  // populate 404 page when user tries to access a page that doesn't exist
  const urlPaths = ["index.html", "about.html", "work.html"];
  const path = [window.location.pathname];
  if (urlPaths.includes(path)) {
    document.querySelector("body").innerHTML = `
  <div class="container">
    <h1>404 Page Not Found</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
  </div>
`;
  }
});
