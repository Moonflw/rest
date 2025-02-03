export function popups() {
  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-popup]");
    if (button) {
      const popupId = button.getAttribute("data-popup");
      const popup = document.querySelector(`#${popupId}`);
      if (popup) popup.classList.add("open");
      return;
    }
    if (!event.target.closest(".popup__wrapper") || event.target.closest(".close-popup")) {
      console.log("work")
      document.querySelectorAll(".popup-all.open").forEach((popup) => {
        popup.classList.remove("open");
      });
    }
  });
}
