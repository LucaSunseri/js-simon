/*
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/




const numeri = myRandomInts(5, 10, 15);

const displayNumeri = document.querySelector('.numeri');

const displayRisultato = document.querySelector('.risultato');


displayNumeri.innerHTML = `
  ${numeri.join(' - ')}
`;

const intervalloTempoGioco = setInterval(function() {

  displayNumeri.classList.add('d-none');

},5000);


setTimeout(function() {

  const numeriUtente = [];

  for (let i = 0; i < 5; i++) {

    const numeroUtente = parseInt(prompt('Inserisci i numeri'));
    // console.log(numeroUtente);

    numeriUtente.push(numeroUtente);
  
    // console.log(numeriUtente);
  }

  console.log(numeri);
  console.log(numeriUtente);


  let intersection = numeriUtente.filter(x => numeri.includes(x));

  console.log(intersection);

  displayRisultato.innerHTML = `
  I numeri da te inseriti sono ${numeriUtente.join(' - ')}, <br>
  ma quelli indovinati sono ${intersection.join(' - ')} <br>
  in totale hai totalizzato ${intersection.length} punti!
  `;

},5200);




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
