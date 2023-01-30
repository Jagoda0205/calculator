let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let EUR = 4.6709;
let USD = 4.3970;
let CHF = 4.7437;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = Number(amountElement.value);
    let currency = currencyElement.value;

    let result;

    switch (currency) {
        case "EUR":
            result = amount / EUR;
            break;

        case "USD":
            result = amount / USD;
            break;

        case "CHF":
            result = amount / CHF;
            break;
    }
    resultElement.innerText = `${result.toFixed(2)} ${currency}`;
});