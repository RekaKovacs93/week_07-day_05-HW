import React from "react";


const Total = ({currencies}) => {
    const caps = currencies.map((currency) => {
        return currency.market_cap
    })
    const totalcaps = caps.reduce((total, cap) =>{
        return total += cap
    }, 0)
    return (
        <div>
        <h4>The total crypto market cap is ${totalcaps}</h4>
        </div>
    )
}

export default Total