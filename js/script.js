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


// Dati da sito
var inputField = document.getElementById('word');
var buttonCheck = document.getElementById('button');


// var risultato fuzione

function palidromeChecker(word) {

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

buttonCheck.addEventListener('click', function () {

    // valore inserito in pagina
    var wordValue = inputField.value;

    if (!wordValue || !isNaN(wordValue)) {
        alert('Parola non valida')
    } else {


        //lowercase per comparazione
        var lowercaseValue = wordValue.toLowerCase();
        console.log(wordValue);
        var isPalidrome = palidromeChecker(lowercaseValue);

        // isPALIDROME?
        if (isPalidrome) {
            displayResult.innerText = wordValue + ' is palidrome!';
        } else {
            displayResult.innerText = wordValue + ' is not palidrome!';
        }

        wordValue = "";
        inputField.value = " ";

    }
})

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

//Elementi da pagina

var buttonPlay = document.getElementById('play');


//dati da pagina
var oddEvenField = document.getElementById('odd-even');
var userNumberField = document.getElementById('number');



// funzione numero random pc da 1 a 5
function randomNumber() {
    var randomNumber = Math.floor(Math.random() * 5) + 1;
    return randomNumber;
}




buttonPlay.addEventListener('click', function () {

    var oddEvenValue = oddEvenField.value;
    console.log(oddEvenValue);
    var userNumber = parseInt(userNumberField.value);
    var random = randomNumber();
    console.log(random);
    console.log(userNumber);

    var sum = userNumber + random;
    console.log(sum);

    // funzione stabilisce se un numero è pari o dispari
    function oddEven(number) {
        var num = 'odd';
        if (number % 2 === 0) {
            num = 'even';
        }

        return num;
    }

    // risultato funzione applicato alla somma
    var result = oddEven(sum);
    console.log(result);

    if (result == oddEvenValue) {
        alert('human')
    } else {
        alert('machine')
    }


    // Reset valori
    userNumberField.value = " ";

});







