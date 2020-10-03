import React from "react";
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
function CountryPage (){
    return (
        <div>
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
            <div id ="streetViewDiv"/>
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