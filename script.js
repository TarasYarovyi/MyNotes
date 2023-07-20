"use strict";

const addBtn = document.querySelector(".add");
const deleteAllBtn = document.querySelector(".delete-all");
const deleteNoteBtns = document.getElementsByClassName("delete-note");
const saveBtn = document.querySelector(".save");
const cancelBtn = document.querySelector(".cancel");
const noteArea = document.querySelector(".note-area");
const notePanel = document.querySelector(".note-panel");
const category = document.querySelector("#category");
const text = document.querySelector("#text");
const error = document.querySelector(".error");
const note = document.querySelector(".note");

let selectedValue;
let cardID = 1;

addBtn.addEventListener("click", () => {
  notePanel.style.display = "flex";
});

cancelBtn.addEventListener("click", () => {
  notePanel.style.display = "none";
});

saveBtn.addEventListener("click", () => {
  notePanel.style.display = "none";
  const newNote = document.createElement("div");
  newNote.className = "note";
  newNote.innerHTML = `<div class="note-header">
  <h3 class="note-tittle">Note #${cardID}</h3>
  <button class="delete-note">
    <i class="fas fa-times icon"></i>
  </button>
</div>
<div class="note-body">
  ${text.value}
</div>`;

  switch (category.value) {
    case "1":
      newNote.classList.add("shopping");
      break;
    case "2":
      newNote.classList.add("work");
      break;
    case "3":
      newNote.classList.add("other");
      break;

    default:
      break;
  }
  noteArea.append(newNote);
  text.value = "";
  cardID++;
  category.value = "0";
});
