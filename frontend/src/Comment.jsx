import React, { useState} from "react";
import "./Comment.css";
// import "./CommentBarIcons.css"
import './App.css';

function Comment({active, handleComment, allComments, index,Icon }) {
  //updating the comment box state for block chain
  const [newComment, setNewComment] = useState("");


  // front-end functions
  const [modalOpen, setModalOpen] = useState(false);
  const handleCommentButtonClick = () => {
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };

//  closing the message form inn case of out side click
  document.addEventListener("mousedown", (event) => {
    if(event.target.classList.contains("modal-overlay")){
      handleCloseModal()
      // console.log(event.target.classList)
    }
  });

  // end


  return (



    <div className="comments_div">
      <header className="App-header">
        <div onClick={handleCommentButtonClick} className={`sidebaroptions ${active && "sidebaroptions--active"}`}><Icon/></div>


        {/* // opening the comment form  */}
        {modalOpen && (
          <div className="modal-overlay" >
            <div className="modal-content" >

              <button className="close-button" onClick={handleCloseModal}>
                X
              </button>
              {/* Adding comment to blockchain */}
              <textarea
                rows="4"
                cols="50"
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Write your comment..."
              ></textarea>
              <button className='add_comments' onClick={() => handleComment(index, newComment)}>Add Comment</button>
              {/* // showing prevComments */}
              <div className='show_comments heading'>Comments</div>
              <div className="show_comments" >
                {allComments.map((comment, cIndex) => (
                  <p key={cIndex} >{comment}</p>

                ))}
              </div>
            </div>

          </div>
        )}
      </header>
    </div>

  );
}

export default Comment;