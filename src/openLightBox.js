export default onClickOpenLightBox;
import * as el from "./elements";
import { onClickEscapeCloseLightBox } from "./closeLightBox";

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

  if (target.nodeName !== "IMG") {
    return;
  }
  // добавляем класс чтоб окрылось окно
  el.lightBox.classList.add("is-open");

  // добавялем к картинке в окне атрибуты (ссылку на картинку и альт)
  el.lightBoxImage.setAttribute(
    "src",
    `${event.target.getAttribute("data-source")}`
  );
  el.lightBoxImage.setAttribute("alt", `${event.target.alt}`);

  // добавляем слушателя по кнопке. при открытии окна начинается слушание по клавишам
  window.addEventListener("keydown", onClickEscapeCloseLightBox);
}
