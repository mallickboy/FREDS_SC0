import "./widgets.css"
import React, { useState, useEffect } from "react";
import "./feed.css"
import Post from './Post';
import Tweetbox from "./TweetBox.js";
import { Avatar } from '@material-ui/core';
import FlipMove from "react-flip-move";

import { ethers } from "ethers"
import { contract_abi, contract_address } from "./Consts/constants";
import { red } from "@mui/material/colors";
const provider = new ethers.providers.Web3Provider(window.ethereum);
await provider.send("eth_requestAccounts", []);
const signer = provider.getSigner();
const contract = new ethers.Contract(contract_address, contract_abi, signer); // Replace with your Ethereum node provider
const socialMediaContract = contract;
const pubAddress = await signer.getAddress();
console.log(pubAddress)


function Widgets({ allPosts }) {



  let pic = {
    // image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg",
    avatar: "https://media.wired.com/photos/598e35994ab8482c0d6946e0/master/w_1920,c_limit/phonepicutres-TA.jpg",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
  }
  let showWidget = false;
  const [seletedPost, setseletedPost] = useState({
    name: "",
    heading: "",
    body: "",
    imageFile: "",
    comments: [],
    upvote: 0,
    downvote: 0
  })
  function widgetPost(index) {
    // alert("Widgets = ",heading);

    setseletedPost(allPosts[index])
    console.log("http://127.0.0.1:5000/uploads/"+seletedPost.imageFile)
  }
// widgetPost(1);  
let avatar= "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png";

  return (
    <div className='feed' id="widget">
      <div className="feed__header">
        <h2>Widgets</h2>
      </div>

      <div id="widgetTop">
        <h2> Most liked posts</h2>


        {/* // add post heading here  */}
        <div id="eachPost" >
          {allPosts.map((eachPost, index) => (
            // Posts 
            < div className="post" onClick={() => { widgetPost(index) }}>
              <div className="post__avatar">
                <Avatar src={avatar} />
              </div>
              <div className='post__header'>
                <div className='post__headerText'>
                  <h2>
                    {eachPost.name}{" "} <span> </span>
                  </h2>
                </div>
                <div className='post__headerText'>
                  <h3>
                    {eachPost.heading}{" "} <span> </span>
                  </h3>
                </div>
              </div>
            </div>

          ))};
        </div>



        {/* // ending post heading here  */}


      </div>

      <div id="widgetBottom" className="widgetBottom">
        <h2> Preview</h2>


        {/* // add post heading here  */}
        <div id="eachPost" >
          {/* // Posts  */}
          < div className="post">
            <div className="post__avatar">
              <Avatar src={avatar} />
            </div>
            <div className='post__header'>
              <div className='post__headerText'>
                <h2>
                  {seletedPost.name}{" "} <span> </span>
                </h2>
              </div>
              <div className='post__headerText'>
                <h3>
                  {seletedPost.heading}{" "} <span> </span>
                </h3>
              </div>
              <div className='post__bodyText' style={{margin:"4px"}}>
                <p style={{fontColor:"white"}}>{seletedPost.body}</p>
              </div>
              <div id="postImage">
                {/* Posted image  */}
                <img src={"http://127.0.0.1:5000/uploads/"+seletedPost.imageFile} />
                {/* <img src={image} /> */}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )

}




export default Widgets
