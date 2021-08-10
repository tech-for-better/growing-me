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
    alert(
      "Success! Check your email for the verification link, and then log in."
    );

    if (error) {
      alert(
        "This account already exists. Click login to sign in with this email address, or enter a different email."
      );
    } else {
      // Redirect user to Dashboard
      history.push("/adult-profile");
    }
  }

  return (
    <div className="flex column margin-left items-center">
      <form onSubmit={handleSubmit} className="x-narrow">
        <div>
          <label htmlFor="input-email">
            Email<span aria-hidden="true">*</span>
          </label>
          <input required id="input-email" type="email" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="input-password">
            Password<span aria-hidden="true">*</span>
          </label>
          <div id="passwordRequirements">
            Passwords must be at least 6 characters long.
          </div>
          <input
            required
            id="input-password"
            type="password"
            aria-describedby="passwordRequirements"
            ref={passwordRef}
            minlength="6"
          />
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
