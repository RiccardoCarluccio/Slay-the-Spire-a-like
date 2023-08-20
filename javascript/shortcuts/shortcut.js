"use strict"

document.getElementById("end-turn-e").addEventListener("keyup", (ev) => {
  const pressedKey = ev.code;
  switch(pressedKey) {
    case 'KeyE':
      endTurn();
      break;  //con la collaborazione di Lorenzo Porrega, Simone Filograna, Valerio Collura
  }
})