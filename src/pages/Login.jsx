import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Api from "../lib/api"; // CHECK THIS FILE!!!!!!

const Login = ({setUser}) => {

  const [userData, setUserData] = useState({email: '', password: ''})
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const response = await Api().post('login', {
        email: userData.email,
        password: userData.password
      })

      // meaning, account is active!!!!!
      console.log(response)
      if (response.status === 200) {
        // handle anything here, then redirect...
        localStorage.setItem('token', response.data.accessToken)
        alert('LOGGED IN.')
        setUser(response.data.user)
        navigate('/client')
      }
      else{
        console.log(response.status)
        console.log('CANNOT LOG IN.')
      }

    } catch(e) {
      // handle failed log in here!!!!
      console.log('CANNOT LOG IN.', e);
      alert('CANNOT LOG IN!')
    }
  }

  return (
    <div
      className="d-flex-column align-content-center bg-dark"
      style={{ width: "100vw", height: "100vh" }}
    >
      <div
        className="container position-absolute rounded border pt-5 pb-3 px-5 text-white"
        data-bs-theme="dark"
        style={{
          width: "500px",
          top: "50%",
          transform: "translate(-50%,-50%)",
          left: "50%",
        }}
      >
        <h2>Login</h2>
        <p>Please fill in the form to log in an account!</p>

        <div className="row form-row pt-3">
          <div className="form-group">
            <label htmlFor="inputEmail" className="mb-2">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              placeholder="Email"
              onChange={(e) => setUserData((current) => ({...current, 'email': e.target.value}))}
            />
          </div>
        </div>
        <div className="row form-row pt-3">
          <div className="form-group">
            <label htmlFor="inputPassword" className="mb-2">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              placeholder="Password"
              onChange={(e) => setUserData((current) => ({...current, 'password': e.target.value}))}
            />
          </div>
        </div>

        <div className="d-flex pt-3 ">
          <button type="submit" className="btn btn-danger w-100" onClick={handleLogin}>
            Log In
          </button>
        </div>

        <hr />

        <div className="mb-0">
          <p className="fs-6">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="text-decoration-none">
              <span>Sign Up!</span>
            </Link>
          </p>
        </div>
        <div className="d-flex pt-3 ">
          <button type="submit" className="btn btn-danger w-100">
            <Link to="/loginadmin" className="text-decoration-none">
                <span>Login as Admin</span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
