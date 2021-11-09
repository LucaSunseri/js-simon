/*
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/


const displayNumeri = document.querySelector('.numeri');
const displayRisultato = document.querySelector('.risultato');


const numeri = myRandomInts(5, 10, 15);
const numeriUtente = []; 
let numeriIndovinati = [];
const tempoGiocoSecondi = 30;

// START GAME 

stampaNumeri();

// Funzione che dopo $tempoGiocoSecondi resetta l'html
setInterval(function() {

  displayNumeri.innerHTML = '';

},tempoGiocoSecondi * 1000);


// Funzione che che dopo i secondi iniziale che hai per memorizzare i numeri ti fa inserire i numeri da indovinare e stampa il risultato
setTimeout(function() {

  for (let i = 0; i < 5; i++) {

    const numeroUtente = parseInt(prompt('Inserisci i numeri'));
    // console.log(numeroUtente);

    if (!(numeriUtente.includes(numeroUtente))) {
      numeriUtente.push(numeroUtente);
    }
    // console.log(numeriUtente);
  }

  // console.log(numeri);
  // console.log(numeriUtente);


  numeriIndovinati = numeriUtente.filter(x => numeri.includes(x));

  // console.log(numeriIndovinati);

  stampaRisultato();

},tempoGiocoSecondi * (1000 + 100));



//Funzione che stampa il risultato del gioco 
function stampaRisultato() {
  displayRisultato.innerHTML = `
  <p>
    I numeri erano ${numeri.join(' - ')} <br>
    I numeri da te inseriti sono ${numeriUtente.join(' - ')} <br>
    In totale hai totalizzato ${numeriIndovinati.length} punti!
  </p>
  `;
}


// Funzione che stampo nell'HTML i numeri da memorizzare
function stampaNumeri() {
  displayNumeri.innerHTML = `
  <h3>
    Osserva i segunti numeri per ${tempoGiocoSecondi} secondi:
  </h3>
  <p>
    ${numeri.join(' - ')}
  </p>
`;
}


// Funzione che genera un array di un tot. numeri(quantity) da x(min) a y(max) inclusi;
function myRandomInts(quantity, min, max) {

  const arrayNumeri = [];

  while(arrayNumeri.length < quantity) {

    let numero = Math.floor(Math.random() * (max - min + 1) + min);

    if (!(arrayNumeri.includes(numero))) {
      arrayNumeri.push(numero);
    }

  }

  return arrayNumeri;
}
