import React from "react";
import {BrowserRouter as Switch,Route} from "react-router-dom"

import Countries from "./Pages/Countries"
import SingleCountry from "./Pages/SingleCountry"

import Header from "./Components/Header";

import './index.css';

function App() {
  return (
    <div >
      <Header/>

   <Switch>
   <Route exact path="/">
          <Countries />
        </Route>

        {/* <Route path="/singlecountry/:name" >
          <SingleCountry />
        </Route> */}
   </Switch>

    </div>
  );
}

export default App;
