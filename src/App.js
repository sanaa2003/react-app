import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import {action,orginals} from "./urls"
import './app.css'
import Banner from "./Components/Banner/Banner";
import Rowpost from "./Components/Rowpost/Rowpost";
function App() {  
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <Rowpost url={orginals} title='netflix orginals'/>
     <Rowpost url={action} title='Action' isSmall/>
      </div>
  );
}



export default App;


