import * as el from "../src/elements.js";
import onClickOpenLightBox from "./openLightBox.js";
import * as fn from "../src/closeLightBox.js";
export { galleryListener, closeBtnListener, overlayListener };

const galleryListener = el.galleryEl.addEventListener(
  "click",
  onClickOpenLightBox
);
const closeBtnListener = el.lightBox.addEventListener(
  "click",
  fn.onClickCloseLightBox
);
const overlayListener = el.lightBox.addEventListener(
  "click",
  fn.onClickOverlayCloseLightBox
);
