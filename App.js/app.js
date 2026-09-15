/**
 * 1.Stai pianificando un viaggio negli USA. Scrivi una funzione che converta una somma in Euro nel corrispondente valore in Dollari, dato il tasso di cambio del giorno.
 *2.Un taxi applica una tariffa extra fissa dopo la mezzanotte. Scrivi una funzione che calcoli il totale della corsa dato il prezzo base all'orario di partenza e all'orario di arrivo.
 *
 *
 *
 */
//------------------------------------------------------------


// /**
//  * Converts an amount in euros to US dollars given the exchange rate.
//  * @param {number} euro The amount of euros to convert.
//  * @param {number} exchangeRate The exchange rate (dollars per euro).
//  * @returns {number} The equivalent amount in US dollars.
//  * 
//  */


// function eurToUsd(euro, exchangeRate) {

//     if (typeof euro !== 'number' || typeof exchangeRate !== 'number') {
//         console.error('Errore: Entrambi i parametri devono essere numeri!');
//         return 0;

//     }

//     if (euro < 0 || exchangeRate <= 0) {
//         console.log('Errore: I valori in euro e in tasso di cambio devono essere positivi.');
//         return 0;

//     }

//     const rawUsd = euro * exchangeRate;
//     return Math.round(rawUsd * 100) / 100;

// }

// const amountEur = 1000;
// const rateTodey = 1.16;
// const convertedUsd = eurToUsd(amountEur, rateTodey);

// console.log(`${amountEur} euro uguale a ${convertedUsd} dollari.`);


//------------------------------------------------------------

/**
 * Converte un'ora (0-23) in minuti dall'inizio del giorno.
 * @param {number} hour The hour (0-23).
 * @returns {number} The number of minutes from the start of the day.
 * 
 */

function hoursToMinutes(hour) {
    if (!Number.isInteger(hour) || hour < 0 || hour > 23) {
        throw new RangeError ('L hour deve essere tra 0 e 23');
    }
    return hour * 60;
}

/**
 * @param {number} priceBaseStart 
 * @param {number} hourStart
 * @param {number} priceBaseEnd
 * @param {number} hourEnd
 * @returns {number} Costo totale del viaggio.
 */

function calculateTaxi(priceBaseStart, hourStart, priceBaseEnd, hourEnd) {
    const areNumbersValid = [priceBaseStart, hourStart, priceBaseEnd, hourEnd]
        .every(val => typeof val === 'number' && Number.isFinite(val));
        
    if (!areNumbersValid) {
        throw new TypeError('Tutti i parametri devono essere numeri validi.');
    }

    if (priceBaseStart < 0 || priceBaseEnd < 0) {
        throw new RangeError('Le tariffe base non possono essere negative.');
    }

    if (!Number.isInteger(hourStart) || hourStart < 0 || hourStart > 23 ||
        !Number.isInteger(hourEnd) || hourEnd < 0 || hourEnd > 23) {
        throw new RangeError('Le ore devono essere numeri interi tra 0 e 23.');
    }    
const totalHours = hourEnd >= hourStart 
        ? hourEnd - hourStart 
        : (24 - hourStart) + hourEnd;

    const HOURLY_RATE = 15; 
    return priceBaseStart + priceBaseEnd + (totalHours * HOURLY_RATE);

}

// ==========================================
// ESEMPIO DI UTILIZZO 
// ==========================================

const resultadoNormal = calculateTaxi(10, 8, 5, 11);
console.log(`Caso 1 (Viaggio standard): Il totale a pagare è $${resultadoNormal}`);


















//------------------------------------------------------------
