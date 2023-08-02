import React from 'react'
import "./feed.css"
import Post from './Post';
import Tweetbox from "./TweetBox.js";

function Feed() {
  return (
    <div className='feed'>
        {/*Home */}
        <div className="feed__header">
        <h2>Home</h2>
      </div>
      
      {/*Tweet box */}
      <Tweetbox/>
      {/*Post*/}
      <Post 
        username= "ElonMusk"
        text = "You are Fired!!"
        avatar="https://hips.hearstapps.com/hmg-prod/images/gettyimages-1229892983-square.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:"
        image="https://upload.wikimedia.org/wikipedia/commons/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg"
      />
      {/*Post*/}
      {/*Post*/}
      {/*Post*/}
      {/*Post*/}
      {/*Post*/}
      {/*Post*/}
      {/*Post*/}
    </div>
  )
}

export default Feed
