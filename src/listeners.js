import * as el from "../src/elements";
import onClickOpenLightBox from "./openLightBox";
import * as fn from "../src/closeLightBox";
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
