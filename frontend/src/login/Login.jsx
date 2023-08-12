<div>
<FlipMove>
  {posts.map((post, index) => (
    <Post
      handleComment={handleComment}
      handleUpvote={handleUpvote}
      handleDownvote={handleDownvote}
      index={index}
      key={post.text} //
      username={post.name} //
      avatar={post.avatar} //
      verified={post.verified} //
      heading={post.heading}
      message={post.body}
      image={"http://127.0.0.1:5000/uploads/"+post.image} //{post.image} //
      upvote={post.upvote}
      downvote={post.downvote}
      comments={post.comments}
    />
  ))}
  {/* Post */}
  {/*Post*/}
  {/*Post*/}
  {/*Post*/}
  {/*Post*/}
  {/*Post*/}
  {/*Post*/}
</FlipMove>
</div>