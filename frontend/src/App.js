import Sidebar from "./Sidebar";
import Feed from "./Feed.js";
import Widgets from "./Widgets.js";
import "./App.css"

function App() {
  return (
    <div className="app">
    {/*Sidebar */}
    <Sidebar/>

     {/*Feed */}
     <Feed/>

     {/*Widgets Rightside */}
<Widgets/>

  </div>
  );
}

export default App;
