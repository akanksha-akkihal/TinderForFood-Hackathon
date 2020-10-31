import React from 'react'

import { useLocation } from 'react-router-dom'
function Places(props) {
    const location=useLocation()
    console.log(location)
    return (    
    <>
    <p>
        Hotel Abhiruchi 

        members - waiting ={ 10 }
    </p>


    </>    
    )
}

export default Places
