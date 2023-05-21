import React from "react"
import { useState } from "react";
import ListNames from "./ListNames";
import ListFavs from "./ListFavs";

const Favourites = ({currencies}) => {
    const deleteFav = function(id){
        const removed = currencies.filter((currency) => {
          return currency.id !== id
        })
        setFavourites(removed)
      }

    const [selectedCurrency, setSelectedCurrency] = useState(null)
    const [favourites, setFavourites] = useState([])

    const handleChange = function (event) {
        event.preventDefault()
        const currencyId = event.target.value
        const selected = currencies.find((currency) => currency.id === currencyId)
        setSelectedCurrency(selected)
        console.log(selected)
    };
    const handleSubmit = function (event) {
        event.preventDefault()
        if (selectedCurrency) {
            const newFav = [...favourites, selectedCurrency]
            setFavourites(newFav)
            setSelectedCurrency(null)
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

    const favNames = favourites.map((currency) => (
            <ListFavs 
            currency = {currency}
            key = {currency.id}
            // deleteFav={deleteFav}
            />))

        


    return (
        <div>
        <div class= "ul">
        {favNames}
        </div>
        <form onSubmit={handleSubmit}>
        <select onChange={handleChange}>
        {currencyNames}
        </select>
        <input type="submit" value="Add" onClick={handleSubmit}></input>
        </form>
        </div>
        
    
    )
}

export default Favourites