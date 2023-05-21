import React from "react";


const ListNames = ({currency}) => {
    return (
        // <tr onClick={handleClick} value = {currency.id}>
        <option value={currency.id}>{currency.name}</option>
        // </tr>

    )
}

export default ListNames