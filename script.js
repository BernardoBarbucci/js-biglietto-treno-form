// Scrivere un programma che chieda all’utente:
// Il numero di chilometri da percorrere
// Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km (0.1976 € al km)
// va applicato uno sconto del 17.65% per i minorenni
// va applicato uno sconto del 53.27% per gli over 65.




function calculateTicketCost() {
    let kmRequest = parseFloat (prompt('How many Km are you going to travel?'));
    let userAge = parseFloat (prompt('How old are you?'));

    //  STEP_1  verfica se è un numero +  quanto costa il viaggio in € in base a 'userKmRequest'?

    if (!isNaN(kmRequest) && !isNaN(userAge)) {
        let ticketPrice = kmRequest * 0.1976;

        // STEP_2 sconto = calcola direttamente il risultato senza dover fare la sottrazione
        if (userAge < 18) {
            ticketPrice *= 0.8235;
        }
        else if (userAge >= 65) {
            ticketPrice *= 0.4673;
        }

    // STEP_3 printing del risultato
    console.log('Your ticket cost is: ' + ticketPrice.toFixed(2) + '€');
    } else {
        console.log('Please enter valid numbers.');
    }
}