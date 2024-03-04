import { useRef, useState, useEffect, useContext } from "react"
import "./login.css"
import busImage from "@/assets/logos/bus.png"
import AuthContext from "./../../context/AuthProvider"
import axios from "axios"
import { loginUser } from "../../lib/api/user-api"
import HomePage from './../home/index';
import { useNavigate } from "react-router-dom";
const LOGIN_URL = "/api/v1/Authentication/LoginAsync"

const LoginPage = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const userRef = useRef(null)
  const errRef = useRef(null)
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [pwd, setPwd] = useState("")
  const [errMsg, setErrMsg] = useState("")
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    userRef.current?.focus()
  }, [])

  useEffect(() => {
    setErrMsg("")
  }, [email, pwd])

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await loginUser(email, pwd); // Corrected variable name to response
      if (response.error) {
        console.log(response.error);
        if (!response.error) {
          setErrMsg("No Server Response");
        } else if (response.error.statusCode === 400) {
          setErrMsg(response.error?.message || "Invalid Email or Password!");
        } else if (response.error.statusCode === 401) {
          setErrMsg("Unauthorized");
        } else {
          setErrMsg("Login Failed");
        }
      } else {
        console.log(JSON.stringify(response?.data));
        const accessToken = response?.data.accessToken;
        const roles = response?.data.roles;
        setAuth({ email, pwd, roles, accessToken });
        setEmail("");
        setPwd("");
        setSuccess(true);
        navigate("/"); 
        // Redirect or perform any necessary actions upon successful login
      }
    } catch (err) {
      console.error(err);
      errRef?.current?.focus();
    }
  };
  return (
    <section className="login-page">
    <p
      ref={errRef}
      className={errMsg ? "errmsg" : "offscreen"}
      aria-live="assertive"
    >
      {errMsg}
    </p>
    <div className="login-form">
      <span className="logo-name">
        <img
          style={{ width: "37px", height: "37px" }}
          src={busImage}
          alt="Logo image"
        />
        <p>BusDelivery</p>
      </span>
      <div className="login-header">
        <h1>Login</h1>
        <p>Welcome to BusDelivery</p>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          required
          ref={userRef}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <label htmlFor="pwd">Password:</label>
        <input
          type="password"
          id="pwd"
          required
          onChange={(e) => setPwd(e.target.value)}
          value={pwd}
        />
        <button>Signin</button>
      </form>
    </div>
  </section>
  )
}

export default LoginPage
