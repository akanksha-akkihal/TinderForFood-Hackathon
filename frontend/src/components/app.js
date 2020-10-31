import React, { Component,useEffect,useState } from 'react'
import ReactDom, { unstable_renderSubtreeIntoContainer } from 'react-dom'
import Test from './components/test'
import Gmap from './components/Gmap'
import Axios from 'axios'
import Places from '../components/components/places'
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function App(){
    const [position, setposition] = useState([0,0,0])
    const [cityattr, setcityattr] = useState({})
    const [locattr, setlocattr] = useState({})
    const [nearbyrest, setnearbyrest]= useState([])
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((e)=>{
                setposition([e.coords.latitude,e.coords.longitude,true])
                console.log(e.coords)
            },function(p) {
                console.log(p)
            },
                {
                    enableHighAccuracy: true,
                    timeout: 5000,
                    maximumAge: 0
                })
        }
        else{
            setposition([0,0,false])
        }
    }, [])


    useEffect(()=>{
        Axios.get('https://developers.zomato.com/api/v2.1/geocode?lat=16.2160&lon=77.3666',{
            headers:{
                'Accept':'application/json',
                "user-key": "68cd571c0e6ea0f4964a6034c81ba6a6"
            }})
            .then(res=>{
                setnearbyrest(res.data.nearby_restaurants)
            })
            .catch((res)=>console.log(res))

        },[])

        

    
    



    
        return (
    <Router>
        <Switch>
            <Route exact path="/react">
                <Gmap pos={position} nearby={nearbyrest} />
            </Route>
            <Route path="/places">
                <Places />
            </Route>
        </Switch>
    </Router>
    
        )
}

            


ReactDom.render(<App/>,document.getElementById("root"));
