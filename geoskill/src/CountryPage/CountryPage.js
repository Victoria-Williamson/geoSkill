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
    const [value,setValue] = useState(0);
    var i = 0;
    // Using an API that can return the latitude and longitude of a country, this is then sent to the map to center it there
    async function fetchLatitudeAndLongitude(){
        const response = await fetch(" http://api.worldbank.org/v2/country/" + twoLetter + "?format=json")
        const json = await response.json();
        setLatitude(parseFloat(json[1][0].latitude));
        setLongitude(parseFloat(json[1][0].longitude));
    }

    // Using an API that retrives information on the given country
    async function fetchUrl(countryName){
        var url = "https://restcountries.eu/rest/v2/name/" + countryName + "?fullText=true";
        const response = await  fetch(url);
        const json = await response.json();
        if(json !== null || json !== undefined)
        setResults(json[0]);
        setTwoLetter(json[0].alpha2Code);
    }

    // Calls the fetch function to retrive information on the given function
    useEffect(() => {
        fetchUrl(country);

    }, []);

    // Calls the fetch function to retrive the latitude and longitude of the given function
    useEffect (() => {
        fetchLatitudeAndLongitude();
    }, []);

    inputAllInformation();
    // input all information function tht is having problems
    function inputAllInformation(){
        if(country === null || results === null || latitude === null || longitude === null)
        {
            setTimeout(inputAllInformation,50);
            return;
        }
       // const element = <Map latitude = {latitude} longitude = {longitude}></Map>
       var box = document.getElementById("factBox");
       var info = document.getElementById("funFactInfo");
       var languages = "";
       for (var i = 0; i < results.languages.length; i++)
        {
            languages += results.languages[i] +" ";
        }

       var string = "The main language(s) in " + country + " are : " +languages +"." + country + " is located on the " +results.region + ", in the  " + results.subregion + " portion of the continent." + " The country is current home to apprx. " + results.population + " people !";
       info.innerHTML = string;
       box.style.backgroundImage="url(" +results.flag + ")"; 
    }

    window.onclick = function(e)
    {
        if(e.target.id !== "countryButton")
            {
                return;
            }
        if(e.target.id === "countryButton");
            {
                var country = document.getElementById("country");
                country = country.value;
                country = country.toLowerCase();
                country = country.charAt(0).toUpperCase() + country.slice(1);
                setCountry(country);
                console.log(country, "country");
                var funFact = document.getElementById("funFactText");
                var currentEventText = document.getElementById("currentEventText");
                currentEventText.innerHTML =  "Here's what's currently going on in " + country;
                funFact.innerHTML = "Here's some fun facts about " + country;
                var welcome = document.getElementById("WelcomeDivTxt");
                welcome.innerHTML = "Welcome to " + country;
                fetchUrl(country);
                fetchLatitudeAndLongitude();
                i++;
               setValue(i);
               console.log(parseFloat(latitude));
               
            }
    }

    
    return (

        <div id = "root">
            <div id="backgroundImage"/>
            {/* Fun Fact Section */}
            <div id="topInner"/>
            <div id="topOutter"/>
            <div id="funFactInfo"/>
            <TopTitleBar id="topTitleBar"/>
             {/* Use document.getElementById("funFactText").innerHTML = "Here's some facts about " + country 
            to create a title for any country */}
            <div id="funFactText"> Here's some fun facts about France</div>
            {/* Current Events Section */}
            <div id="bottomInner"/>
            <div id="bottomOutter"/>
            <div id="factBox" >
            </div>
            <Map latitude ={latitude} longitude = {longitude}/>
            <div id="countryButton"> country Button </div>
            <input type="text" id="country"/>
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