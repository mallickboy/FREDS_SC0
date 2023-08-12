import { useEffect, React, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.css";
import "./AddPost.css";
import { Avatar } from "@material-ui/core";
import Sidebaroptions from "./Sidebaroptions.js";
import BackHandOutlinedIcon from "@mui/icons-material/BackHandOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { Button } from "@material-ui/core";

import "./tweetbox.css";
import { Avatar, Button } from "@material-ui/core";
import axios from "axios";
import { ethers } from "ethers";
import { contract_abi, contract_address } from "./Consts/constants";
const provider = new ethers.providers.Web3Provider(window.ethereum);
await provider.send("eth_requestAccounts", []);
const signer = provider.getSigner();
const contract = new ethers.Contract(contract_address, contract_abi, signer);

function Sidebar() {
  // modal add post start
  const [modalVisible, setModalVisible] = useState(false);
  const [newPost, setNewPost] = useState({
    heading: "",
    body: "",
    file: null,
  });
  const [previewImage, setPreviewImage] = useState(null);

  const [file, setFile] = useState(null);
  const [im, setim] = useState("");
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  useEffect(() => {
    console.log("imageselted5:" + newPost.imageFile);
  }, [newPost]);
  const handleUpload = async (event) => {
    event.preventDefault();
    const user = await contract.returnUser();
    const postCount = user.postCount.toNumber();
    const address = await signer.getAddress();
    console.log(postCount);
    const fileExtension = file.name.split(".").pop();
    const filename = address + "_" + postCount + "." + fileExtension;
    setNewPost({ ...newPost, imageFile: filename });
    // console.log("imageselted:"+filename);

    // console.log("imageselted:"+newPost.imageFile);
    const formData = new FormData();
    formData.append("file", file);

    formData.append("data", filename); // Replace with your string data

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("File uploaded:", response.data.file_url);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setNewPost({
      heading: "",
      body: "",
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
  if (file) {
    // Show preview of the uploaded image
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(file);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPost.heading || !newPost.body) {
      alert("Please fill in both the Heading and Body fields.");
    } else {
      // Handle form submission
      console.log("Form submitted:", newPost);
      handleCloseModal();
    }
  };
  //  closing the message form inn case of out side click
  document.addEventListener("mousedown", (event) => {
    if (event.target.classList.contains("modal-overlay")) {
      handleCloseModal();
      // console.log(event.target.classList)
    }
  });
  // modal add post end

  const location = useLocation();
  function updateHighlight(index) {
    console.log("    clicked " + index);
  }
  let activeTab;

  return (
    <div className="sidebar">
      <Link to="/">
        {/*App  icon */}
        <BackHandOutlinedIcon className="sidebar__twitterIcon" />
      </Link>
      <Link to="/">
        {/*Sidebaroptions */}
        <Sidebaroptions text="Home" Icon={HomeOutlinedIcon} />
      </Link>
      <Link to="/Explore" activeTab={2}>
        {/*Sidebar options */}
        <Sidebaroptions text="Explore" Icon={HomeOutlinedIcon} />
      </Link>
      <Link to="/" activeClassName="active">
        {/*Sidebar options */}
        <Sidebaroptions text="Messages" Icon={MessageOutlinedIcon} />
      </Link>
      <Link to="/profile">
        {/*Sidebar options */}
        <Sidebaroptions text="Profile" Icon={AccountCircleOutlinedIcon} />
      </Link>
      <Link to="/">
        <Sidebaroptions text="More" Icon={MoreHorizOutlinedIcon} />
      </Link>
      {/*Addpost button*/}
      <Button
        variant="outlined"
        className="sidebar__tweet"
        onClick={handleOpenModal}
      >
        Post
      </Button>

      {/* Opening modal */}
      {modalVisible && (
        <div className="modal modal-overlay">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Avatar
                src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"
                style={{ width: "10%", height: "auto" }}
              />
            </div>
            <h1
              style={{
                color: "rgba(100, 20, 238, 0.9)",
                textAlign: "center",
                margin: "0",
                paddingbotton: "7% 0",
                paddingtop: "10px",
              }}
            >
              ADD POST
            </h1>
            {/* <div className="tweetBox">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                 
                    <input
                      type="text"
                      name="heading"
                      value={newPost.heading}
                      placeholder="Heading..."
                      onChange={handleInputChange}
                    />
                  
                </div>
                <div className="form-group">
                  <textarea
                    style={{ minHeight: '6rem' }}
                    name="body"
                    value={newPost.body}
                    placeholder="Body..."
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="file"
                    name="file"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                  {previewImage && (
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5%' }}>
                      <img
                        src={previewImage}
                        alt="Preview"
                        style={{ width: '50%', height: 'auto' }}
                      />
                    </div>
                  )}
                </div>
                <button type="submit" className="uploadButton">
                  Upload and Post
                </button>
              </form>
            </div> */}
            <div className="tweetBox">
              <form>
                <div className="tweetBox__input">
                  <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
                  <input
                    type="text"
                    value={newPost.heading}
                    placeholder="Heading2..."
                    onChange={(e) =>
                      setNewPost({ ...newPost, heading: e.target.value })
                    }
                  />
                </div>
                <textarea
                  style={{ minHeight: "6rem" }}
                  value={newPost.body}
                  placeholder="Body..."
                  onChange={(e) =>
                    setNewPost({ ...newPost, body: e.target.value })
                  }
                />
                {/* <input
        value={tweetImage}
        onChange={(e) => setTweetImage(e.target.value)}
        className="tweetBox__imageInput"
        placeholder="Optional: Enter image URL"
        type="text"
        
      /> */}
                <div>
                  {" "}
                  <input type="file" onChange={handleFileChange} />
                  <button onClick={handleUpload}>Upload </button>
                </div>

                <Button
                  // onClick={sendTweet}

                  className="tweetBox__tweetButton RGBbutton"
                  onClick={() => {
                    createPost();
                  }}
                >
                  Tweet
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Modal end */}
    </div>
  );
}

export default Sidebar;
