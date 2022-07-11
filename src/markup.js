export default itemsMarkup;
import * as el from "./elements.js";

function itemsMarkup(array) {
  return array.map((e) =>
    el.galleryEl.insertAdjacentHTML(
      "afterbegin",
      `<li class="gallery__item">
    <a
        class="gallery__link"
        href="${e.original}"
    >
        <img
        loading="lazy"
        class="gallery__image"
        src="${e.preview}"
        data-source="${e.original}"
        alt="${e.description}"
        />
    </a>
    </li>`
    )
  );
}
