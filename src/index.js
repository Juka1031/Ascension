
import Board from "./board.js"




document.addEventListener('DOMContentLoaded',() => {
const board = new Board(document.querySelector("canvas"));
window.addEventListener("keydown", keyPressed); //event listeners for key inputs
window.addEventListener("keyup",   keyPressed);
})

