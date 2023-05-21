import React, {useState, useEffect} from "react"
import CurrenciesSelect from "../components/CurrenciesSelect"
import CurrencyDetails from "../components/CurrencyDetails";

const CurrencyContainer = () => {
    const [currencies, setCurrencies] = useState([]);
    const [selectedCurrency, setSelectedCurrency] = useState(null)

    useEffect(() => {
        getCurrencies();
    }, [])

    const getCurrencies = function(){
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C%2024h%2C%207d&locale=en",{
            headers: {
              "Access-Control-Allow-Origin": "*", // Set the CORS header to allow all origins
            },
          })
        .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              throw new Error("Failed to fetch currencies");
            }
          })
        .then((currencies) => {setCurrencies(currencies);
          })
    }

    const onCurrencySelected = function(currency) {
        setSelectedCurrency(currency)
        
    }


    return (
        <div>
            <CurrenciesSelect currencies = {currencies} onCurrencySelected={onCurrencySelected}
        />
        {selectedCurrency? <CurrencyDetails currency = {selectedCurrency}/> : null}
        </div>
    )
}

export default CurrencyContainer