import React from "react"

const CurrencyDetails = ({currency}) => {
    console.log(currency)
    return (<div>
    {currency.total_volume}
    </div>
    )
}

export default CurrencyDetails 