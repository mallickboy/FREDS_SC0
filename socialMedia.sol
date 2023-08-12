//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SocialMedia {
  struct profile {
    string userName;
    string profilePic;
    uint postCount;
  }
    mapping(address => profile) users;
    uint256 userCount = 1;
    struct post {
        address publicAdd;
        string name;
        string heading;
        string body;
        string image;
        string[] comments;
        uint256 upvote;
        uint256 downvote;
    }
    post[] posts;

   

    function registerUser(string memory name, string memory profileImage) public {
        users[msg.sender].userName=name;
        users[msg.sender].postCount=0;
        users[msg.sender].profilePic=profileImage;
        userCount++;
    }
   function isRegistered() public view returns (bool) {
    return bytes(users[msg.sender].userName).length > 0;
}
  
  function returnUser() public view returns ( profile memory)
  {
    return users[msg.sender];
  }
    function addPost(
       
        string memory heading,
        string memory body , string memory image
    ) public {
      require(isRegistered(),"Register to post");
        posts.push(
            post({
                publicAdd: msg.sender,
                name:"Sushanta",
                heading: heading,
                body: body,
                image:image,
                comments: new string[](0),
                upvote: 0,
                downvote: 0
            })
        );
        users[msg.sender].postCount++;
    }

    function ReturnPosts() public view returns (post[] memory) {
        return posts;
    }

    function comment(uint index, string memory message) public {
        posts[index].comments.push(message);
    }

    function upvote(uint index) public {
        posts[index].upvote++;
    }
  function deletePost(uint index) public {
    require(index < posts.length, "Invalid post index");
    require(posts[index].publicAdd == msg.sender, "You can only delete your own posts");

 

    // Shift the elements in the array to remove the post at the specified index
    for (uint i = index; i < posts.length - 1; i++) {
        posts[i] = posts[i + 1];
    }

    // Remove the last element from the array
    posts.pop();
    
    // Decrement the post count for the user
   
}



    function downvote(uint index) public {
        posts[index].downvote++;
    }
}
