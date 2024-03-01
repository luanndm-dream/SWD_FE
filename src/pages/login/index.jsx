import { useRef, useState, useEffect, useContext } from "react"
import "./login.css"
import busImage from "@/assets/logos/bus.png"
import AuthContext from "@/context/AuthProvider"
import axios from "axios"

const LOGIN_URL = "/api/v1/Authentication/LoginAsync"

const LoginPage = () => {
  const { setAuth } = useContext(AuthContext)

  const userRef = useRef(null)
  const errRef = useRef(null)

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
    e.preventDefault()
    try {
      const respone = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true
        }
      )
      console.log(JSON.stringify(respone?.data))
      const accessToken = respone?.data.accessToken
      const roles = respone?.data.roles
      setAuth({ email, pwd, roles, accessToken })
      setEmail("")
      setPwd("")
      setSuccess(true)
    } catch (err) {
      if (!err?.respone) {
        setErrMsg("No Sever Respone")
      } else if (err.respone?.status === 400) {
        setErrMsg("Missing Email or Password")
      } else if (err.respone?.status === 401) {
        setErrMsg("Unauthorize")
      } else {
        setErrMsg("Login Failed")
      }
      errRef?.current?.focus()
    }
  }
  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            {/* route to homepage */}
            <a href="#">Go to Home</a>
          </p>
        </section>
      ) : (
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
                onChange={e => setEmail(e.target.value)}
                value={email}
              />

              <label htmlFor="pwd">Password:</label>
              <input
                type="password"
                id="pwd"
                required
                onChange={e => setPwd(e.target.value)}
                value={pwd}
              />
              <button>Signin</button>
            </form>
          </div>
        </section>
      )}
    </>
  )
}

export default LoginPage
