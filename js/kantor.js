 
  {
    const calculatorResult =(amount, currency) => {
        const EUR = 4.6709;
        const USD = 4.3970;
        const CHF = 4.7437;
    
        switch (currency) {
            case "EUR":
                return amount / EUR;
                
            case "USD":
                return amount / USD;
               
            case "CHF":
                return amount / CHF;
                
        }
    };

    const updateResultText = (result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `<strong>${result.toFixed(2)}</strong> ${currency}`;

    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        
        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");
        
        
        const amount = +amountElement.value;
        const currency = currencyElement.value;
    
        const result = calculatorResult(amount, currency);

    };
    
        const init = () => {
            const formElement = document.querySelector(".js-form");
                  
        formElement.addEventListener("submit", onFormSubmit);
    };

        init();

 }
