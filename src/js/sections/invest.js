import { queryMatches } from "../components/utils.js";

export function invest() {
    const mob = queryMatches(768, "max")
    if(mob) {
    
        const items = document.querySelectorAll(".invest__list-item");

function closeAll() {
  items.forEach(item => {
    const textHolder = item.querySelector(".invest__list-item-text-holder");
    textHolder.style.maxHeight = "0px";
    textHolder.style.opacity = "0";
    item.classList.remove("open");
  });
}

if (items.length > 0) {
  items[0].classList.add("open");
  const firstTextHolder = items[0].querySelector(".invest__list-item-text-holder");
  firstTextHolder.style.maxHeight = firstTextHolder.scrollHeight + "px";
  firstTextHolder.style.opacity = "1";
}

items.forEach(item => {
  item.addEventListener("click", function () {
    if (this.classList.contains("open")) {
      closeAll(); // Если уже открыт — просто закрываем
    } else {
      closeAll(); // Закрываем все
      const textHolder = this.querySelector(".invest__list-item-text-holder");
      textHolder.style.maxHeight = textHolder.scrollHeight + "px"; // Открываем текущий
      textHolder.style.opacity = "1";
      this.classList.add("open");
    }
  });
});


    }

}