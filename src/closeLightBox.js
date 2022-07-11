export {
  onClickCloseLightBox,
  onClickOverlayCloseLightBox,
  onClickEscapeCloseLightBox,
};
import * as el from "./elements.js";

function onClickCloseLightBox(event) {
  if (event.target === el.closeButton) {
    el.lightBox.classList.remove("is-open");
    el.lightBoxImage.removeAttribute("src");
    el.lightBoxImage.removeAttribute("alt");
    window.removeEventListener("keydown", onClickEscapeCloseLightBox);
  }
}
// для закрытия окна по оверлею
function onClickOverlayCloseLightBox(event) {
  if (event.target === el.lightBoxOverlay) {
    el.lightBox.classList.remove("is-open");
    el.lightBoxImage.removeAttribute("src");
    el.lightBoxImage.removeAttribute("alt");
    window.removeEventListener("keydown", onClickEscapeCloseLightBox);
  }
}
// для закрытия окна по ESC
function onClickEscapeCloseLightBox(event) {
  if (event.code === "Escape") {
    el.lightBox.classList.remove("is-open");
    el.lightBoxImage.removeAttribute("src");
    el.lightBoxImage.removeAttribute("alt");
    window.removeEventListener("keydown", onClickEscapeCloseLightBox);
  }
}
