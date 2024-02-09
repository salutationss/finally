/* SPLASH ANIMATION */
let intro = document.querySelector(".intro");
let logo = document.querySelector(".logo-header");
let logoSpan = document.querySelectorAll(".logo");

window.addEventListener("DOMContentLoaded", ()=> {
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
    }, 2000);

    setTimeout(() => {
      intro.style.top = "-100vh";
      // reset the background
    }, 2300);
  });
});

/* SCROLL EVENTS */
let current = 0;
let target = 0;
let ease = 0.1;

let windowWidth, containerHeight, imageHeight, skewDiff;

let container = document.querySelector(".scrollable");
let images = Array.from(document.querySelectorAll(".wrap .img"));
console.log(images);

const title = document.querySelector(".fixed-title");

images.forEach((image, index) => {
  image.style.backgroundImage = `url(./images/${index + 1}.JPG)`;
});

function lerp(start, end, t) {
  return start * (1 - t) + end * t;
}

function setTransform(element, transform) {
  element.style.transform = transform;
}

function setUpAnimation() {
  windowWidth = window.innerWidth;
  containerHeight = container.getBoundingClientRect().height;
  imageHeight =
    containerHeight / (windowWidth > 760 ? images.length / 2 : images.length);
  document.body.style.height = `${containerHeight}px`;
  smoothScroll();
  console.log(containerHeight)
}

function smoothScroll() {
  current = lerp(current, target, ease);
  current = parseFloat(current.toFixed(2));
  target = window.scrollY;

  setTransform(container, `translateY(${-current}px)`);
  setTransform(title, `translateY(${current}px)`);
  updateImages();
  requestAnimationFrame(smoothScroll);
}

function updateImages() {
  let ratio = current / imageHeight;
  let intersectionRatioIndex, intersectionRatioValue;

  images.forEach((image, index) => {
    intersectionRatioIndex = windowWidth > 760 ? parseInt(index / 2) : index;
    intersectionRatioValue = ratio - intersectionRatioIndex;

    setTransform(image, `translateY(${intersectionRatioValue * 20 }px)`);
  });

}

setUpAnimation();
