import React from "react";


const ListFavs = ({currency, deleteFav}) => {
    return (
        <div className="favcont">
        <div className="favourites">
        {/* <button onClick={() => deleteFav(currency.id)}>X</button> */}
        <img src={currency.image}></img>
        <h4>{currency.name}</h4></div>
        </div>
    )
}

export default ListFavs