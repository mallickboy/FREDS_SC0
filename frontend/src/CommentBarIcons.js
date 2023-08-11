import React from 'react'
// import "./CommentBarIcons.css" //CommentBarIcons.css
function CommentBarIcons({active,text,Icon,commentFuction,funIndex}) {
  return (
    <div className={`commentBarIcon ${active && "commentBarIcon--active"}`} onClick={() => commentFuction(funIndex)}>
    <Icon/>
      <h2>{text}</h2>
    </div>
  )
}

export default CommentBarIcons