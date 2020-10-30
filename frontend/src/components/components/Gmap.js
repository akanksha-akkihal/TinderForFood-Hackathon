import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  
    

  
    render() {
        const [lat,lng,status] = this.props.pos
        console.log(this.props.pos)
        if (status) {
            return (
                <Map
                  google={this.props.google}
                  zoom={80}
                  style={mapStyles}
                  initialCenter={
                    {
                      lat,
                      lng
                    }
                  }
                 
                />
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