import { Link, useHistory } from "react-router-dom";
import { auth } from "firebase";
import React, { useEffect, useState } from "react";
import "./Login.css";
import { useStateValue } from "./StateProvider";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const login = (event) => {
    event.preventDefault();
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // logged in, redirect to homepage....
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = (event) => {
    event.preventDefault();
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          // create a user and logged in, redirect to homepage....
          history.push("/");
        }
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            type="text"
            onChange={(event) => setEmail(event.target.value)}
          />
          <h5>Password</h5>
          <input
            value={password}
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <button onClick={login} type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>
        <button onClick={register} className="login__registerBtn">
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
