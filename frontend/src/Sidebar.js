import React, { useState ,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
import './AddPost.css';
import Sidebaroptions from './Sidebaroptions.js';
import freds1 from './Assets/freds1.jpg'

import { Avatar, Button } from '@material-ui/core';
import BackHandOutlinedIcon from '@mui/icons-material/BackHandOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

import "./tweetbox.css";

import axios from "axios";
import { ethers } from "ethers";
import { contract_abi, contract_address } from "./Consts/constants";
import Post from './Post';
const provider = new ethers.providers.Web3Provider(window.ethereum);
await provider.send("eth_requestAccounts", []);
const signer = provider.getSigner();
const contract = new ethers.Contract(contract_address, contract_abi, signer);
const socialMediaContract=contract
function Sidebar() {
  const [modalVisible, setModalVisible] = useState(false);
  // const [newPost, setNewPost] = useState({
  //   heading: '',
  //   body: '',
  //   file: null,
  // });
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ heading: "", body: "" ,imageFile:""});
  const [previewImage, setPreviewImage] = useState(null);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setNewPost({
      heading: '',
      body: '',
      file: null,
    });
    setPreviewImage(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   setNewPost((prevPost) => ({
  //     ...prevPost,
  //     file,
  //   }));
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       setPreviewImage(reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPost.heading || !newPost.body) {
      alert('Please fill in both the Heading and Body fields.');
    } else {
      console.log('Form submitted:', newPost);
      handleCloseModal();
    }
  };


const [toxic,settoxic]=useState(false)
  const [file, setFile] = useState(null);
const [im,setim]=useState("");
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };


  
useEffect(()=>{
  console.log("imageselted5:"+newPost.imageFile);
},
[newPost])
  const handleUpload = async (event) => {
    event.preventDefault();
    const user=await contract.returnUser()
    const postCount= user.postCount.toNumber();
    const address= await signer.getAddress();
    console.log(postCount)
    const fileExtension = file.name.split('.').pop();
    const filename=address+"_"+postCount+"."+fileExtension;
    setNewPost({ ...newPost, imageFile: filename})
    // console.log("imageselted:"+filename);
    
    // console.log("imageselted:"+newPost.imageFile);
    const formData = new FormData();
    formData.append('file', file);
  
    formData.append('data', filename); // Replace with your string data

    try {
      const response = await axios.post('http://127.0.0.1:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('File uploaded:', response.data.file_url);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const fetchPosts = async () => {
    const allPosts = await socialMediaContract.ReturnPosts();
    setPosts(allPosts);
    console.log(allPosts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = async () => {
    const { heading, body , imageFile} = newPost;
    const userId = "user1"; // Replace with the actual user id
    try {
     console.log("imageFileNmae:"+imageFile)
     
      await socialMediaContract.addPost( heading, body,imageFile);
      setNewPost({ heading: "", body: "" });
      fetchPosts();
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };
  const [prediction, setPrediction] = useState('');
  const [inputText, setInputText] = useState('');
  useEffect(()=>
  {
    setInputText(newPost.body)
  },[newPost])
const Post= async ()=>
{
  try {
   
    const response = await axios.post('http://localhost:5000/classify', {
      text: newPost.heading+" "+newPost.body
    });
    const result = response.data.prediction === 1 ? 'toxic' : 'non-toxic';
    console.log(result)
    if(result==="toxic")
  {
    alert("The post is toxic")
  }
  else{
    
    createPost()
}

  } catch (error) {
    console.error('Error:', error);
    
  }
  // console.log("This is:-",toxic)
  
}
  return (
    <div className='sidebar'>
      {/* Rest of the sidebar content */}
      <Link to='/'>
        {/*App icon */}
        {/* <BackHandOutlinedIcon className='sidebar__twitterIcon' /> */}
        <div className="logo1">
            <img src={freds1} alt="Picture"></img>
            <h1>FREDS</h1>
          </div>
      </Link>
      <Link to='/'>
        {/*Sidebaroptions */}
        <Sidebaroptions text='Home' Icon={HomeOutlinedIcon} />
      </Link>
      <Link to='/Explore' activeTab={2}>
        {/*Sidebar options */}
        <Sidebaroptions text='Explore' Icon={HomeOutlinedIcon} />
      </Link>
      <Link to='/' ClassName='active'>
        {/*Sidebar options */}
        <Sidebaroptions text='Messages' Icon={MessageOutlinedIcon} />
      </Link>
      <Link to='/profile'>
        {/*Sidebar options */}
        <Sidebaroptions text='Profile' Icon={AccountCircleOutlinedIcon} />
      </Link>
      <Link to='/'>
        <Sidebaroptions text='More' Icon={MoreHorizOutlinedIcon} />
      </Link>
      <Button variant='outlined' className='sidebar__tweet' onClick={handleOpenModal}>
        Post
      </Button>
      {modalVisible && (
        <div className='modal'>
          <div className='modal-content'>
            <span className='close' onClick={handleCloseModal}>
              &times;
            </span>
            <div className='modal-header'>
              <h3>ADD POST</h3>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Avatar
                  src='https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png'
                  style={{ width: '10%', height: 'auto' }}
                />
            </div>

              {/* <form onSubmit={handleSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    name='heading'
                    value={newPost.heading}
                    placeholder='Heading...'
                    onChange={handleInputChange}
                  />
                </div>
                <div className='form-group'>
                  <textarea
                    style={{ minHeight: '6rem' }}
                    name='body'
                    value={newPost.body}
                    placeholder='Body...'
                    onChange={handleInputChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='file'
                    name='file'
                    accept='image/*'
                    onChange={handleFileChange}
                  />
                  {previewImage && (
                    <div style={{ maxWidth: '30%',maxHeight: '7rem',display: 'flex', justifyContent: 'center', marginTop: '5%' }}>
                      <img
                        src={previewImage}
                        alt='Preview'
                        style={{ maxWidth: '100%', maxHeight: 'auto' }}
                      />
                    </div>
                  )}
                </div>
                <button type='submit' className='uploadButton'>
                  Upload and Post
                </button>
              </form> */}
               
    <form>
      <div className="form-group">
        {/* <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" /> */}
        <input
          
          
          type="text"
          
        value={newPost.heading}
        placeholder="Heading..."
        onChange={(e) => setNewPost({ ...newPost, heading: e.target.value })}
        />
      </div>
      
      <div className='form-group'>
      <textarea  style={{minHeight:"6rem"}}
        value={newPost.body}
        placeholder="Body..."
        onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
      />
                  </div>

      
      {/* <input
        value={tweetImage}
        onChange={(e) => setTweetImage(e.target.value)}
        className="tweetBox__imageInput"
        placeholder="Optional: Enter image URL"
        type="text"
        
      /> */}
      <div classname="form-group"> <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button></div>
 
      <Button
        // onClick={sendTweet}
        className='uploadButton'
       
        onClick={()=>{Post()}}
      >
        Post
      </Button>
    </form>
  
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
