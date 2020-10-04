import React from 'react';
import Headingbar from './HomePageUI/Headingbar';// imports SVG for the Home bar
import Home from "./HomePageUI/Home"; // imports SVG for the Home button
import Search from "./HomePageUI/Search"; // imports SVG for the Search button
import SearchBar from "./HomePageUI/SearchBar"; // imports SVG for search bar
import "./HomePageUI/HomePage.css"; // Import CSS for all of the homepage UI
import titleBar from "./HomePageUI/Group.png";
import {BrowserRouter , Route, Switch,Link} from "react-router-dom"; // Allows different webpages to be made

function App() {
  return (
    <div className = "container">
      <div id="backgroundImage"/>
      <img src={titleBar} id="overheadbar"/>
    <Home id="Home"/>
    <Search id="Search"/>
    <SearchBar id ="SearchBar"/>
    <div id ="info"/>
      </div>
  );
}

export default App;
