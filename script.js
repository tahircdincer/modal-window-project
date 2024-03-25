"use strict";

const modal = document.querySelector(".modal");
const btnOpenModal = document.querySelector(".show-modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

// Buttons were added ' .hidden ' class because implementing for one button only just for now.

// Functions implementing ' modal window ' logic
const openModalWindow = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModalWindow = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnOpenModal.addEventListener("click", openModalWindow);
if (
  modal.classList.contains("hidden") &&
  overlay.classList.contains("hidden")
) {
  btnCloseModal.addEventListener("click", closeModalWindow);
  overlay.addEventListener("click", closeModalWindow);
}

document.addEventListener("keydown", function (keyboard) {
  console.log(keyboard.key);
  if (keyboard.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModalWindow();
  }
});
