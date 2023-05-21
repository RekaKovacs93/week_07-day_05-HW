import React from "react";
import "./listItems.css"

const ListFavs = ({currency}) => {
    return (
        <div>
        <div className="favourites">
        <img src={currency.image}></img>
        <h4>{currency.name}</h4></div>
        </div>
    )
}

export default ListFavs