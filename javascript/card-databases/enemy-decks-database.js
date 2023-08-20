"use strict"

const DUMMY_DECK = [
  {
    cardName: "Basic Attack",
    cardFunction: dummyBasicAttack,
    cardType: "attack",
    baseDamage: 10,
  },
  {
    cardName: "Basic Block",
    cardFunction: dummyBasicBlock,
    cardType: "block",
    baseBlock: 10,
  },
]

// const ENEMY_DECKS = [
//   {
//     characterName: "dummy",
//     cards: [
//       {
//         cardName: "Basic Attack",
//         baseDamage: 10,
//       },
//       {
//         cardName: "Basic Block",
//         baseBlock: 10,
//       },
//     ]
//   },
// ];