import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import style from "./Styles/login.module.css";

const Register = () => {
  const navigate = useNavigate();
  let FirstNameRef = useRef();
  let LastNameRef = useRef();
  let Emailref = useRef();
  let Passsword = useRef();
  
  const handleRegister = ()=>{
    
    let registeredUsersArray=JSON.parse(localStorage.getItem("registeredDetails"))||[]
    let userDetails = {
      firstName : FirstNameRef.current.value,
      lastName : LastNameRef.current.value,
      email : Emailref.current.value,
      password : Passsword.current.value,
    }
    registeredUsersArray.push(userDetails)
    localStorage.setItem("registeredDetails",JSON.stringify(registeredUsersArray))
  }
  return (
    <div
    style={{ backgroundColor: "#fff", minHeight: "90vh"}}
  >
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
          <p className={style.login__heading}>Register</p>
          <form >
            <input
              type="text"
              placeholder="First Name"
              ref={FirstNameRef}
            />
            <input
              type="text"
              placeholder="Last Name"
              ref={LastNameRef}
            />
            <input
              type="email"
              placeholder="Email"
              ref={Emailref}
            />
            <input
              type="password"
              placeholder="Password"
              ref={Passsword}
            />
            <div>
              <button type="submit" onClick={handleRegister}>Register</button>
            </div>
            <div className={style.l__fot_dis_flex}>
              <div>If you already have an account, please</div>
              <div
                className={style.navig__signup}
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  </div>
  )
}

export default Register