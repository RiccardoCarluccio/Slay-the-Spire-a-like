"use strict"

function calculateEnemyDamage(card) {
  const PLAYED_CARD_DAMAGE = card.baseDamage;
  return PLAYED_CARD_DAMAGE;
}

function calculateEnemyBlock(card) {
  const PLAYED_CARD_BLOCK = card.baseBlock;
  return PLAYED_CARD_BLOCK;
}

function displayEnemyActions() {
  for(let i=0; i<SPAWNED_ENEMY.actions; i++) {
    const RANDOM_INDEX = Math.floor(Math.random() * SPAWNED_ENEMY_DECK.length);
    const RANDOM_CARD = SPAWNED_ENEMY_DECK[RANDOM_INDEX];

    ENEMY_FUNCTIONS.push(RANDOM_CARD.cardFunction);

    if(RANDOM_CARD.cardType === "attack") {
      enemyOffense += calculateEnemyDamage(RANDOM_CARD);
    } else if(RANDOM_CARD.cardType === "block") {
      enemyDefense += calculateEnemyBlock(RANDOM_CARD);
    }    
  }
}

function enemyTurn() {
  const ENEMY_DAMAGE = (APERTURA_CHAR.turnBlock - enemyOffense);
  if(ENEMY_DAMAGE < 0) {
    APERTURA_CHAR.HP += ENEMY_DAMAGE;
  }
  SPAWNED_ENEMY.turnBlock = 0;
  SPAWNED_ENEMY.turnBlock += enemyDefense;
  // for(let i=0; i<ENEMY_FUNCTIONS.length; i++) {
    
  // }
}

function dummyBasicAttack() {
  console.log("genshin");
}

function dummyBasicBlock() {
  console.log("fortnite");
}