import React from "react";
import { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "./contexts/Auth";

export default function Signup() {
  const emailRef = useRef(); // eqv to doc.querySelector
  const passwordRef = useRef();

  // Get signUp function from the auth context
  const { signUp } = useAuth();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    // Get email and password input values
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Calls `signUp` function from the context
    const { error } = await signUp({ email, password });

    if (error) {
      alert("error signing in");
    } else {
      // Redirect user to Dashboard
      history.push("/adult-profile");
    }
  }

  return (
    <div className="flex column margin-left items-center">
      <form onSubmit={handleSubmit} className="x-narrow">
        <div>
          <label htmlFor="input-email">Email</label>
          <input id="input-email" type="email" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="input-password">Password</label>
          <input id="input-password" type="password" ref={passwordRef} />
        </div>
        <br />
        <div className="flex flex-center">
          <button className="button block primary max-width" type="submit">
            Sign up
          </button>
        </div>
      </form>

      <p>
        Already have an account? <Link to="/login">Log In</Link>
      </p>
      <div className="flex center width">
        <button className="button block primary magic-link ">
          <Link className="txt-sm-ish" to="/magic-link-login">
            Sign up using magic link
          </Link>
        </button>
      </div>
    </div>
  );
}
