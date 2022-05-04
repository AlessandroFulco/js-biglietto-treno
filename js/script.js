// creare un programma che dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero



// chiedere quanti chilometri deve percorrere
const chilometri = parseInt(prompt('Quanti chilometri devi percorrere ?'));
console.log("chilometri da percorrere", chilometri);

// chiedere il età al passeggero
const age = parseInt(prompt('Quanti anni hai ?'));
console.log("age", age);

// calcolare il prezzo del biglietto (0,21€/km)
const pricePerKm = 0.21;
console.log("prezzo al km", pricePerKm);
const priceTicket = chilometri * pricePerKm;
console.log(priceTicket.toFixed(2) + " €");
// se minorenne applicare 20% di sconto

// se over 65 applicare il 40% di sconto

// output stampare il risultato a schermo


