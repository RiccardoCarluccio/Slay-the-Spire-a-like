"use strict"

//ATTACK CARDS
function jabCard() {
    if(APERTURA_CHAR.stance === "right") {
        comboCounter++;
        displayUlt(1);
    } else {
        comboCounter = 0;
    }
    APERTURA_CHAR.stance = "left";
    rightSyncro = false;
}
  
function crossPunchCard() {
    if(rightSyncro) {
        comboCounter += 4;
        displayUlt(4);
    } else if(APERTURA_CHAR.stance === "left") {
        comboCounter += 2;
        displayUlt(2);
    } else {
        comboCounter = 0;
    }
    APERTURA_CHAR.stance = "right";
    rightSyncro = false;
}

//DEFEND CARDS
function highGuardCard() {
    APERTURA_CHAR.stance = "balanced";
    rightSyncro = false;
    comboCounter = 0;
}

function rightShoulderDuck() {
    if(APERTURA_CHAR.stance === "left") {
        comboCounter++;
        displayUlt(1);
    } else {
        comboCounter = 0;
    }
    APERTURA_CHAR.stance = "right";
    rightSyncro = true;
}