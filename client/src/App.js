//import logo from './logo.svg';
import Topbar from './components/topbar/Topbar';
import React from 'react';
import Posts from './Posts';
import './App.css';

function App() {
  return (
    <>
      <Topbar /> 
      <h1>Welcome to MyLife</h1>
      <Posts username="ayalcin" caption="So cute"/>
      <Posts username="irmakyalcn" caption="So happy"  />
      <Posts username="brap" caption= "you rock puppy"/>

   </>

    



  );
}

export default App;
