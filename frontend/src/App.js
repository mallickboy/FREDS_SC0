import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import IntroPage from "./login/IntroPage"
// import Entrypage from "./login/EntryPage"

let loggedIn=0;
function App() {
  return (
    <div className="App">
      {/* <IntroPage/> */}
      {/* Render home when get return from login */}
      <Home/>
    </div>
  )
}

export default App