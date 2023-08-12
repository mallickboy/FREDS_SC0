import React, { useState, useEffect } from "react";
import "./feed.css"
import Post from './Post';
import Tweetbox from "./TweetBox.js";
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


function Feed() {

  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ heading: "", body: "" });
  // Function to fetch all posts from the smart contract
  const fetchPosts = async () => {
    const allPosts = await socialMediaContract.ReturnPosts();
    setPosts(allPosts);
    console.log(allPosts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Function to create a new post
  const createPost = async () => {
    const { heading, body } = newPost;
    const userId = "user1"; // Replace with the actual user id
    try {
      await socialMediaContract.addPost(userId, heading, body);
      setNewPost({ heading: "", body: "" });
      fetchPosts();
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };
  // Function to handle comment submission
  const handleComment = async (index, message) => {
    try {
      await socialMediaContract.comment(index, message);
      fetchPosts();
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };
  // Function to handle upvote
  const handleUpvote = async (index) => {
    try {
      await socialMediaContract.upvote(index);
      fetchPosts();
    } catch (error) {
      console.error("Error upvoting:", error);
    }
  };

  // Function to handle downvote
  const handleDownvote = async (index) => {
    try {
      await socialMediaContract.downvote(index);
      fetchPosts();
    } catch (error) {
      console.error("Error downvoting:", error);
    }
  };



  // let show = [
  //   {
  //     username: "ElonMusk",
  //     text: "You are Fired!!",
  //     avatar: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1229892983-square.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:",
  //     image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg",
  //     displayName: "Elon Musk",
  //     verified: true // Assuming Elon Musk is a verified user
  //   },
  //   {
  //     username: "ElonMusk",
  //     text: "You are Fired!!",
  //     avatar: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1229892983-square.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:",
  //     image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg",
  //     displayName: "Elon Musk",
  //     verified: true // Assuming Elon Musk is a verified user
  //   }
  // ];
  let pic = {
    // image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg",
    avatar: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1229892983-square.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
  }

  return (
    <div className='feed'id="feedTop">
      {/*Home */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      {/*Tweet box */}
      <Tweetbox />
      {/*Post*/}
      <FlipMove>
        {posts.map((post, index) => (
          <Post
            handleComment={handleComment}
            handleUpvote={handleUpvote}
            handleDownvote={handleDownvote}

            index={index}
            key={post.text} //
            username={"Name : TNS^3"} //
            displayName={post.displayName} //
            avatar={post.avatar} //
            verified={post.verified} //

            heading={post.heading}
            message={post.body}
            image={pic.image} //{post.image} // add the image link of block chain here
            upvote={post.upvote}
            downvote={post.downvote}
            comments={post.comments}
          />
        ))}
        {/* Post */}
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
