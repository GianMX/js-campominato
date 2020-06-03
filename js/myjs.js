// SETTING DIFFICOLTA
var mode = 84;
difficulty = prompt('Scegli mode : Easy Mode = 0  Normal Mode = 1 HardMode = 2');
console.log('difficolta:', difficulty);
//
if (parseInt(difficulty)  == 2 ) {
  mode = 34;
  console.log('HardMode', mode);
} else if ( parseInt(difficulty) == 1) {
  mode = 64;
  console.log('NormalMode', mode);
} else
  console.log ('EasyMode', mode);

// VARIABILI DI GLOBALI
var randomPc = [];
var player;
var boom = false;
var score = 0;

///FUNZIONE GENERAZIONE RANDOM
function getRandomIntInclusive(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
}
for (var i = 1; i <= 16; i++) {
  randomPc.push(getRandomIntInclusive(1,100));
}
console.log('La super-mente robotica ha piazzato le bombe... muhahah ' + randomPc);

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
