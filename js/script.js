// !Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

/* 
STEP
1- Chiedere all'utente di inserire una parola
1a - validazione
2 - creare una funzione che:
2a - faccia il reverse della parola data
2b - confronti la parola reverse con la parola originale 
3 - restituzione del risultato in pagina
*/


// DISPLAY

var displayWord = document.getElementById('wordType');
var displayResult = document.getElementById('result');


var parola = prompt('Inserisci parola').toLocaleLowerCase();
palidromeChecker(parola);
console.log(parola);

// var risultato fuzione

var isPalidrome = palidromeChecker();
console.log(isPalidrome);

// isPALIDROME?

if (isPalidrome) {
    alert('is palidrome')
} else {
    alert('is not palidrome!');
}


function palidromeChecker() {

    //divisione parola in array di caratteri

    var split = word.split('');

    // inversione dell'index dei caratteri
    var reverse = split.reverse();

    //ricomposizione degli elementi in un unica parola

    var reverseWord = reverse.join('');

    // isPalidrome?
    var palidrome = false;

    if (word === reverseWord) {
        palidrome = true;
    }

    // restituisci parola invertita intera

    return palidrome;

}


//! Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
// Dichiariamo chi ha vinto.

/*
1 - richiesta info utente:
1a - scelta pari dispari (in pagina più comodo con select);
2b - numero a scelta da 1 a 5
2c - //todo validazione
3 - funzione:
3a - genera un numero random da 1 a 5.
4- sommare i due numeri ottenuti.
5- funzione:
-stabilisce se la somma dei due numeri è pari o dispari
-se vera scelta utente = vittoria utente else vittoria pc
*/


