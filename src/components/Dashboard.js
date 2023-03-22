import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./../styles/Dashboard.css";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Widget from "./Widget";
import posts from "../mock_backend/Posts";
import Card from "./Card";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.value);
  const [post, setPost] = useState("");
  const [displayPosts, setDisplayPosts] = useState(posts);

  const display = (postData) => {
    setDisplayPosts(postData);
  };

  const handlePost = (e) => {
    e.preventDefault();
    posts.unshift({
      id: displayPosts.length + 1,
      initial: user.name.slice(0, 1).toUpperCase(),
      name: user.name,
      description: "User",
      post: post,
      likes: new Set(),
      comments: [],
    });
    setDisplayPosts([...posts]);
    setPost("");
  };

  useEffect(() => {
    if (user.isLoggedIn === false) navigate("/");
    else console.log(user);
  }, []);

  return (
    <div className="dashboard">
      <Navbar />
      <div className="body__main">
        <Sidebar />
        <div className="feed">
          <div className="feed__input--container libd">
            <div className="feed__input--wrapper">
              <div className="account__avatar">
                <div className="account__avatar--img"></div>
              </div>
              <form className="feed__input" onSubmit={handlePost}>
                <input
                  type="text"
                  value={post}
                  placeholder="Start a post"
                  onChange={(e) => {
                    setPost(e.target.value);
                  }}
                />
                <button type="submit">Send</button>
              </form>
            </div>

            <div className="feed__input--options">
              <div className="input__option">
                <i style={{ color: "#70b5f9" }} className="material-icons">
                  {" "}
                  insert_photo{" "}
                </i>
                <h4>Photo</h4>
              </div>
              <div className="input__option">
                <i style={{ color: "#7fc15e" }} className="material-icons">
                  {" "}
                  subscriptions{" "}
                </i>
                <h4>Video</h4>
              </div>
              <div className="input__option">
                <i style={{ color: "#e7a33e" }} className="material-icons">
                  {" "}
                  event_note{" "}
                </i>
                <h4>Event</h4>
              </div>
              <div className="input__option">
                <i style={{ color: "#fc9295" }} className="material-icons">
                  {" "}
                  calendar_view_day{" "}
                </i>
                <h4>Write Article</h4>
              </div>
            </div>
          </div>

          {displayPosts.map((e) => (
            <div key={e.id}>
              <Card e={e} display={display} />
            </div>
          ))}
        </div>
        <Widget />
      </div>
    </div>
  );
};

export default Dashboard;
