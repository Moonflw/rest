export function popups() {
  let popupTimer;
  let popupOpened = false;

  function openPopupAfterDelay(popupId, delay = 500000) {
    if (popupOpened) return;

    clearTimeout(popupTimer);

    popupTimer = setTimeout(() => {
      if (!document.querySelector(".popup-all.open")) {
        const popup = document.querySelector(`#${popupId}`);
        if (popup) {
          popup.classList.add("open");
          document.body.classList.add("no-scroll");
          lenisScroll.stop();
          popupOpened = true;
        }
      }
    }, delay);
  }

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-popup]");
    if (button) {
      const popupId = button.getAttribute("data-popup");
      const popup = document.querySelector(`#${popupId}`);
      if (popup) {
        popup.classList.add("open");
        document.body.classList.add("no-scroll");
        lenisScroll.stop();
        popupOpened = true;
        clearTimeout(popupTimer);
      }
      return;
    }

    if (
      !event.target.closest(".popup__wrapper") ||
      event.target.closest(".close-popup")
    ) {
      document.querySelectorAll(".popup-all.open").forEach((popup) => {
        popup.classList.remove("open");
        document.body.classList.remove("no-scroll");
        lenisScroll.start();
      });

      if (!popupOpened) {
        openPopupAfterDelay("time-popup");
      }
    }
  });
  openPopupAfterDelay("time-popup");
}
