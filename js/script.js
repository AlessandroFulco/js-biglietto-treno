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
let sale20;
let sale40;
let price20Off;
let price40Off;
if (age < 18) {
    sale20 = (priceTicket / 100) * 20;
    console.log("sconto da applicare 20%", sale20);
    price20Off = priceTicket - sale20;
    console.log(price20Off.toFixed(2) + " €");
    document.getElementById('ticket').innerHTML = "Il costo del biglietto è: " + price20Off.toFixed(2) + " €";
} else if (age >= 65) {
    // se over 65 applicare il 40% di sconto
    sale40 = (priceTicket / 100) * 40;
    console.log("sconto da applicare 40%", sale40);
    price40Off = priceTicket - sale40;
    console.log(price40Off.toFixed(2) + " €");
    document.getElementById('ticket').innerHTML = "Il costo del Biglietto è: " + price40Off.toFixed(2) + " €";
} else {
    document.getElementById('ticket').innerHTML = "Il costo del Biglietto è: " + priceTicket.toFixed(2) + " €";
}

// output stampare il risultato a schermo


