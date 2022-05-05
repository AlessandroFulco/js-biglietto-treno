// creare un programma che dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero



// chiedere quanti chilometri deve percorrere
const chilometri = parseInt(prompt('Quanti chilometri devi percorrere ?'));
console.log("chilometri da percorrere", chilometri);

// chiedere il età al passeggero
const age = parseInt(prompt('Quanti anni hai ?'));
console.log("age", age);



// calcolare prezzo in base all'età
const standardPrice = 0.21;
let priceTicket = chilometri * standardPrice;

if (age < 18) {
    const prezzoMinorenne = standardPrice * 80 / 100;
    priceTicket = chilometri * prezzoMinorenne;
    console.log(priceTicket.toFixed(2));   

} else if (age >= 65) {
    const prezzo65over = standardPrice * 60 / 100;
    priceTicket = chilometri * prezzo65over;
    console.log(priceTicket.toFixed(2)); 

}

// output stampare il risultato a schermo
document.getElementById('ticket').innerHTML = "Il costo del Biglietto è: " + priceTicket.toFixed(2) + " €";


