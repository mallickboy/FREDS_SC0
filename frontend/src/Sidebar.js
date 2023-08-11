import React, { useState } from 'react';
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

function Sidebar() {
  const [modalVisible, setModalVisible] = useState(false);
  const [newPost, setNewPost] = useState({
    heading: '',
    body: '',
    file: null,
  });
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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setNewPost((prevPost) => ({
      ...prevPost,
      file,
    }));
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPost.heading || !newPost.body) {
      alert('Please fill in both the Heading and Body fields.');
    } else {
      console.log('Form submitted:', newPost);
      handleCloseModal();
    }
  };

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
      <Link to='/' activeClassName='active'>
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

              <form onSubmit={handleSubmit}>
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
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
