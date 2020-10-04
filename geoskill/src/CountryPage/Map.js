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
    if(props.latitude === null || props.latitude=== undefined)
        {
            var latitude = 28.5383;
        }
        else {
            latitude = props.latitude;
        }
    if(props.longitude === null || props.longitude === undefined)
        {
            var longitude = -82.3792;
        }
        else {
            longitude = props.longitude;
        } 
        var center = {
            lat: latitude,
            lng: longitude,
        }   
      return (
          <div id = "streetViewDiv">
              <GoogleMapProvider className="map">
                <MapBox 
                    id="mapbox"
                    streetViewControl = "true"
                    apiKey="AIzaSyAzsTZRjuiUKdoNqIN0ZglQeKe1GkDzE40"
                      center= {{lat: latitude, lng:longitude}}
                      opts={{
                        center: center,
                        zoom: 14,
                      }}
                      onCenterChanged={() => {
                        console.log('The center of the map has changed.',)
                      }}/>
                  
            </GoogleMapProvider>
          </div>
      )
  }

  export default Map;