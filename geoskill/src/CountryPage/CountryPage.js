import React , {Component, useEffect, useState} from "react";
import ReactDOM from "react-dom";
import "./CountryPage.css";
import TopTitleBar from "./TitleBar";
import BottomTitleBar from "./BottomTitleBar";
import WelcomeDiv from "./WelcomeDiv";
import Headingbar from '../HomePageUI/Headingbar';// imports SVG for the Home bar
import Home from "../HomePageUI/Home"; // imports SVG for the Home button
import Search from "../HomePageUI/Search"; // imports SVG for the Search button
import SearchBar from "../HomePageUI/SearchBar"; // imports SVG for search bar
import titleBar from "../HomePageUI/Group.png";
import "../HomePageUI/HomePage.css"; // Import CSS for all of the homepage UI
import {
    GoogleMapProvider,
    HeatMap,
    InfoWindow,
    MapBox,
    Marker,
    Polygon,
  } from '@googlemap-react/core'
 import Map from "./Map.js"; 
function CountryPage (){
    // React hook components to store all of the necessary variables, store france as default atm
    const [country, setCountry] = useState("france");
    const [twoLetter, setTwoLetter] = useState("FR");
    const [results, setResults] = useState(null);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    // Using an API that can return the latitude and longitude of a country, this is then sent to the map to center it there
    async function fetchLatitudeAndLongitude(){
        const response = await fetch(" http://api.worldbank.org/v2/country/" + twoLetter + "?format=json")
        const json = await response.json();
        console.log(json[1][0]);
        setLatitude(json[1][0].latitude);
        console.log(latitude);
        setLongitude(json[1][0].longitude);
    }

    // Using an API that retrives information on the given country
    async function fetchUrl(){
        const response = await  fetch("https://restcountries.eu/rest/v2/name/" + country + "?fullText=true");
        const json = await response.json();
        if(json !== null || json !== undefined)
        setResults(json[0]);

        
    }

    // Calls the fetch function to retrive information on the given function
    useEffect(() => {
        fetchUrl();

    }, []);

    // Calls the fetch function to retrive the latitude and longitude of the given function
    useEffect (() => {
        fetchLatitudeAndLongitude();
    }, []);

    // inputAllInformation();
    // input all information function tht is having problems
    /*function inputAllInformation(){
        if(country === null || results === null || latitude === null || longitude === null)
        {
            setTimeout(inputAllInformation,50);
            return;
        }
        const element = <Map latitude = {latitude} longitude = {longitude}></Map>
        ReactDOM.render(element, document.getElementById("root"));
    }*/
    
    return (

        <div id = "root">
            <div id="backgroundImage"/>
            {/* Fun Fact Section */}
            <div id="topInner"/>
            <div id="topOutter"/>
            <TopTitleBar id="topTitleBar"/>
             {/* Use document.getElementById("funFactText").innerHTML = "Here's some facts about " + country 
            to create a title for any country */}
            <div id="funFactText"> Here's some fun facts about France</div>
            {/* Current Events Section */}
            <div id="bottomInner"/>
            <div id="bottomOutter"/>
            <BottomTitleBar id="bottomTitleBar"/>
            <div id="currentEventText"> Here's what's currently going on in France</div>
            <div id="triviaBox"/>
            <div id="triviaBoxTxt"> Let's go play some world countries trivia</div>
            <div id="startButton"/>
            <div id="startButtonTxt"> START </div>
            <WelcomeDiv/>
            <div id="WelcomeDivTxt"> Welcome to France </div>
            <img src={titleBar} id="overheadbar"/>
            <Home id="Home"/>
            <Search id="Search"/>
            <SearchBar id ="SearchBar"/>
        </div>
    )
}

export default CountryPage;