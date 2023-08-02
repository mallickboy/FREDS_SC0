import React from 'react';
import "./Post.css";
import Comment from './Comment';
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
function Post({
    username,
    text,
    image,
    avatar}) {
        
        return (
        <div className="Post">
    <div className="post__avatar">
    <Avatar src={avatar} />
    </div>
        <div className="post__body">
            <div className='post__header'>
                <div className='post__headerText'>
                <h3>
                    {username}{" "} <span> </span>
                </h3>
                </div>
                <div className='post__headerDescription'>
                    <p>{text}</p>
                </div>
            </div>
            <img src={image}/>    
            <div className='post__footer'>
                <ChatBubbleOutlineIcon fontSize="small" />
                <RepeatIcon fontSize="small"/>
                <FavoriteBorderIcon fontSize="small" />
                <PublishIcon fontSize="small"/>
            </div>
            <div>
                <Comment/>
            </div>
        </div>
  </div>
        );
}

export default Post