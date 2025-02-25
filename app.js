console.log("Esercizio FizzBuzz");
// creare un ciclo for che si ripete finchè il valore di "i" non supera 100
for (let i = 1; i <= 100; i++) {
    // SE "i" è divisibile per 3 AND 5
    if ((i % 3 == 0) && (i % 5 == 0)) {
        // stampa FizzBuzz
        let i = "FizzBuzz";
        console.log(i);
        // altrimenti SE è divisibile per 3
    } else if (i % 3 == 0) {
        // stampa Fizz
        let i = "Fizz";
        console.log(i);
        // altrimenti SE è divisibile per 5
    } else if (i % 5 == 0) {
        // stampa Buzz
        let i = "Buzz";
        console.log(i);
    } else
    // se non rispetta nessuna condizione stampa "i"
    console.log(i);
}