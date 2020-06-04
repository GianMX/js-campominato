// VARIABILI
var randomPc = [];
var player;
var boom = false;
var score = 0;

// SETTING DIFFICOLTA
var mode = 84;
var difficulty = prompt('Scegli la difficoltà : Easy Mode (100) = premi 0 // Normal Mode (80) =  premi 1 // HardMode (50) = premi 2');
console.log('difficolta:', difficulty);
if (parseInt(difficulty)  == 2 ) {
  mode = 34;
  for (var i = 1; i <= 16; i++) {
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    for (var i = 1; i <= 16; i++) {
      randomPc.push(getRandomIntInclusive(1,50));
    }
    console.log('La super-mente uber malefica robotica ha piazzato le bombe... muhahah ' + randomPc);
  }
  console.log('HardMode' + ' TryHard');
  } else if ( parseInt(difficulty) == 1) {
  mode = 64;
  for (var i = 1; i <= 16; i++) {
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    for (var i = 1; i <= 16; i++) {
      randomPc.push(getRandomIntInclusive(1,80));
    }
    console.log('La super-mente cattiva robotica ha piazzato le bombe... muhahah ' + randomPc);
  }
  console.log('NormalMode' + ' Git Gud ');
    } else{
      function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      for (var i = 1; i <= 16; i++) {
        randomPc.push(getRandomIntInclusive(1,100));
      }
      console.log('La super-mente cattivella robotica ha piazzato le bombe... muhahah ' + randomPc);
      console.log ('EasyMode' + ' NoooooooB ');
}

// UTENTE INSERISCE 84 NUMERI
var x = 0;
while (x < mode && boom == false) {
  player = prompt('Scegli con attenzione un numero da 1 a 100... occhio alle bombe!')
  console.log('Hai digitato ' + player + ' vediamo che succede... ');

//  UTENTE SCEGLIE UNO DEI 16 NUMERI DEL COMPUTER
  for (var y = 0; y < randomPc.length; y++) {
    if (player == randomPc[y]) {
      boom = true;
      console.log('Oh! Che peccato, bomba presa' );
    }
  }
  x++;
  score++;
  console.log('Sei a ' + score + ' punto/i');
}
