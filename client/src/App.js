//import logo from './logo.svg';
import Topbar from "./components/topbar/Topbar";
import React from "react";
import Posts from "./components/posts/Posts";
import "./App.css";
import dog from "./resources/dog.jpg";
import bunny from "./resources/bunny.jpg";
import coffee from "./resources/coffee picture.jpg";
import avatar1 from "./resources/avar1.jpg";
import avatar2 from "./resources/avatar2.jpg";
import avatar3 from "./resources/avatar3.png";

function App() {
  return (
    <>
      <Topbar />
      <h1>Welcome to MyLife</h1>
<<<<<<< HEAD
      <Posts username="ayalcin" caption="My cute Bailey" imgLocation = {dog} avatar = {avatar1} username2 = "blip" 
      comment = "So cute" username3 = "michael78" comment1 = "OMG I want a dog rn"/>
      <Posts username="irmakyalcn" caption="Bunny in a basket" imgLocation = {bunny} avatar = {avatar2} username2 = "may123" 
      comment = "I wish I had a bunny like that so cute" username3 = "jennyClarke" comment1 = "OMG"/>
      <Posts username="brap" caption= "Made myself nice latte with art" imgLocation = {coffee} avatar = {avatar3} username2 = "taylor123" 
      comment = "So jealous" username3 = "ryanHoward" comment1 = "Can you make some latte too? pls"/>
   </>
=======
      <Posts
        username="ayalcin"
        caption="My cute Bailey"
        imgLocation={dog}
        avatar={avatar1}
        username2="blip"
        comment="So cute"
        username3="michael78"
        comment1="OMG I want a dog rn"
      />
      <Posts
        username="irmakyalcn"
        caption="Bunny in a basket"
        imgLocation={bunny}
        avatar={avatar2}
        username2="may123"
        comment="I wish I had a bunny like that so cute"
        username3="jennyClarke"
        comment1="OMG"
      />
      <Posts
        username="brap"
        caption="Made myself nice latte with art"
        imgLocation={coffee}
        avatar={avatar3}
        username2="taylor123"
        comment="So jealous"
        username3="ryanHoward"
        comment1="Can you make some latte too? pls"
      />
    </>
>>>>>>> 3839b8b9ee60d0a049cbd2474018bf38a8675d42
  );
}

export default App;
