import React from "react";
import "./../styles/Navbar.css";
import { useDispatch } from "react-redux";
import { logout } from "../features/Users";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logOut = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <div className="header">
      <div className="header__nav">
        <div className="header__left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            className="global-nav__logo"
          >
            <title>LinkedIn</title>

            <g>
              <path
                d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z"
                fill="#0c67c2"
              ></path>
            </g>
          </svg>
          <div className="header__search">
            <i className="material-icons"> search </i>
            <input type="text" placeholder="Search" />
          </div>
        </div>

        <div className="header__right">
          <div className="header__option active">
            <i className="material-icons header__option--icon"> home </i>
            <h3>Home</h3>
          </div>
          <div className="header__option">
            <i className="material-icons header__option--icon">
              {" "}
              supervisor_account{" "}
            </i>
            <h3>My Network</h3>
          </div>
          <div className="header__option">
            <i className="material-icons header__option--icon">
              {" "}
              business_center{" "}
            </i>
            <h3>Jobs</h3>
          </div>
          <div className="header__option">
            <i className="material-icons header__option--icon"> chat </i>
            <h3>Messaging</h3>
          </div>
          <div className="header__option">
            <i className="material-icons header__option--icon">
              {" "}
              notifications{" "}
            </i>
            <h3>Notifications</h3>
          </div>
          <div className="header__option" onClick={logOut}>
            <div className="account__avatar">
              <div className="account__avatar--img"></div>
            </div>
            <h3>Logout</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
