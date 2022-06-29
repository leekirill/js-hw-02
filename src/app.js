import galleryItems from "./gallery-items.js";

const imagesEl = document.querySelector(".gallery");
const lightBox = document.querySelector(".lightbox");
const lightBoxOverlay = document.querySelector(".lightbox__overlay");
const lightBoxImage = document.querySelector(".lightbox__image");
const closeButton = document.querySelector('[data-action="close-lightbox"]');

galleryItems.map((e) =>
  imagesEl.insertAdjacentHTML(
    "afterbegin",
    `<img srcset='${e.preview}' src='${e.original}'  alt='${e.description}' class='gallery__item gallery__image gallery__link'>`
  )
);

imagesEl.addEventListener("click", onClickOpenLightBox);
lightBox.addEventListener("click", onClickCloseLightBox);
lightBox.addEventListener("click", onClickOverlayCloseLightBox);

function onClickOpenLightBox(event) {
  lightBox.classList.add("is-open");
  lightBoxImage.setAttribute("src", `${event.target.src}`);
  lightBoxImage.setAttribute("alt", `${event.target.alt}`);
  window.addEventListener("keydown", onClickEscapeCloseLightBox);
}
function onClickCloseLightBox(event) {
  if (event.target === closeButton) {
    lightBox.classList.remove("is-open");
    lightBoxImage.removeAttribute("src");
    lightBoxImage.removeAttribute("alt");
    window.removeEventListener("keydown", onClickEscapeCloseLightBox);
  }
}
function onClickOverlayCloseLightBox(event) {
  if (event.target === lightBoxOverlay) {
    lightBox.classList.remove("is-open");
    lightBoxImage.removeAttribute("src");
    lightBoxImage.removeAttribute("alt");
    window.addEventListener("keydown", onClickEscapeCloseLightBox);
  }
}
function onClickEscapeCloseLightBox(event) {
  if (event.code === "Escape") {
    lightBox.classList.remove("is-open");
    lightBoxImage.removeAttribute("src");
    lightBoxImage.removeAttribute("alt");
    window.addEventListener("keydown", onClickEscapeCloseLightBox);
  }
}

// function onEscapeCloseLightBox(event) {
//   console.log(lightBox);
//   //   if (event.code === "Escape") {
//   //     lightBox.classList.remove("is-open");
//   //     lightBoxImage.removeAttribute("src");
//   //     lightBoxImage.removeAttribute("alt");
//   //   }
// }
