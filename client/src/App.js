//import logo from './logo.svg';
import Topbar from './components/topbar/Topbar';
import React from 'react';
import Posts from './components/posts/Posts';
import './App.css';
import dog from "./resources/dog.jpg"
import bunny from "./resources/bunny.jpg"
import coffee from "./resources/coffee picture.jpg"
import avatar1 from "./resources/avar1.jpg"
import avatar2 from "./resources/avatar2.jpg"
import avatar3 from "./resources/avatar3.png"

function App() {
  return (
    <>
      <Topbar /> 
      <h1>Welcome to MyLife</h1>
      <Posts username="ayalcin" caption="So cute" imgLocation = {dog} avatar = {avatar1}/>
      <Posts username="irmakyalcn" caption="Bunny in a basket" imgLocation = {bunny} avatar = {avatar2} />
      <Posts username="brap" caption= "Made myself nice latte with art" imgLocation = {coffee} avatar = {avatar3}/>

   </>

    



  );
}

export default App;
