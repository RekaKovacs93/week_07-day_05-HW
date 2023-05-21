import React from "react";
import "./listItems.css"

const ListFavs = ({currency}) => {
    return (
        <li>{currency.name}</li>
    )
}

export default ListFavs