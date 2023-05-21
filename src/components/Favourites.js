import React from "react"
import { useState } from "react";
import ListNames from "./ListNames";
import ListFavs from "./ListFavs";

const Favourites = ({currencies, onCurrencySelected, onFavouriteSelected}) => {

    const [selectedCurrency, setSelectedCurrency] = useState(null)

    const handleChange = function (event) {
        event.preventDefault()
        const currencyId = event.target.value
        const selected = currencies.find((currency) => currency.id === currencyId)
        setSelectedCurrency(selected)
        console.log(selected)
    };
    const handleSubmit = function (event) {
        event.preventDefault()
        if(selectedCurrency) {
            onCurrencySelected(selectedCurrency)
            onFavouriteSelected(event, selectedCurrency)
        }
  
    }

    const currencyNames = currencies.map((currency) => {
        return (
            <ListNames 
            currency = {currency}
            key = {currency.id}
            handleChange = {handleChange}
            />
        )
    })

    const favNames = selectedCurrency !== null ? (
            <ListFavs 
            currency = {selectedCurrency}
            key = {selectedCurrency.id}
            />) : null

        


    return (
        <div>
        <ul>
        {favNames}
        </ul>
        <form onSubmit ={() => handleSubmit}>
        <select>
        {currencyNames}
        </select>
        <input type="submit" value="Add"></input>
        </form>
        </div>
        
    
    )
}

export default Favourites