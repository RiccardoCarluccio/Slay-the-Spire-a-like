"use strict"

const DISCARD_PILE_CONTAINER = document.getElementById("discard-pile");                   //contenitore
const DISCARD_PILE_OFFCANVA = document.getElementById("opened-discard-pile");
const CLOSE_DISCARD_PILE = document.getElementById("close-discard-pile");                 //pulsante

DISCARD_PILE_CONTAINER.addEventListener("click", openDiscardPileFunction);
CLOSE_DISCARD_PILE.addEventListener("click", closeDiscardPileFunction);

function openDiscardPileFunction() {
  DISCARD_PILE_OFFCANVA.style.display = "flex";
  displayDiscardedCards();
}

function closeDiscardPileFunction() {
  DISCARD_PILE_OFFCANVA.style.display = "none";
}

function displayDiscardedCards() {
  const OPENED_DISCARD_PILE_CONTENT = document.getElementById("opened-discard-pile-content");
  OPENED_DISCARD_PILE_CONTENT.innerHTML = '';
  for(let i=0; i<DISCARD_PILE.length; i++) {
    if(DISCARD_PILE[i].cardType === "attack") {
      OPENED_DISCARD_PILE_CONTENT.innerHTML += `
        <div class="card card-in-hand ${DISCARD_PILE[i].cardType}">
          <div class="card-energy attack-energy">${DISCARD_PILE[i].energyCost}</div>
          <div class="card-name ${DISCARD_PILE[i].cardType}">${DISCARD_PILE[i].cardName}</div>
          <div class="card-img"></div>
          <div class="card-description ${DISCARD_PILE[i].cardType}">
            <div class="card-numbers-display">
              <div class="card-icon attack-icon"></div> ${DISCARD_PILE[i].baseDamage}
            </div> 
            <div class="card-numbers-display">
              <div class="card-icon stance-icon"></div>
              ${DISCARD_PILE[i].stanceDescription}
            </div>
          </div>
        </div>
      `;
    } else if (DISCARD_PILE[i].cardType === "block") {
      OPENED_DISCARD_PILE_CONTENT.innerHTML += `
        <div class="card card-in-hand ${DISCARD_PILE[i].cardType}">
        <div class="card-energy block-energy">${DISCARD_PILE[i].energyCost}</div>
          <div class="card-name ${DISCARD_PILE[i].cardType}">${DISCARD_PILE[i].cardName}</div>
          <div class="card-img"></div>
          <div class="card-description ${DISCARD_PILE[i].cardType}">
            <div class="card-numbers-display">
              <div class="card-icon block-icon"></div>
              ${DISCARD_PILE[i].baseBlock}
            </div>
            <div class="card-numbers-display">
              <div class="card-icon stance-icon"></div>
              ${DISCARD_PILE[i].stanceDescription}
            </div>
          </div>
        </div>
      `;
    }
  }
}