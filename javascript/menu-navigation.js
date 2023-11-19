"use strict"

const DISCARD_PILE_CONTAINER = document.getElementById("discard-pile");                 //contenitore
const DISCARD_PILE_OFFCANVA = document.getElementById("opened-discard-pile");
//const CLOSE_DISCARD_PILE = document.getElementById("close-discard-pile");               //pulsante

DISCARD_PILE_CONTAINER.addEventListener("click", openDiscardPileFunction);
//CLOSE_DISCARD_PILE.addEventListener("click", closeDiscardPileFunction);

function openDiscardPileFunction() {
  DISCARD_PILE_OFFCANVA.style.display = "block";
}

function closeDiscardPileFunction() {
  DISCARD_PILE_OFFCANVA.style.display = "none";
}