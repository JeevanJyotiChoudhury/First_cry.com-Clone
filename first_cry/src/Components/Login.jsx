import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Styles/login.module.css";

const Login = () => {
  let loginUsers = JSON.parse(localStorage.getItem("registeredDetails"));

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const emailRef = useRef();
  console.log(emailRef.current);

  const passwordRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
    for (let i = 0; i < loginUsers.length; i++) {
      if (loginUsers[i].email == email && loginUsers[i].password == password) {
        navigate("/cart");
      } else {
        alert("Need to login first!!")
        navigate("/");
      }
    }
  };
  return (
    <div style={{ backgroundColor: "#fff", minHeight: "90vh" }}>
      <div className={style.comm_header}>
        <center>
          <img
            src="https://cdn.fcglcdn.com/brainbees/images/n/fc-logo-s.jpg"
            alt="Logo"
            className="img__logo"
            onClick={() => {
              navigate("/");
            }}
          />
        </center>

        <section className={style.login__section}>
          <div className={style.login__div}>
            <p className={style.login__heading}>Login</p>
            <form>
              <input
                type="email"
                placeholder="Email"
                ref={emailRef}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                ref={passwordRef}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div>
                <button type="submit" onClick={handleLogin}>
                  Login
                </button>
              </div>
              <div className={style.l__fot_dis_flex}>
                <div>If you don't have an account, please</div>
                <div
                  className={style.navig__signup}
                  onClick={() => {
                    navigate("/register");
                  }}
                >
                  Register Here
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
