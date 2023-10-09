"use strict"

function calculateDamage(card) {
  const PLAYED_CARD_DAMAGE = card.baseDamage + card.ADscaling * APERTURA_CHAR.STR + card.APscaling * APERTURA_CHAR.MAG + comboCounter;
  return PLAYED_CARD_DAMAGE;
}

function calculateBlock(card) {
  const PLAYED_CARD_BLOCK = card.baseBlock + card.DEFscaling * APERTURA_CHAR.DEF + card.DEXscaling * APERTURA_CHAR.DEX;
  return PLAYED_CARD_BLOCK;
}

function calculateDamageAfterBlock(damage) {
  const FINAL_DAMAGE = (SPAWNED_ENEMY.turnBlock - damage)
  SPAWNED_ENEMY.turnBlock -= damage;
  if(FINAL_DAMAGE < 0) {
    SPAWNED_ENEMY.HP += FINAL_DAMAGE;
  }
}

/* APERTURA CARDS */
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

function highGuardCard() {
  APERTURA_CHAR.stance = "balanced";
  rightSyncro = false;
  comboCounter = 0;
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
/* END APERTURA CARDS */