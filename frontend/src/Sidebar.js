import { useEffect, React ,useState} from 'react'
import { Link, useLocation } from "react-router-dom";
import "./sidebar.css"
import './AddPost.css';
import { Avatar } from '@material-ui/core';
import Sidebaroptions from "./Sidebaroptions.js";
import BackHandOutlinedIcon from '@mui/icons-material/BackHandOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Button } from "@material-ui/core";

function Sidebar() {
  const location = useLocation();
  function updateHighlight(index) {
    console.log("    clicked " + index);
  }
  let activeTab

  return (
    <div className='sidebar'>
      <Link to="/">
        {/*App  icon */}
        <BackHandOutlinedIcon className='sidebar__twitterIcon' />
      </Link>
      <Link to="/" >
        {/*Sidebaroptions */}
        <Sidebaroptions text="Home" Icon={HomeOutlinedIcon} />
      </Link>
      <Link to="/Explore" activeTab={2}>
        {/*Sidebar options */}
        <Sidebaroptions text="Explore" Icon={HomeOutlinedIcon} />
      </Link>
      <Link to="/" activeClassName="active">
        {/*Sidebar options */}
        <Sidebaroptions text="Messages" Icon={MessageOutlinedIcon} />

      </Link>
      <Link to="/profile">
        {/*Sidebar options */}
        <Sidebaroptions text="Profile" Icon={AccountCircleOutlinedIcon} />

      </Link>
      <Link to="/">
        <Sidebaroptions text="More" Icon={MoreHorizOutlinedIcon} />
      </Link>
      {/*Addpost button*/}
      <Button variant="outlined" className="sidebar__tweet">
        Post
      </Button>
    </div>
  )
}

export default Sidebar
