import React from 'react'
import "./feed.css"
import Post from './Post';
import Tweetbox from "./TweetBox.js";
import FlipMove from "react-flip-move";

function Feed() {

  const posts = [
    {
      username: "ElonMusk",
      text: "You are Fired!!",
      avatar: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1229892983-square.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg",
      displayName: "Elon Musk",
      verified: true // Assuming Elon Musk is a verified user
    },
    {
      username: "ElonMusk",
      text: "You are Fired!!",
      avatar: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1229892983-square.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg",
      displayName: "Elon Musk",
      verified: true // Assuming Elon Musk is a verified user
    }
  ];
  
  return (
    <div className='feed'>
        {/*Home */}
        <div className="feed__header">
        <h2>Home</h2>
      </div>
      
      {/*Tweet box */}
      <Tweetbox/>
      {/*Post*/}
      <FlipMove>
      {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      {/*Post*/}
      {/*Post*/}
      {/*Post*/}
      {/*Post*/}
      {/*Post*/}
      {/*Post*/}
      {/*Post*/}
      </FlipMove>
    </div>
  )
}

export default Feed;
