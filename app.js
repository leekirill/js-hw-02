// импортируем галерею из другого js файла

import galleryItems from "./gallery-items.js";

// находим элементы в html

const galleryEl = document.querySelector(".gallery");
const lightBox = document.querySelector(".lightbox");
const lightBoxOverlay = document.querySelector(".lightbox__overlay");
const lightBoxImage = document.querySelector(".lightbox__image");
const closeButton = document.querySelector('[data-action="close-lightbox"]');

// парсим разметку

galleryItems.map((e) =>
  galleryEl.insertAdjacentHTML(
    "afterbegin",
    `<li class="gallery__item">
  <a
    class="gallery__link"
    href="https://developer.mozilla.org/ru/docs/Web/API/Event/preventDefault"
  >
    <img
      class="gallery__image"
      src="${e.preview}"
      data-source="${e.original}"
      alt="${e.description}"
    />
  </a>
</li>`
  )
);

// добавляем события

galleryEl.addEventListener("click", onClickOpenLightBox);
lightBox.addEventListener("click", onClickCloseLightBox);
lightBox.addEventListener("click", onClickOverlayCloseLightBox);

// прописываем функции событий

// для открытия окна
function onClickOpenLightBox(event) {
  // чтоб страница не перезагружалась

  // ЭТА ШТУКА РЕШИЛА ПРОБЛЕМУ С ССЫЛКОЙ

  event.preventDefault();

  // находим event.target
  const target = event.target;

  // изначально событие стоит на всей галерее (ul),
  // но мы должны сделегировать события на IMG
  // по условию если nodeName у таргета === IMG, то выполняем событие

  // РЕШАЕТ ПРОБЛЕМУ ОТКРЫТИЯ ОКНА ПРИ КЛИКЕ НА ПРОСТРАНСТВО МЕЖДУ КАРТИНКАМИ

  if (target.nodeName === "IMG") {
    // добавляем класс чтоб окрылось окно
    lightBox.classList.add("is-open");

    // добавялем к картинке в окне атрибуты (ссылку на картинку и альт)
    lightBoxImage.setAttribute(
      "src",
      `${event.target.getAttribute("data-source")}`
    );
    lightBoxImage.setAttribute("alt", `${event.target.alt}`);

    // добавляем слушателя по кнопке. при открытии окна начинается слушание по клавишам
    window.addEventListener("keydown", onClickEscapeCloseLightBox);
  }
}

// для закрытия окна
function onClickCloseLightBox(event) {
  if (event.target === closeButton) {
    lightBox.classList.remove("is-open");
    lightBoxImage.removeAttribute("src");
    lightBoxImage.removeAttribute("alt");
    window.removeEventListener("keydown", onClickEscapeCloseLightBox);
  }
}
// для закрытия окна по оверлею
function onClickOverlayCloseLightBox(event) {
  if (event.target === lightBoxOverlay) {
    lightBox.classList.remove("is-open");
    lightBoxImage.removeAttribute("src");
    lightBoxImage.removeAttribute("alt");
    window.removeEventListener("keydown", onClickEscapeCloseLightBox);
  }
}
// для закрытия окна по ESC
function onClickEscapeCloseLightBox(event) {
  if (event.code === "Escape") {
    lightBox.classList.remove("is-open");
    lightBoxImage.removeAttribute("src");
    lightBoxImage.removeAttribute("alt");
    window.removeEventListener("keydown", onClickEscapeCloseLightBox);
  }
}

//////// что нужно решить

// мб переделать не инлайновым html, а через el.createElement
// сделать стрелочки <- ->
