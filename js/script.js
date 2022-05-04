// creare un programma che dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero



// chiedere quanti chilometri deve percorrere
const chilometri = parseInt(prompt('Quanti chilometri devi percorrere ?'));
console.log("chilometri da percorrere", chilometri);

// chiedere il età al passeggero
const age = parseInt(prompt('Quanti anni hai ?'));
console.log("age", age);


// se minorenne applicare 20% di sconto
const prezzoMinorenne = 0.21 * 80 / 100;
console.log(prezzoMinorenne);

const prezzo65over = 0.21 * 60 / 100;
console.log(prezzo65over);

let priceTicket;

if (age < 18) {
    priceTicket = chilometri * prezzoMinorenne;
    console.log(priceTicket.toFixed(2));    
} else if (age >= 65) {
    priceTicket = chilometri * prezzo65over;
    console.log(priceTicket.toFixed(2)); 
} else {
    priceTicket = chilometri * 0.21;
    console.log(priceTicket.toFixed(2));
}

document.getElementById('ticket').innerHTML = "Il costo del Biglietto è: " + priceTicket.toFixed(2) + " €";

// output stampare il risultato a schermo


