"use strict"

let handSize = 5;
let indexCardCounter = 0;

let damageCounter = 0;
let turnDamage = 0;
let comboCounter = 0;
let ultimateCharge = 0;
let rightSyncro = false;
let turnsPassed = 0;

const HAND = [];
const DISCARD_PILE = [];
const ULT_VALUE = 10;

drawHandSizeCards();
console.log("DISCARD_PILE: ", DISCARD_PILE);
console.log("HAND: ", HAND);
console.log("APERTURA_DECK: ", APERTURA_DECK);
console.log("APERTURA_CHAR: ", APERTURA_CHAR);
console.log("DUMMY: ", SPAWNED_ENEMY);

displayCards();
displayStats();
negativeEnergy();

document.getElementById("end-turn").addEventListener('click', endTurn);
document.getElementById("ultimate-button").addEventListener('click', ultimateButton);