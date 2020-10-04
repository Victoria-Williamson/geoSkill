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
    const [latitudeAndLongitude, setLatitudeAndLongitude] = useState({
        latitude: 0,
        longitude: 0,
    });
    const [culture, setCulture] = useState("");
    const [value,setValue] = useState(0);
    var i = 0;
    // Using an API that can return the latitude and longitude of a country, this is then sent to the map to center it there
    async function fetchLatitudeAndLongitude(){
        const response = await fetch(" http://api.worldbank.org/v2/country/" + twoLetter + "?format=json")
        const json = await response.json();
        var coordinates = {
            latitude:parseFloat(json[1][0].latitude),
            longitude: parseFloat(json[1][0].longitude)
        };
        console.log(coordinates);
       setLatitudeAndLongitude(coordinates);
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

    async function fetchCultureInfo(countryName){
        var url = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + countryName +"%20Culture&format=json";
        const response = await fetch(url);
        const json = await response.json();
        var cultureText = document.getElementById("cultureText");
        cultureText.innerHTML="";
        for(var i = 0; i <json.query.search.length; i++)
            {
                var item = document.createElement("li");
                item.innerHTML = json.query.search[i].snippet;
                cultureText.appendChild(item);
            }
    }

    async function fetchCountryInfo(countryName){
        var url = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + countryName +"%20History&format=json";
        const response = await fetch(url);
        const json = await response.json();
        var funFactText = document.getElementById("funFactInfo");
        funFactText.innerHTML="";
        for(var i = 0; i <json.query.search.length; i++)
            {
                var item = document.createElement("li");
                item.innerHTML = json.query.search[i].snippet;
                funFactText.appendChild(item);
            }
    }

    // Calls the fetch function to retrive information on the given function
    useEffect(() => {
        fetchUrl(country);

    }, []);

    // Calls the fetch function to retrive the latitude and longitude of the given function
    useEffect (() => {
        fetchLatitudeAndLongitude();
    }, []);

    useEffect (() => {
        fetchCultureInfo(country);
    }, []);

    useEffect (() => {
        fetchCountryInfo(country);
    }, []);
    inputAllInformation();
    // input all information function tht is having problems
    function inputAllInformation(){
        if(country === null || results === null || latitudeAndLongitude.latitude=== 0){
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

    function updateMap()
    {
        var country = document.getElementById("country");
                country = country.value;
                country = country.toLowerCase();
                country = country.charAt(0).toUpperCase() + country.slice(1);
                setCountry(country);
                console.log(country, "country");
                var currentEventText = document.getElementById("currentEventText");
                currentEventText.innerHTML =  "Here's some information on the culture of " + country;
                var welcome = document.getElementById("WelcomeDivTxt");
                welcome.innerHTML = "Welcome to " + country;
                setLatitudeAndLongitude({
                    latitude:0,
                    longitude:0,
                });
                fetchUrl(country);
                fetchLatitudeAndLongitude();
                fetchCultureInfo(country);
                inputAllInformation();
               
    }
    window.onclick = function(e)
    {
        if(e.target.id !== "countryButton")
            {
                return;
            }
        if(e.target.id === "countryButton");
            {
                updateMap();
                updateMap();
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
            <Map latitude ={latitudeAndLongitude.latitude} longitude = {latitudeAndLongitude.longitude}/>
            <div id="countryButton"> country Button </div>
            <input type="text" id="country"/>
            <BottomTitleBar id="bottomTitleBar"/>
            <div id="currentEventText"> Here's some information on the culture of France</div>
            <div id="triviaBox"/>
            <div id="triviaBoxTxt"> Let's go play some world countries trivia</div>
            <div id="startButton"/>
            <div id="startButtonTxt"> START </div>
            <WelcomeDiv/>
            <div id="WelcomeDivTxt"> Welcome to France </div>
            <img src={titleBar} id="overheadbar"/>
            <div id="cultureText"/>
            <Home id="Home"/>
            <Search id="Search"/>
            <SearchBar id ="SearchBar"/>
        </div>
    )
}

export default CountryPage;