"use strict"

//healthPoints = starting health pool
//strenght = physical attack
//dexterity = evasion defense
//magicAffinity = Magical prowess
//defense = block defense
//constitution = diocane è?
//resistance = debuffs resistance?
//turnBlock = block accumulated during the turn
//stance = starting stance
//energy = starting energy

const PLAYER_CHARACTERS = [
  {
    characterName: "Apertura",      //temp stats
    HP: 100,
    STR: 5,
    DEX: 5,
    MAG: 5,   //lower MAG on starting stats and equip -> higher card scaling for Apertura?
    DEF: 5,
    CON: 5,
    RES: 5,
    turnBlock: 0,
    stance: "balanced",
    energy: 8,
  }
]