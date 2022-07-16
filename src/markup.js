import { galleryEl } from "./elements";
import gallery from "./gallery/gallery-items";
import template from "./template/markup";

galleryEl.insertAdjacentHTML("afterbegin", template(gallery));
