import React from 'react';
import './css&Image/Profile.css';

const profiledata = {
    name:'Jonny',
    id:'jonny6969',
    imgurl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV_PF-ja_4MZYnMsn2ZMt2ejRqDXFvpMZXHQ&usqp=CAU',
};
const styling = {
    fontSize:'40px'
}
const imgstyle = {
    
}

const Profile = () =>{
    return (
        <>
        <div className='profile-container'>
        <div className='detel'>
            <h3 style={styling}>Hey,I am <span className='stylename'>{profiledata.name}</span></h3>
            <h3 className='namestyle'>{profiledata.id}</h3>
          
           </div>
           <div className='images'>
        <img src={profiledata.imgurl} className='shape'/>

           </div>
        </div>
        </>
    );
}

export default Profile;