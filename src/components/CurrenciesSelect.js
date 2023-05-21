import React from "react"
import ListItems from "./ListItems"

const CurrenciesSelect = ({currencies, onCurrencySelected}) => {
    const handleClick = function (currencyId) {
        onCurrencySelected(currencyId)
        
        
    };
    const currencyItems = currencies.map((currency) => {
        return (
            
            <ListItems 
            currency = {currency}
            key = {currency.id}
            handleClick = { () => handleClick(currency.id)}
            />
        )
    })

    return (
        <table>
        <thead>
        <tr>
        <th>#</th>
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