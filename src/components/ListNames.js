import React from "react";
import "./listItems.css"

const ListNames = ({currency}) => {
    return (
        // <tr onClick={handleClick} value = {currency.id}>
        <option value={currency.id}>{currency.name}</option>
        // </tr>

    )
}

export default ListNames