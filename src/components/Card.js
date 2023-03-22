import React, { useState } from "react";
import { useSelector } from "react-redux";
import posts from "../mock_backend/Posts";

const Card = ({ e, display }) => {
  const user = useSelector((state) => state.user.value);

  const [comment, setComment] = useState("");
  const [toggleComment, setToggleComment] = useState(false);

  const toggleLike = () => {
    console.log(e.likes);
    if (e.likes.has(user.name)) {
      e.likes.delete(user.name);
      posts[posts.indexOf(e)].likes.delete(user.name);
    } else {
      e.likes.add(user.name);
      posts[posts.indexOf(e)].likes.add(user.name);
    }
    display([...posts]);
  };

  const handleComment = () => {
    posts[posts.indexOf(e)].comments.push({
      name: user.name,
      comment: comment,
    });
    display([...posts]);
    setComment("");
  };

  return (
    <div className="post libd">
      <div className="post__header">
        <div className="account__avatar">
          <div className="account__details">{e.initial}</div>
        </div>
        <div className="post__info">
          <h2 className="random__name">{e.name}</h2>
          <p>{e.description}</p>
        </div>
      </div>

      <div className="post__body">
        <div className="post__message">
          <p>{e.post}</p>
        </div>
        <div className="post__creative">
          {/* <img src="https://picsum.photos/560?random=3" alt="postImage" /> */}
        </div>
        <div className="post__summary"></div>
      </div>

      <div className="post__engagement--container">
        <div className="post__engagement--metrics">
          <img
            className=""
            src="https://static-exp1.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt"
            alt="like"
          />
          <span className="linkedin__engagement">{e.likes.size}</span>
        </div>
        <div className="post__engagement--ampiflications">
          <span className="post__engagement--comment">
            <span className="linkedin__engagement">{e.comments.length} </span>
            comments
          </span>
          <span className="post__engagement--shares">
            <span className="linkedin__engagement">#</span> shares
          </span>
        </div>
      </div>
      <div className="post__engagement--comments">
        {e.comments.map((commentUser) => (
          <div>
            <h4>{commentUser.name}</h4>
            <p>{commentUser.comment}</p>
          </div>
        ))}
      </div>
      <div className="post__engagement--comments">
        {toggleComment ? (
          <form
            className="comment__input"
            onSubmit={(event) => {
              event.preventDefault();
              handleComment();
            }}
          >
            <input
              className="post__engagement_input"
              type="text"
              value={comment}
              placeholder="Write A Comment"
              onChange={(e) => {
                setComment(e.target.value);
              }}
            />
            <button type="submit">Send</button>
          </form>
        ) : (
          ""
        )}
      </div>

      <div className="feed__input--options">
        <div className="input__option" onClick={toggleLike}>
          <i style={{ color: "gray" }} className="material-icons">
            {" "}
            thumb_up{" "}
          </i>
          <h4>Like</h4>
        </div>
        <div
          className="input__option"
          onClick={() => {
            setToggleComment(!toggleComment);
          }}
        >
          <i style={{ color: "gray" }} className="material-icons">
            {" "}
            comment{" "}
          </i>
          <h4>Comment</h4>
        </div>
        <div className="input__option">
          <i style={{ color: "gray" }} className="material-icons">
            {" "}
            share{" "}
          </i>
          <h4>Share</h4>
        </div>
        <div className="input__option">
          <i style={{ color: "gray" }} className="material-icons">
            {" "}
            send{" "}
          </i>
          <h4>Send</h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
