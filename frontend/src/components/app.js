import React, { Component,useEffect,useState } from 'react'
import ReactDom from 'react-dom'
import Test from './components/test'
import Gmap from './components/Gmap'

function App(){
    const [position, setposition] = useState([0,0,0])

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((e)=>{
                setposition([e.coords.latitude,e.coords.longitude,true])
            })
        }
        else{
            setposition([0,0,false])
        }
    }, [])


    //zomato apis is to be done
    



    
        return (
            <>
            <Gmap pos={position}/>
            </>
        )}

            


ReactDom.render(<App/>,document.getElementById("root"));
