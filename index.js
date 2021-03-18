window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

function changeButton() {
    let btn = document.getElementById("changeCurr");
    switch (true) {
        case btn.innerText === "EUR → BTC":
            btn.innerText = "BTC → EUR";
            document.getElementById("number").placeholder = "BTC";
            break;
        case btn.innerText === "BTC → EUR":
            btn.innerText = "PLN → BTC";
            document.getElementById("number").placeholder = "PLN";
            break;
        case btn.innerText === "PLN → BTC":
            btn.innerText = "BTC → PLN";
            document.getElementById("number").placeholder = "BTC";
            break;
        case btn.innerText === "BTC → PLN":
            btn.innerText = "EUR → BTC";
            document.getElementById("number").placeholder = "EUR";
        default:
            return null;
    }
}

let inputCash;
let exchangeRateEur;
let exchangeRatePln;
let afterConv;

fetch('https://api.coindesk.com/v1/bpi/currentprice/eur.json')
    .then(response => response.json())
    .then(data => exchangeRateEur = data.bpi.EUR.rate_float)

fetch('https://api.coindesk.com/v1/bpi/currentprice/pln.json')
    .then(response => response.json())
    .then(data => exchangeRatePln = data.bpi.PLN.rate_float)

function getInputValue() {
    inputCash = document.getElementById("number").value;
}

function convert() {
    if (document.getElementById("changeCurr").innerText === 'EUR → BTC') {
        afterConv = inputCash / exchangeRateEur
        document.getElementById("result").innerText = afterConv.toFixed(9) + " BTC";
    } else if (document.getElementById("changeCurr").innerText === 'BTC → EUR') {
        afterConv = inputCash * exchangeRateEur
        document.getElementById("result").innerText = afterConv.toFixed(2) + " EUR";
    } else if (document.getElementById("changeCurr").innerText === 'PLN → BTC') {
        afterConv = inputCash / exchangeRatePln
        document.getElementById("result").innerText = afterConv.toFixed(9) + " BTC";
    } else if (document.getElementById("changeCurr").innerText === 'BTC → PLN') {
        afterConv = inputCash * exchangeRatePln
        document.getElementById("result").innerText = afterConv.toFixed(2) + " PLN";
    }
}

function converted() {
    getInputValue();
    convert();
}



