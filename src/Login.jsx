import React from "react";
import { useRef, useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "./contexts/Auth";
import { MeTreeContext } from "./App";


export default function Login() {

const { state, setState } = useContext(MeTreeContext);
  const emailRef = useRef();
  const passwordRef = useRef();

  // Get signUp function from the auth context
  const { signIn } = useAuth();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    //  if (state.data.tree === undefined) {
    //    setState({
    //      boxes: {
    //        a: { top: 0, left: 2, isGrowing: true },
    //        b: { top: 1, left: 3, isGrowing: false },
    //      },
    //    });
    //  }
    // Get email and password input values
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Calls `signIn` function from the context
    const { error } = await signIn({ email, password });

    if (error) {
      alert("error signing in");
    } else {
      // check if adult has a child name entered? @TODO
      // Redirect user to Me Tree
      // if (state.data?.tree === undefined) {
      //   setState({
      //     boxes: {
      //       a: { top: 0, left: 2, isGrowing: true },
      //       b: { top: 1, left: 3, isGrowing: false },
      //     },
      //   });
      // }
      history.push("/");
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
            Login
          </button>
        </div>
      </form>

      <div className="flex center text-center">
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
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
