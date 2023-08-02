import React from 'react'
import "./sidebar.css"
import Sidebaroptions from "./Sidebaroptions.js";
import BackHandOutlinedIcon from '@mui/icons-material/BackHandOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Button } from "@material-ui/core";

function Sidebar() {
  return (
    <div className='sidebar'>
        {/*App  icon */}
        <BackHandOutlinedIcon className='sidebar__twitterIcon'/>

        {/*Sidebaroptions */}
       <Sidebaroptions active text="Home" Icon={HomeOutlinedIcon}/>
        {/*Sidebar options */}
        <Sidebaroptions text="Explore"  Icon={HomeOutlinedIcon}/>
        {/*Sidebar options */}
        <Sidebaroptions text="Messages" Icon={MessageOutlinedIcon}/>
        {/*Sidebar options */}
        <Sidebaroptions  text="Profile" Icon={AccountCircleOutlinedIcon}/>
        <Sidebaroptions  text="More" Icon={MoreHorizOutlinedIcon}/>

        {/*Addpost button*/}
        <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Post
      </Button>
      
    </div>
  )
}

export default Sidebar
