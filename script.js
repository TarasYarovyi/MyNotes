"use strict";

const addBtn = document.querySelector(".add");
const deleteAllBtn = document.querySelector(".delete-all");
const saveBtn = document.querySelector(".save");
const cancelBtn = document.querySelector(".cancel");
const noteArea = document.querySelector(".note-area");
const notePanel = document.querySelector(".note-panel");
const category = document.querySelector("#category");
const text = document.querySelector("#text");
const error = document.querySelector(".error");
const note = document.querySelector(".note");

let cardID = 1;

addBtn.addEventListener("click", () => (notePanel.style.display = "flex"));
deleteAllBtn.addEventListener("click", () => (noteArea.innerHTML = ""));
cancelBtn.addEventListener("click", () => (notePanel.style.display = "none"));
saveBtn.addEventListener("click", saveNote);

function saveNote() {
  if (category.value !== "0" && text.value) {
    notePanel.style.display = "none";
    const newNote = document.createElement("div");
    newNote.className = "note";
    newNote.id = cardID;
    newNote.innerHTML = ` <div class="note-header">
        <h3 class="note-tittle">Note #${cardID}</h3>
        <button class="delete-note" onclick="deleteNote(${cardID})">
          <i class="fas fa-times icon"></i>
        </button>
      </div>
      <div class="note-body">${text.value}</div>`;

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
    error.style.visibility = "hidden";
  } else {
    error.style.visibility = "visible";
  }
}

function deleteNote(id) {
  document.getElementById(`${id}`).remove();
}
