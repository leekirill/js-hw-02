import * as el from "./elements";
import onClickOpenLightBox from "./openLightBox.js";
import * as fn from "./closeLightBox.js";
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
