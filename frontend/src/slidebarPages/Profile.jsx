import React, { useEffect, useState } from "react";
import "./css&Image/Profile.css";

// const profiledata = {
//     name:'Jonny',
//     id:'jonny6969',
//     imgurl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV_PF-ja_4MZYnMsn2ZMt2ejRqDXFvpMZXHQ&usqp=CAU',
// };
import { ethers } from "ethers";
import { contract_abi, contract_address } from "../Consts/constants";
const provider = new ethers.providers.Web3Provider(window.ethereum);
await provider.send("eth_requestAccounts", []);
const signer = provider.getSigner();
const contract = new ethers.Contract(contract_address, contract_abi, signer);
const socialMediaContract = contract;
const baseImageUrl = "http://127.0.0.1:5000/uploads/";
const Profile = () => {
  const [profiledata, setprofiledata] = useState({
    name: "",
    id: "",
    imgurl: "",
  });
  const styling = {
    fontSize: "40px",
  };

  useEffect(() => {
    const getUser = async () => {
      const user = await contract.returnUser();
      const address = await signer.getAddress();

      console.log(user);
      setprofiledata({
        name: user.userName,
        id: address,
        imgurl: baseImageUrl + user.profilePic,
      });
    };
    getUser();
  }, []);
  return (
    <>
      <div className="profile-container">
        <div className="images">
          <img src={profiledata.imgurl} className="shape" />
        </div>
        <div className="detel">
          <h3 style={styling}>
            UserName :<span className="stylename">{profiledata.name}</span>
          </h3>
          <h3 className="namestyle">Public Address :{profiledata.id}</h3>
        </div>
      </div>
    </>
  );
};

export default Profile;
