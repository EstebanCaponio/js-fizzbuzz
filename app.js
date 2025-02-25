console.log("Esercizio FizzBuzz");
// creare un ciclo for che si ripete finchè il valore di "i" non supera 100
for (let i = 1; i <= 100; i++) {
    // creare due variabili per non ripetere i%3==0 e i%5==0
    let rem3 = i % 3 === 0;
    let rem5 = i % 5 ===s 0;

    // SE "i" è divisibile per 3 AND 5
    if (rem3 && rem5) {
        // stampa FizzBuzz
        let i = "FizzBuzz";
        console.log(i);
        // altrimenti SE è divisibile per 3
    } else if (rem3) {
        // stampa Fizz
        let i = "Fizz";
        console.log(i);
        // altrimenti SE è divisibile per 5
    } else if (rem5) {
        // stampa Buzz
        let i = "Buzz";
        console.log(i);
    } else
        // se non rispetta nessuna condizione stampa "i"
        console.log(i);
}