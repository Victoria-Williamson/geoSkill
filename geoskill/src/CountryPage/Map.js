import React , {Component, useEffect, useState} from "react";
import "./CountryPage.css";
import {
    GoogleMapProvider,
    HeatMap,
    InfoWindow,
    MapBox,
    Marker,
    Polygon,
  } from '@googlemap-react/core';

  function Map (props){
      console.log(props);
      return (
          <div>
              <GoogleMapProvider id="map" className="map">
                <MapBox 
                    id="mapbox"
                    streetViewControl = "true"
                    apiKey="AIzaSyAzsTZRjuiUKdoNqIN0ZglQeKe1GkDzE40"
                    otps={{
                        center: {lat: props.latitude, lng: props.longitude},
                        zoom: 14,
                      }}/>
            </GoogleMapProvider>
          </div>
      )
  }

  export default Map;