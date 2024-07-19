// Funzione per generare un numero random da 1 a 5
function generateRandomNumber() {
    return Math.floor(Math.random() * 5) + 1;
}

// Funzione per determinare se un numero è pari o dispari
function isEven(number) {
    return number % 2 === 0;
}

// Funzione principale del gioco
function playGame() {
    // L'utente sceglie pari o dispari
    let userChoice = prompt("Scegli pari o dispari:").toLowerCase();//lowercase serve per non avere le maiuscole
    while (userChoice !== "pari" && userChoice !== "dispari") {//sicurezza nel caso utente mette un numero o qualcosa diverso da pari dispari
        userChoice = prompt("Inserisci la parola 'pari' o 'dispari':").toLowerCase();
    }

    // L'utente inserisce un numero da 1 a 5
    let userNumber = parseInt(prompt("Inserisci un numero da 1 a 5:"));
    while (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
        userNumber = parseInt(prompt("Inserisci un numero valido da 1 a 5:"));
    }

    // Genera un numero random per il computer
    let computerNumber = generateRandomNumber();

    // Calcola la somma
    let sum = userNumber + computerNumber;

    // Determina se la somma è pari o dispari
    let result = isEven(sum) ? "pari" : "dispari";

    // Stampa dei risultati
    console.log(`Hai scelto: ${userChoice}`);
    console.log(`Il tuo numero: ${userNumber}`);
    console.log(`Numero del computer: ${computerNumber}`);
    console.log(`La somma è: ${sum}`);
    console.log(`Il risultato è: ${result}`);

    // Determina il vincitore
    if (result === userChoice) {
        console.log("Hai vinto!");
    } else {
        console.log("Ha vinto il computer!");
    }
}

// Avvia il gioco
playGame();