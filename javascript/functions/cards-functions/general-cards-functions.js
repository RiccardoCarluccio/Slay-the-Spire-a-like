"use strict"

function calculateDamage(card) {
  const PLAYED_CARD_DAMAGE = card.baseDamage + card.PhysicalScaling * APERTURA_CHAR.STR + card.MagicalScaling * APERTURA_CHAR.MAG + comboCounter;
  return PLAYED_CARD_DAMAGE;
}

function calculateBlock(card) {
  const PLAYED_CARD_BLOCK = card.baseBlock + card.DefenseScaling * APERTURA_CHAR.DEF + card.DexterityScaling * APERTURA_CHAR.DEX;
  return PLAYED_CARD_BLOCK;
}

function calculateDamageAfterBlock(damage) {
  const FINAL_DAMAGE = (SPAWNED_ENEMY.turnBlock - damage)
  SPAWNED_ENEMY.turnBlock -= damage;
  if(FINAL_DAMAGE < 0) {
    SPAWNED_ENEMY.turnBlock = 0;
    SPAWNED_ENEMY.HP += FINAL_DAMAGE;
  }
}