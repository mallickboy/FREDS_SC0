import React, { useEffect, useState } from 'react';
import { Avatar, Button } from '@material-ui/core';
import Navbar from "./Navbar";
import Vote from "../Assets/freds.jpg";
import Fox from "../Assets/fox.png";
import "./IntroPage.css";
import image from "../Assets/freds1.jpg";
import axios from "axios";
import { ethers } from "ethers";
import { contract_abi, contract_address } from "../Consts/constants";
const provider = new ethers.providers.Web3Provider(window.ethereum);
await provider.send("eth_requestAccounts", []);
const signer = provider.getSigner();
const contract = new ethers.Contract(contract_address, contract_abi, signer);
const socialMediaContract=contract
function IntroPage(props) {
  const [file, setFile] = useState(null);
  const [image,setimage]=useState("");
  const [userName,setuserName]=useState("")
  const askLogin=()=>{
    props.setShowLogin(false)
  }
  console.log("ShowNAM " + props.ShowNotAuthorized);
  const handleButtonClick = () => {
    window.open(
      "https://drive.google.com/file/d/1WO0uSGg5z5axv99zabekI_ZhjXEJZSKE/view?usp=drive_link"
    );
  };
  const [modalVisible, setModalVisible] = useState(false);
  const [newPost, setNewPost] = useState({
    userName: '',
    body: '',
    file: null,
  });
  const [previewImage, setPreviewImage] = useState(null);

  const handleOpenModal = async() => {
    const isRegistered= await contract.isRegistered()
    console.log("Registered:",isRegistered)
    if(isRegistered)
    {
      alert("You have already registered!!")
      return
    }
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setNewPost({
      userName: '',
      body: '',
      file: null,
    });
    setPreviewImage(null);
  };

  const handleInputChange = (e) => {
  setuserName(e.target.value)
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
useEffect(()=>
{   const getUser =async()=>
  {
    const user= await contract.returnUser()
    console.log(user)
  }
  getUser()
  
},[])
const RegisterUser=async()=>{
  
   await contract.registerUser(userName,image);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userName ) {
      alert('Please fill in both the userName and Body fields.');
    } else {
     
     RegisterUser()
      handleCloseModal();
    }
  };
  const handleSingIn=()=>{
    alert("sing in")
  };
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  const handleUpload = async (event) => {
    event.preventDefault();
   
    const address= await signer.getAddress();
   
    const fileExtension = file.name.split('.').pop();
    const filename=address+"."+fileExtension;
   setimage(filename)
    
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

  return (
    <>
      <Navbar />

      <section className="background firstSection">
        <div className="userName" style={{    textAlign: "center",
    fontSize: "28px"}}>
          <h1 className="animated-text" style={{color: "white"}}>
            <span>W</span>
            <span>e</span>
            <span>l</span>
            <span>c</span>
            <span>o</span>
            <span>m</span>
            <span>e</span>
            <span className="space"></span>
            <span>t</span>
            <span>o</span>
            <span className="space"></span>
            <span className="violet">F</span>
            <span className="violet">R</span>
            <span className="violet">E</span>
            <span className="violet">D</span>
            <span className="violet">S</span>
          </h1>
        </div>
        <div className="box-main">
          <div className="firstHalf">
            <p className="text-big">Unmask Your Voice:<span className="violet"> Anon Freedom</span> </p>
            <p className="text-small">
            Welcome to our revolutionary decentralized forum, where anonymous voices empowered by blockchain technology champion freedom of speech. We stand for those silenced by fear, providing a secure space to express ideas, guided by AI to filter out misuse. Join us in shaping a more inclusive digital future, where everyone's voice matters.
            </p>
            <div className="below-firsthalf">
              <img src={Fox} alt="Metamask"></img>
              <div className="buttons">
                {/* <button className="btn btn-dark" onClick={props.connectAccount}>
                  <a href='https://metamask.io/download/' style={{textDecoration:"none" ,color:"white"}}>Open Metamask Account</a>
                  
                </button> */}
                <button className="btn btn-dark" onClick={handleButtonClick}>
                  Watch Video
                </button>
                <button className="btn btn-dark" onClick={handleOpenModal}>
                  Sing up
                </button>
                <button className="btn btn-dark" onClick={askLogin}>
                  Sign in with Metamask
                </button>
              </div>
            </div>
            <div className="NotAuthorized">
              {props.ShowNotAuthorized ? <p>You are not authorized</p> : <></>}
            </div>
          </div>
          <div className="secondHalf">
            <img src={Vote} alt="Picture"></img> 
          </div>
        </div>
      </section>

      {/* <div className="loginContainer">
      
      <button className="loginButton" onClick={props.connectAccount}>
        Login Metamask
      </button>
      <div>
        {" "}
        {props.ShowNotAuthorized ? <p>You are not authorized</p> : <></>}
      </div>
    </div> */}
          {modalVisible && (
        <div className='modal'>
          <div className='modal-content'>
            <span className='close' onClick={handleCloseModal}>
              &times;   
            </span>
            <div className='modal-header'>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Avatar
                  // src='https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png'
                  src={image}
                  style={{ width: '10%', height: 'auto' }}
                  />
                  <h3 style={{padding:'10px'}}>FREED</h3>
            </div>

              <form onSubmit={handleSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    name='userName'
                    value={userName}
                    placeholder='Choose your name'
                    onChange={handleInputChange}
                  />
                </div>
                <div className='form-group'>

                </div>
                <div className='form-group' >
                  <div id='UploadProfile'>

                   <span id="uploadProfile">Profile picture : </span>
                 

<div classname="form-group"> <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button></div>
                    </div>
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
                  Sing up
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default IntroPage;