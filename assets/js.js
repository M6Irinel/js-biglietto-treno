// prendiamo gli id dal DOM
const KM = document.getElementById("KM");
const years = document.getElementById("years");
const totalPrice = document.getElementById("totalPrice");
const discount = document.getElementById("discount");
const total = document.getElementById("total");

// chiediamo al cliente i chilometri da percorere
const KMChosen = parseFloat(prompt("Inserisci la distanza da percorrere in KM, per favore"));

// chiediamo anche la sua età
const yearsPerson = parseFloat(prompt("Adesso ci serve solo la sua età. Grazie"));

// verifichiamo se i valori che ci manda il cliente sono giusti
if(isNaN(KMChosen) || isNaN(yearsPerson)) {
    alert("Attenzione: i dati inseriti non sono corretti");
}else {
    // inseriamo nel DOM "KM" il valore del cliente KMChosen
    KM.innerHTML = KMChosen;

    // inseriamo nel DOM "years" il valore del cliente yearsPerson
    years.innerHTML = yearsPerson;

    // salviamo il prezzo totale
    const prezzoNormale = KMChosen * 0.21;

    // inseriamo il prezzo totale del "totalPrice"
    totalPrice.innerHTML = prezzoNormale.toFixed(2) + " €";

    // SE l'età del cliente e minore
    if(yearsPerson < 18) {

        // inseriamo il sconto calcolato nel "discount" con prezzoNormale * 0.2 (20%)
        discount.innerHTML = "-" + (prezzoNormale * 0.2).toFixed(2) + " € / 20%";

        // inseriamo il totale (x - (x * y%))
        total.innerHTML += " " + (prezzoNormale - (prezzoNormale * 0.2)).toFixed(2) + " €";
    }
    // SE l'età del cliente e maggiore
    else if(yearsPerson >= 65) {

        // inseriamo il sconto calcolato nel "discount" con prezzoNormale * 0.4 (40%)
        discount.innerHTML = "-" + (prezzoNormale * 0.4).toFixed(2) + " € / 40%";

        // inseriamo il totale (x - (x * y%))
        total.innerHTML += " " + (prezzoNormale - parseFloat(prezzoNormale * 0.4)).toFixed(2) + " €";
    }
    // SE l'età del cliente è tra il minore è il maggiore
    else {

        // inseriamo il totale senza sconto
        total.innerHTML += " " + prezzoNormale.toFixed(2) + " €";
    }
}