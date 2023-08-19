"use strict"

const APERTURA_DECK = [];
const APERTURA_CHAR = {...PLAYER_CHARACTERS[0]};

for(let i=0; i<10; i++) {
  if(i<4) {
    APERTURA_DECK.push(aperturaCardDatabase[0]);
  } else if (i>3 && i<8) {
    APERTURA_DECK.push(aperturaCardDatabase[1]);
  } else if (i===8) {
    APERTURA_DECK.push(aperturaCardDatabase[2]);
  } else {
    APERTURA_DECK.push(aperturaCardDatabase[3]);
  }
}