"use strict"

function calculateEnemyDamage(card) {
  const PLAYED_CARD_DAMAGE = card.baseDamage;
  return PLAYED_CARD_DAMAGE;
}

function calculateEnemyBlock(card) {
  const PLAYED_CARD_BLOCK = card.baseBlock;
  return PLAYED_CARD_BLOCK;
}

function enemyTurn() {
  for(let i=0; i<SPAWNED_ENEMY.actions; i++) {
    const RANDOM_INDEX = Math.floor(Math.random() * SPAWNED_ENEMY_DECK.length);
    const ENEMY_ACTION = SPAWNED_ENEMY_DECK[RANDOM_INDEX];
    ENEMY_ACTION.cardFunction();

    if(SPAWNED_ENEMY_DECK[RANDOM_INDEX].cardType === "attack") {
      const ENEMY_DAMAGE = (APERTURA_CHAR.turnBlock - calculateEnemyDamage(ENEMY_ACTION));
      if(ENEMY_DAMAGE < 0) {
        APERTURA_CHAR.HP += ENEMY_DAMAGE;
      }
    } else if(SPAWNED_ENEMY_DECK[RANDOM_INDEX].cardType === "block") {
      SPAWNED_ENEMY.turnBlock += calculateEnemyBlock(ENEMY_ACTION);
    }
  }
}

function dummyBasicAttack() {
  console.log("genshin");
}

function dummyBasicBlock() {
  console.log("fortnite");
}