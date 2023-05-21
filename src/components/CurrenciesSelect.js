import React from "react"
import ListItems from "./ListItems"

const CurrenciesSelect = ({currencies, onCurrencySelected}) => {
    const handleClick = function (currency) {
        onCurrencySelected(currency)
        
        
    };
    const currencyItems = currencies.map((currency) => {
        return (
            
            <ListItems 
            currency = {currency}
            key = {currency.id}
            handleClick = { () => handleClick(currency)}
            />
        )
    })

    return (
        <table>
        <thead>
        <tr>
        <th className="small">#</th>
        <th>Name</th>
        <th>Price</th>
        <th>24H Price Change</th>
        <th>Market Cap</th>
        </tr>
        </thead>
        <tbody>
        {currencyItems}
        </tbody>
        </table>
    
    )
}

export default CurrenciesSelect