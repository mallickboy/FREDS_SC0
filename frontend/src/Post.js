import React, { useRef } from 'react';
import "./Post.css";
import "./CommentBarIcons.css" //CommentBarIcons.css
import Comment from './Comment';
import CommentBarIcons from './CommentBarIcons';
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import likeIcon from '@mui/icons-material/FavoriteBorder';
import dislikeIcon from '@mui/icons-material/ThumbDownOffAlt';
import commentsIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
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

    const handleShare = async () => {
        const url = window.location.href;
        const text = "Best post ever";
        try {
            if (navigator.share) {
                await navigator.share({
                    title: 'My Shared Content',
                    text: 'Check out this awesome content!',
                    url: window.location.href,
                });
            } else {
                console.log('Web Share API not supported on this browser.');
                // Handle fallback sharing mechanism
                shareInTweeter(url, text)
                shareInWhatsapp(url, text)
                console.log(window.location.href);
            }
        } catch (error) {
            console.error('Error sharing:', error);
        }

    };
    function shareInTweeter(url, text) {
        const tweetUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
        window.open(tweetUrl, '_blank');
    };
    function shareInWhatsapp(url, text) {
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`;
        window.open(whatsappUrl, '_blank');
    };

    let uniquePostId = '777'; // combination of address + postId
    const shareDivRef = useRef(null);

    return (
        <div className="Post " id={uniquePostId} ref={shareDivRef}>
            <div className="post__avatar">
                <Avatar src={avatar} />
            </div>
            <div className="post__body">
                <div className='post__header'>
                    <div className='post__headerText'>
                        <h2>
                            {username}{" "} <span> </span>
                        </h2>
                    </div>
                    <div className='post__headerText'>
                        <h3>
                            {heading}{" "} <span> </span>
                        </h3>
                    </div>
                    <div className='post__headerDescription'>
                        <p>{message}</p>
                    </div>
                    <div className='postImages'>
                        {/* Posted image  */}
                        <img src={image} />
                        {/* <img src={image} /> */}
                    </div>
                </div>
                {/* <div className='    '>
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div> */}

                {/* Buttom PostBar or say CommentIconBar */}
                <div className='CommentBar'>
                    <CommentBarIcons funIndex={index} commentFuction={handleUpvote} text={upvote.toNumber()} Icon={likeIcon} />
                    <CommentBarIcons funIndex={index} commentFuction={handleDownvote} text={downvote.toNumber()} Icon={dislikeIcon} />
                    <CommentBarIcons text="" commentFuction={handleShare} Icon={ShareIcon} />   
                    {/* <CommentBarIcons  text="" Icon={commentsIcon}/> */}
                    {/* <p  className='Vote'><span className='AddVote Up' onClick={() => handleUpvote(index)}>like </span> : { upvote.toNumber()}</p> */}
                    {/* <p className='Vote'><span className='AddVote Down' onClick={() => handleDownvote(index)}>🖕</span> : {downvote.toNumber()}</p> */}


                    <Comment handleComment={handleComment} allComments={comments} index={index} Icon={commentsIcon} />
                </div>
            </div>
        </div>
    );
}

export default Post