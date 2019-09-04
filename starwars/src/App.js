import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import People from './components/people'


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [apiUrl, setApiUrl] = useState("https://swapi.co/api/people/")

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <People url={apiUrl + "1"} />
      <People url={apiUrl + "2"} />
      <People url={apiUrl + "1"} />
      <People url={apiUrl + "3"} />
      <People url={apiUrl + "4"} />
      <People url={apiUrl + "5"} />
    </div>
  );
}

export default App;
