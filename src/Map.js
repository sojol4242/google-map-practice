import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Marker from 'react-google-maps/lib/components/Marker';
const Map = () => {

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
      </GoogleMap>
    </LoadScript>
        </div>
    );
};

export default Map;