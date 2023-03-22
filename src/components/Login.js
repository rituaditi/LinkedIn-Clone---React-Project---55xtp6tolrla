import React, { useState } from "react";
import "./../styles/Login.css";
import google from '../assets/google-logo.png'
import userMap from "../mock_backend/UserList";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/Users";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);
  const [errorLogin, toggleErrorLogin] = useState(false);
  const [errorRegister, toggleErrorRegister] = useState(false);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (userMap.has(username)) {
      if (userMap.get(username).password === password) {
        dispatch(
          login({
            id: userMap.get(username).id,
            name: userMap.get(username).name,
            username: username,
            isLoggedIn: true,
          })
        );
        navigate(`/dashboard/${userMap.get(username).id}`);
      } else {
        toggleErrorLogin(true);
      }
    } else {
      toggleErrorLogin(true);
    }
  };

  const handleRegister = () => {
    if (
      username.length < 8 ||
      !username.includes("@") ||
      !username.includes(".")
    ) {
      toggleErrorRegister(true);
      return;
    }
    if (password.length < 6) {
      toggleErrorRegister(true);
      return;
    }
    if (name.length < 3) {
      toggleErrorRegister(true);
      return;
    }

    if (userMap.has(username)) {
      alert("User already Exists");
    } else {
      userMap.set(username, {
        id: userMap.size + 1,
        name: name,
        password: password,
      });
      setRegister(!register);
    }
  };

  return (
    <div className="container">
      {!register ? (
        <>
          <div className="sign_logo">
            <p>
              Linked<span className="logo_text">in</span>
            </p>
          </div>
          <div className="signin_content">
            <div>
              <h1 className="wd">Sign in</h1>
              <p className="text_sign">
                Stay updated on your professional world
              </p>
            </div>
            <div>
              <input
                className="wd input"
                type={"text"}
                id="email"
                name="email"
                placeholder="Email or Phone"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                required
              />
            </div>
            <div>
              <input
                className="wd input"
                type={"password"}
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                id="password"
                required
              />
            </div>
            <div className="error">
              {errorLogin ? <p>Invalid Username Or Password</p> : ""}
            </div>
            <div className="forgot">
              <p>
                <span className="fontb for">Forgot password?</span>
              </p>
            </div>

            <div>
              <button className="btn btn1 wd" onClick={handleLogin}>
                Sign in
              </button>
            </div>
            <div className="line_container">
              <div className="line"></div> <span className="orp">or</span>
              <div className="line"></div>
            </div>
            <div>
              <button className="btn btn2 google_button wd">
                <span className="Signin_Font">Sign in with Google</span>
                <img width={"40px"} src={google}></img>
              </button>
            </div>
          </div>
          <div className="new_user">
            <p>
              New to LinkedIn?{" "}
              <span
                className="fontb"
                onClick={() => {
                  setRegister(!register);
                }}
              >
                Join now
              </span>
            </p>
          </div>
          <div className="footer">
            <div className="sign_footer font_size">
              <p>
                Linked<span className="logo_footer">in</span>@2023
              </p>
            </div>
            <div className="foot font_size">
              <p>User Agreement</p>
            </div>
            <div className="foot font_size">
              <p>Privacy Policy</p>
            </div>
            <div className="foot font_size">
              <p>Community Guidelines</p>
            </div>
            <div className="foot font_size">
              <p>Cookie Policy</p>
            </div>
            <div className="foot font_size">
              <p>Copyright Policy</p>
            </div>
            <div className="foot font_size">
              <p>Send Feedback</p>
            </div>
            <div className="foot lang font_size">
              <p>
                Language
                <select>
                  <option></option>
                </select>
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="login">
          <div className="register_logo">
            <p>
              Linked<span className="logo_text">in</span>
            </p>
          </div>
          <div className="h_text">
            <p>Make the most of your professional life</p>
          </div>

          <div className="register_content">
            <div>
              <label className="register_font_size font_size" htmlFor="name">
                Name
              </label>
              <input
                className="rd register_input"
                type={"text"}
                name="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                id="name"
                required
              />
            </div>
            <div>
              <label className="register_font_size font_size" htmlFor="email">
                Email or Phone
              </label>
              <input
                className="rd register_input"
                type="email"
                id="email"
                name="email"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                required
              />
            </div>
            <div>
              <label
                className="register_font_size font_size"
                htmlFor="password"
              >
                Password (6 or more characters)
              </label>
              <input
                className="rd register_input"
                type={"password"}
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                id="password"
                required
              />
            </div>
            <div className="error font_size">
              {errorRegister ? (
                <p>Please Enter A Valid Name, Email & Password</p>
              ) : (
                ""
              )}
            </div>
            <div className="terms ">
              <p className="register_font_size font_size">
                By clicking Agree & Join, you agree to LinkedIn&nbsp;
                <span className="register_font">User Agreement</span>,
                <span className="register_font">Privacy Policy</span>, and&nbsp;
                <span className="register_font">Cookie Policy</span>.
              </p>
            </div>
            <div>
              <button
                className="register_btn register_btn1 rd"
                onClick={handleRegister}
              >
                Agree & Join
              </button>
            </div>
            <div className="register_apple_login">
              <button className="register_btn google_button register_btn2">
                <span className="Signin_Font">Register with Google</span>
                <img width={"40px"} src={google}></img>
              </button>
            </div>
            <div className="already_user">
              <p>
                Already on LinkedIn?&nbsp;
                <span
                  className="register_font"
                  onClick={() => {
                    setRegister(!register);
                  }}
                >
                  Sign in
                </span>
              </p>
            </div>
          </div>
          <div className="new_user">
            <p className="business_font">
              Looking to create a page for a business?&nbsp;
              <span className="register_font">Get help</span>
            </p>
          </div>
          <div className="footer">
            <div className="sign_footer font_size">
              <p>
                Linked<span className="logo_footer">in</span>@2023
              </p>
            </div>
            <div className="foot font_size">
              <p>User Agreement</p>
            </div>
            <div className="foot font_size">
              <p>Privacy Policy</p>
            </div>
            <div className="foot font_size">
              <p>Community Guidelines</p>
            </div>
            <div className="foot font_size">
              <p>Cookie Policy</p>
            </div>
            <div className="foot font_size">
              <p>Copyright Policy</p>
            </div>
            <div className="foot font_size">
              <p>Send Feedback</p>
            </div>
            <div className="foot lang font_size">
              <p>
                Language
                <select>
                  <option></option>
                </select>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
