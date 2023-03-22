import React from "react";
import { useSelector } from "react-redux";
import "./../styles/Sidebar.css";

const Sidebar = () => {
  const user = useSelector((state) => state.user.value);
  return (
    <div className="sidebar">
      <div className="sidebar__top libd">
        <img
          src="https://static-exp1.licdn.com/sc/h/55k1z8997gh8dwtihm11aajyq"
          alt=""
        />
        <div className="account__avatar">
          <div className="account__avatar--img"></div>
        </div>
        <h2>{user.name}</h2>
        <h4>{user.username}</h4>
      </div>

      <div className="sidebar__stats libd">
        <div className="sidebar__stat">
          <p>Who Viewed You</p>
          <p className="sidebar__stat--number">1523</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__stat--number">2549</p>
        </div>
      </div>

      <div className="sidebar__bottom libd">
        <p>Recent</p>
        <div className="sidebar__recent--item">
          <span className="sidebar__hash">#</span>
          <p>reactjs</p>
        </div>
        <div className="sidebar__recent--item">
          <span className="sidebar__hash">#</span>
          <p>programming</p>
        </div>
        <div className="sidebar__recent--item">
          <span className="sidebar__hash">#</span>
          <p>softwareengineering</p>
        </div>
        <div className="sidebar__recent--item">
          <span className="sidebar__hash">#</span>
          <p>design</p>
        </div>
        <div className="sidebar__recent--item">
          <span className="sidebar__hash">#</span>
          <p>developer</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
