import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CountryPage from './CountryPage/CountryPage';
import MapPage from "./MapPage/MapPage";
import TriviaPage from "./TriviaPage/TriviaPage";
import * as serviceWorker from './serviceWorker';
import {BrowserRouter , Route, Switch,Link} from "react-router-dom"; // Allows different webpages to be made
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <div>
            <Switch>
             <Route path="/" component={App} exact/>
             <Route path="/country" component={CountryPage}/>
             <Route path="/map" component={MapPage}/>
             <Route path="/trivia" component ={TriviaPage}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
