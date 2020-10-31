import React, { Component } from 'react';
import { Map, GoogleApiWrapper,Circle } from 'google-maps-react';
import { Redirect } from 'react-router-dom'
const mapStyles = {
  width: '100%',
  height: '100%'
};
export class MapContainer extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       selectedrest:false
    }
    this.handlerouter=this.handlerouter.bind(this)
  }
  


    handlerouter(e){
    this.setState({
      selectedrest:e.name
    })   
    this.props.sethotel(e.name)
}  
    render() {
        const [lat,lng,status] = this.props.pos
        const nearby = this.props.nearby
        const {selectedrest} = this.state
        const coords={
          lat:16.2160,
          lng:77.3666
        }

      if (Object.keys(selectedrest).length>0){
        return <Redirect to={{
          pathname:'/places',
          state:selectedrest}}
          />} 
      
        if (status) {
            return (
                <Map
                  google={this.props.google}
                  zoom={15}
                  style={mapStyles}
                  initialCenter={
                    {
                      lat:16.2160,
                      lng:77.3666
                    }
                  }
                 
                >

                  {
                    nearby.map((item)=>{
                      return <Circle
                      radius={100}
                      center={{lat:Number(item.restaurant.location.latitude),
                              lng:Number(item.restaurant.location.longitude)
                        }}
                      onMouseover={() => console.log('mouseover')}
                      onClick={this.handlerouter}
                      onMouseout={() => console.log('mouseout')}
                      name={item}
                      strokeOpacity={0}
                      strokeWeight={5}
                      fillColor='orange'
                      fillOpacity={0.8}
                    />
                    })
                  }
            
                </Map>
              );
        } else if (status==0) {
            return(<>
            <h1>
                Loading
            </h1></>)
        } else {
            return (<>Permission denied</>)
        }
    
  }
}

export default GoogleApiWrapper({
  apiKey:  ('AIzaSyA4mV94vVKj_1xLnNTE_haBUWDTyTXty6Q')
})(MapContainer);