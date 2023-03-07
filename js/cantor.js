 
  {
    const calculateResult =(amount, currency) => {
        const EUR = 4.7613;
        const USD = 4.4424;
        const CHF = 4.8153;
    
        switch (currency) {
            case "EUR":
                return amount / EUR;
                
            case "USD":
                return amount / USD;
               
            case "CHF":
                return amount / CHF;
                
        }
    };

 
    const onFormSubmit = (event) => {
        event.preventDefault();
        
        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");
        
        
        const amount = +amountElement.value;
        const currency = currencyElement.value;
    
        const result = calculateResult(amount, currency);

        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `<strong>${result.toFixed(2)}</strong> ${currency}`;

    };
    
        const init = () => {
            const formElement = document.querySelector(".js-form");
                  
        formElement.addEventListener("submit", onFormSubmit);
    };

    init();

 }
