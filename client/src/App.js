//import logo from './logo.svg';
import Topbar from './components/topbar/Topbar';
import React from 'react';
import Posts from '/.Posts';

//import './App.css';

function App() {
  return (
    <Topbar>
    <div className="App">

      <div className = "app__header"> 
        <img className = "app__headerImage"
          alt="">
          {/* add header logo here */}
    
    
        </img>
    
      </div>
      <h1>Hello to your page of MyLife</h1>

      <Posts />
      {/*Header */}
      {/*Posts */}

      {/*Post */}
       
    </div>

    



    </Topbar>
  );
}

export default App;
