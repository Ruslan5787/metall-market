const UI_ELEMENTS = {
  copyButtons: document.querySelectorAll("#copyButton"),
  modal: document.querySelector(".modal"),
};

UI_ELEMENTS.copyButtons.forEach((copyButton) => {
  copyButton.addEventListener("click", () => {
    const elementContentForCopy =
      copyButton.parentNode.querySelector("#content-for-copy");

    if (navigator.clipboard) {
      navigator.clipboard.writeText(elementContentForCopy.textContent).then(
        () => {
          UI_ELEMENTS.modal.style.display = "block";

          setTimeout(() => {
            UI_ELEMENTS.modal.style.display = "none";
          }, 2000);
        },

        (err) => {
          console.error("Произошла ошибка при копировании текста: ", err);
        }
      );
    }
  });
});
