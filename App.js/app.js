/**
 * 1.Stai pianificando un viaggio negli USA. Scrivi una funzione che converta una somma in Euro nel corrispondente valore in Dollari, dato il tasso di cambio del giorno.
 *
 *
 *
 *
 */
//------------------------------------------------------------


/**
 * Converts an amount in euros to US dollars given the exchange rate.
 * @param {number} euro The amount of euros to convert.
 * @param {number} exchangeRate The exchange rate (dollars per euro).
 * @returns {number} The equivalent amount in US dollars.
 * 
 */


function eurToUsd(euro, exchangeRate) {

    if (typeof euro !== 'number' || typeof exchangeRate !== 'number') {
        console.error('Errore: Entrambi i parametri devono essere numeri!');
        return 0;

    }

    if (euro < 0 || exchangeRate <= 0) {
        console.log('Errore: I valori in euro e in tasso di cambio devono essere positivi.');
        return 0;

    }

    const rawUsd = euro * exchangeRate;
    return Math.round(rawUsd * 100) / 100;

}

const amountEur = 1000;
const rateTodey = 1.16;
const convertedUsd = eurToUsd(amountEur, rateTodey);

console.log(`${amountEur} euro uguale a ${convertedUsd} dollari.`);


