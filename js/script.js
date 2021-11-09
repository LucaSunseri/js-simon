/*
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/


const displayNumeri = document.querySelector('.numeri');
const displayRisultato = document.querySelector('.risultato');


const numeriDaMemorizzare = myRandomInts(5, 10, 99); 
const tempoGiocoSecondi = 30;


/*********** START GAME ***********/

stampaNumeri();

setTimeout(resetHtml,tempoGiocoSecondi * 1000);

setTimeout(function() {

  const numeriUtente = numeriInseriti();

  const numeriIndovinati = numeriUtente.filter(x => numeriDaMemorizzare.includes(x));
  // console.log(numeriIndovinati);

  stampaRisultato(numeriUtente, numeriIndovinati);

},tempoGiocoSecondi * (1000 + 1));


/*********** FUNZIONI ***********/

// Funzione che stampa il risultato del gioco 
function stampaRisultato(numeriUtente, numeriIndovinati) {
  displayRisultato.innerHTML = `
  <p>
    I numeri erano ${numeriDaMemorizzare.join(' - ')} <br>
    I numeri da te inseriti sono ${numeriUtente.join(' - ')} <br>
    In totale hai totalizzato ${numeriIndovinati.length} punti!
  </p>
  `;
};

// Funzione che stampo nell'HTML i numeri da memorizzare
function stampaNumeri() {
  displayNumeri.innerHTML = `
  <h3>
    Osserva i segunti numeri per ${tempoGiocoSecondi} secondi:
  </h3>
  <p>
    ${numeriDaMemorizzare.join(' - ')}
  </p>
`;
};

// Funzione che dopo $tempoGiocoSecondi resetta l'html
function resetHtml() {

  displayNumeri.innerHTML = '';

};

// Funzione che che chiede all'utente i numeri di inserire tot numeri quanti quelli da indovinare
function numeriInseriti() {

  const numeriUtente = [];  

  for (let i = 0; i < 5; i++) {

    const numeroUtente = parseInt(prompt('Inserisci i numeri che hai appena osservato'));
    // console.log(numeroUtente);

    if (!(numeriUtente.includes(numeroUtente))) {
      numeriUtente.push(numeroUtente);
    }
    // console.log(numeriUtente);
  }
  // console.log(numeri);
  // console.log(numeriUtente);

  return numeriUtente;
};

// Funzione che genera un array di un tot. numeriRandom(quantity) da x(min) a y(max) inclusi;
function myRandomInts(quantity, min, max) {

  const arrayNumeri = [];

  while(arrayNumeri.length < quantity) {

    let numero = Math.floor(Math.random() * (max - min + 1) + min);

    if (!(arrayNumeri.includes(numero))) {
      arrayNumeri.push(numero);
    }

  }

  return arrayNumeri;
};
