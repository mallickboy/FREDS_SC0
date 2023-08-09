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
    handleUpvote,
    handleDownvote,
    handleComment,
    index,
    username,
    displayName,
    avatar,
    verified,
    heading,
    message,
    image,
    upvote,
    downvote,
    comments }) {
    // username="tamal";
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
                    <div className='post__headerText'>
                        <h3>
                            {heading}{" "} <span> </span>
                        </h3>
                    </div>
                    <div className='post__headerDescription'>
                        <p>{message}</p>
                    </div>
                </div>
                <img src={image} />
                <div className='post__footer'>
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
                <div>
                    <p  className='Vote'><span className='AddVote Up' onClick={() => handleUpvote(index)}>👍 </span> : { upvote.toNumber()}</p>
                    <p className='Vote'><span className='AddVote Down' onClick={() => handleDownvote(index)}>🖕</span> : {downvote.toNumber()}</p>
                    
                    
                    <Comment handleComment={handleComment} allComments={comments} index={index} />
                </div>
            </div>
        </div>
    );
}

export default Post