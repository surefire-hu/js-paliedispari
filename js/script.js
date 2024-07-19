function palindrome(word) {
    
    // Usa un ciclo for per confrontare i caratteri
    for (let i = 0; i < (word.length / 2); i++) {
        if (word[i] !== word[word.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

// Chiedi all'utente di inserire una parola
let userWord = prompt("Inserisci una parola per verificare se è palindroma:");

// Risultato
if (palindrome(userWord)) {
    console.log(`"${userWord}" è palindroma!`);
} else {
    console.log(`"${userWord}" non è palindroma.`);
}