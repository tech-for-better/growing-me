import React from "react";
import { useState } from "react";
import { supabase } from "./supabaseClient";
import logo from "/assets/Logo.svg";
import { LoginTree } from "./Layout/Login.styled";
import { Link } from "react-router-dom";

export default function MagicLinkLogIn() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = async (email) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({ email });
      if (error) throw error;
      alert("Check your email for the login link!");
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    // <LoginTree>
    <div className="row flex flex-center narrow">
      <div className="col-6 form-widget">
        {/* <h1 className="header">Growing Me</h1> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p className="description text-center">
          Sign in via magic link with your email below:
        </p> */}
        <div>
          {/* <label htmlFor="input-email">Email</label> */}
          <input
            className="inputField"
            id="input-email"
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <div className="flex center width">
            <button
              onClick={(e) => {
                e.preventDefault();
                handleLogin(email);
              }}
              className={"button block primary magic-link"}
              disabled={loading}
            >
              {loading ? <span>Loading</span> : <span>Send magic link</span>}
            </button>
          </div>
        </div>
        <div className="flex center width">
          <p className="text-center">
            Already have an account? <Link to="/login">Log In</Link>
          </p>
        </div>
      </div>
    </div>
    // </LoginTree>
  );
}
