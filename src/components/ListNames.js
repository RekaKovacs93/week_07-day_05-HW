import React from "react";
import "./listItems.css"

const ListNames = ({currency, handleClick}) => {
    return (
        // <tr onClick={handleClick} value = {currency.id}>
        <option>{currency.name}</option>
        // </tr>

    )
}

export default ListNames