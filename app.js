console.log("Ciao Esteban");
// creare un ciclo for che si ripete finchè il valore di "i" non supera 100
for (let i = 1; i <= 100; i++) {
    // SE "i" è divisibile per 3 AND 5
    if ((i % 3 == 0) && (i % 5 == 0)) {
        // stampa FizzBuzz
        let i = "FizzBuzz";
        console.log(i);
    }
    // altrimenti SE è divisibile per 3
    // stampa Fizz
    // altrimenti SE è divisibile per 5
    // stampa Buzz
    // altrimenti stampa "i"
}