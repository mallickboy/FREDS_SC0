import React, { useState } from 'react';
import "./Comment.css";
import './App.css';

function Comment() {
  const [comments, setComments] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [newComment, setNewComment] = useState('');

  const handleCommentButtonClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments((prevComments) => [...prevComments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div className="comments_div">
      <header className="App-header">
        <button onClick={handleCommentButtonClick} className='button_change'>Comment</button>
        {modalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button className="close-button" onClick={handleCloseModal}>
                X
              </button>
              <textarea
                rows="4"
                cols="50"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Write your comment..."
              ></textarea>
              <button onClick={handleAddComment} className='add_comments'>Add Comment</button>
              <div className="comments">
                {comments.map((comment, index) => (
                  <div key={index} className="comment">
                    {comment}
                  </div>
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