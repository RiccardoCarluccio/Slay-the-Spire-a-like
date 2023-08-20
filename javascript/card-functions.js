"use strict"

function calculateDamage(card) {
  const PLAYED_CARD_DAMAGE = card.baseDamage + card.ADscaling * APERTURA_CHAR.STR + card.APscaling * APERTURA_CHAR.MAG + comboCounter;
  return PLAYED_CARD_DAMAGE;
}

function calculateBlock(card) {
  const PLAYED_CARD_BLOCK = card.baseBlock + card.DEFscaling * APERTURA_CHAR.DEF + card.DEXscaling * APERTURA_CHAR.DEX;
  return PLAYED_CARD_BLOCK;
}

function energyCost(handIndex) {
  const SELECTED_CARD = HAND[handIndex];
  return SELECTED_CARD.energyCost;
}

function playCard(handIndex) {
  const PLAYED_CARD = HAND[handIndex];
  // const prefix = PLAYED_CARD.cardName;
  // function dynamicFunction(prefix) {
  //   return prefix.toLowerCase() + "Card()";
  // }
  // dynamicFunction(prefix);
  // console.log(dynamicFunction);
  PLAYED_CARD.cardFunction();
  
  if (PLAYED_CARD.cardType === "attack") {
    damageCounter = calculateDamage(PLAYED_CARD);
    turnDamage += damageCounter;
    SPAWNED_ENEMY.HP -= calculateDamage(PLAYED_CARD);

  } else if (PLAYED_CARD.cardType === "block") {
    damageCounter = 0;
    APERTURA_CHAR.turnBlock += calculateBlock(PLAYED_CARD);

  } else if (PLAYED_CARD.cardType === "attack and block") {
    damageCounter = calculateDamage(PLAYED_CARD);
    turnDamage += damageCounter;
    SPAWNED_ENEMY.HP -= calculateDamage(PLAYED_CARD);
    APERTURA_CHAR.turnBlock += calculateBlock(PLAYED_CARD);

  } else {

  }
    
  console.log("DUMMY HP: ", SPAWNED_ENEMY.HP);
  console.log("APERTURA BLOCK: ", APERTURA_CHAR.turnBlock);
  //console.log("STANCE: ", APERTURA_CHAR.stance);
  //console.log("COMBO: ", comboCounter);
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