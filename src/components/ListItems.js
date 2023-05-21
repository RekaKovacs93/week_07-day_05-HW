import React from "react";


const ListItems = ({currency, handleClick}) => {
    return (
        <tr onClick={handleClick} value = {currency.id}>
        <td className="small">{currency.market_cap_rank}</td>
        <td><img src= {currency.image}></img>{currency.name}</td>
        <td>{currency.current_price}</td>
        <td className = {currency.price_change_percentage_24h > 0 ? "green" : "red"}>{currency.price_change_percentage_24h}%</td>
        <td>{currency.market_cap}</td>
        </tr>

    )
}

export default ListItems