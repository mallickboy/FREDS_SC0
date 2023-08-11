import React from 'react';
import Sidebar from "./Sidebar";
import Feed from "./Feed.js";
import Widgets from "./Widgets.js";
import Profile from './slidebarPages/Profile';
import Explore from './slidebarPages/Explore';
// import "./App.css"
import { Routes, Route } from "react-router-dom"

function Home() {
    return (
        <div className="app">
            {/* Sidebar */}
            <Sidebar />

            <Routes>
                {/* <Route path="/" element={<Feed />} />               */}
                <Route path="/" element={<><Feed/><Widgets/></>} />     
             
             {/* Profile */}
                <Route path="/profile" element={<><Profile/></>} /> 
                {/* Explore          */}
                {/* <Route path="/Explore" element={<><Explore/></>} />               */}
            </Routes>

            {/* Feed
            <Feed /> */}

            {/*Widgets Rightside */}
            {/* <Widgets /> */}

        </div>
    );
}

export default Home;
