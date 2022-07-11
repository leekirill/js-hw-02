// импортируем галерею из другого js файла
import galleryItems from "./images/gallery-items";
import itemsMarkup from "./src/markup";
import * as listener from "./src/listeners";

itemsMarkup(galleryItems);
console.log(listener);

// сделать стрелочки <- ->
