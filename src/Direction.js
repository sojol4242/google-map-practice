import { DirectionsRenderer, DirectionsService, GoogleMap, LoadScript } from '@react-google-maps/api';
import React, { useState } from 'react';

const Direction = (origin,destination) => {
     const containerStyle = {
      width: '100%',
      height: '400px'
   
    };

const center = {
  lat: 23.745,
  lng: 90.523
};
//   const onLoad = marker => {
//   console.log('marker: ', marker)
// }

    const [directionRes,setDirectionRes]=useState(null)
    return (
        <div>
            <LoadScript
      googleMapsApiKey="AIzaSyBcmfJM4eUosi0KyizGrQtfqPph1jrujSA"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
    {/* <Marker
      onLoad={onLoad}
      position={center}
    /> */}
                  {  
                  origin!==''&& destination!=='' &&
                        <DirectionsService
                 options={{  
                    destination: destination,
                    origin: origin,
                    travelMode:"DRIVING"
                  }}
                  // required
                        callback={res => {
                      if(res!=null){
                          setDirectionRes(res)
                      }
                  }}
                  />}
                        {
                        
                directionRes && <DirectionsRenderer
                  // required
                  options={{  
                                directions: directionRes
                  }}
                 
                />
}                  

                        
               
      </GoogleMap>
            </LoadScript>
             {/* 
                /> */}
        </div>
    );
   
};

export default Direction;