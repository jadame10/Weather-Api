import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '500px',
  height: '200px'
};

const center = {
  lat: 51.33624163875445,
  lng: 17.385465520639958
};
function MyComponent() {
    return(
    <LoadScript
    googleMapsApiKey="AIzaSyAoQz4xJLx4VGozG5IQ0A1wbOnYxBwNGXY"
  >
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={7}
    >
  <></>
        </GoogleMap>
      </LoadScript>
    );
}

export default React.memo(MyComponent)