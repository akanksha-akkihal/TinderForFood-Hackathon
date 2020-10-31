import React from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
function Places(props) {
    // const location=useLocation()

    const hotel = props.hotel.restaurant
    console.log(hotel)


if(hotel){
    return (    
        <>
        <div>
            <img src={hotel.photos_url} />
            <h1>Hotel Name : {hotel.name}</h1>
            <h2>address: { hotel.location.address}</h2>
        <p>
            people waiting - 3  //to be implimented with socket
        </p>

        </div>
    
        </>    
        )

}

else{
    return (<h1>I think you'r Lost ...</h1>)
}
    
}

export default Places
