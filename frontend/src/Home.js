import React, { useState, useEffect } from 'react';
import Sidebar from "./Sidebar";
import Feed from "./Feed.js";
import Widgets from "./Widgets.js";
import Profile from './slidebarPages/Profile';
import Explore from './slidebarPages/Explore';
import { Routes, Route } from "react-router-dom";

import { ethers } from "ethers"
import { contract_abi, contract_address } from "./Consts/constants";
const provider = new ethers.providers.Web3Provider(window.ethereum);
await provider.send("eth_requestAccounts", []);
const signer = provider.getSigner();
const contract = new ethers.Contract(contract_address, contract_abi, signer); // Replace with your Ethereum node provider
const socialMediaContract = contract;
const pubAddress = await signer.getAddress();
// console.log("Home = "+pubAddress) 
// alert(pubAddress)

function Home() {

    const [posts, setPosts] = useState([]);

    const [sortedPosts, setSortedPosts] = useState([]);

    //   const [formatedPosts, setFormatedPosts] = useState([]);    
    const [newPost, setNewPost] = useState({ heading: "", body: "", imageFile: "" });

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
        const { heading, body, imageFile } = newPost;
        const userId = "user1"; // Replace with the actual user id
        try {
            console.log("imageFileNmae:" + imageFile)

            await socialMediaContract.addPost(heading, body, imageFile);
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


    // modify for hot list widget  / highest post first
    console.log("Sorted array = ", typeof (posts[0]))
    // console.log("Sorted array = ",posts[0].body)
    let sortedPost;
    const formated = posts.map((eachpost, index) => {
        // console.log(eachpost.upvote.toNumber())
        return {
            name: eachpost.name,
            heading: eachpost.heading,
            body: eachpost.body,
            imageFile: eachpost.image,
            comments: eachpost.comment,
            upvote: eachpost.upvote.toNumber(),
            downvote: eachpost.downvote.toNumber()
        }
    })
    console.log(formated)
    formated.sort((post1, post2) => post2.upvote - post1.upvote)
    console.log("After Sorting", formated)
    // setSortedPosts(posts.sort((a,b)=>
    // a.upvote.toNumber() - b.upvote.toNumber()     ) )
    // const sortedPost=posts.sort((a,b)=>
    //     a.upvote.toNumber() - b.upvote.toNumber()     ) 
    //     console.log("Sorted array = "+sortedPost[0].upvote.toNumber())


    return (
        <div className="app">
            {/* Sidebar */}
            <Sidebar />

            <Routes>
                {/* <Route path="/" element={<Feed />} />               */}
                <Route path="/" element={<><Feed /><Widgets allPosts={formated} /></>} />

                {/* Profile */}
                <Route path="/profile" element={<><Profile /></>} />
                {/* Explore          */}
                <Route path="/Explore" element={<><Explore/></>} />              
            </Routes>

            {/* Feed
            <Feed /> */}

            {/*Widgets Rightside */}
            {/* <Widgets /> */}

        </div>
    );
}

export default Home;
