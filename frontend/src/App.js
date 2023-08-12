import {React,useState} from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import IntroPage from "./login/IntroPage"
// import Entrypage from "./login/EntryPage"

let loggedIn=0;
function App() {

  const [showLogin,setShowLogin]=useState(true)

  if(showLogin){
    return (
      <div className="App">
         <IntroPage setShowLogin={setShowLogin} /> 
        {/* Render home when get return from login */}
        {/* <Home/> */}
      </div>
    )
  }else{
    return (
      <div className="App">
         {/* <IntroPage showLogin={showLogin} />  */}
        {/* Render home when get return from login */}
        <Home/>
      </div>
    )
  }
  // return (
  //   <div className="App">
  //      <IntroPage showLogin={showLogin} /> 
  //     {/* Render home when get return from login */}
  //     <Home/>
  //   </div>
  // )
}

export default App  