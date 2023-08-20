"use strict"

const DUMMY_DECK = [
  {
    cardName: "Basic Attack",
    cardFunction: dummyBasicAttack,
    cardType: "attack",
    baseDamage: 9,
  },
  {
    cardName: "Basic Block",
    cardFunction: dummyBasicBlock,
    cardType: "block",
    baseBlock: 9,
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