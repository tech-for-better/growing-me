import React from "react";
import { useResetPassword } from "react-supabase";
import { supabase } from "./supabaseClient";
import { useContext } from "react";
import logo from "../images/Logo";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../authentication/contexts/Auth";
import "../layout/adultProfile.css";
import { cuteVisitor } from "../images/MeTreeImages";
import NavMenu from "../components/NavMenu";
import { MeTreeContext } from "../App";

export default function Settings() {
  const { state, setState } = useContext(MeTreeContext);
  //   const [{ error, fetching }, resetPassword] = useResetPassword();
  const history = useHistory();
  const { user } = useAuth();

  //   console.log("user in settings", user);

  async function onClickResetPassword() {
    const { data, error } = supabase.auth.api.resetPasswordForEmail(
      `${user.email}`
    );
    if (error) {
      throw error;
      return <div>Error sending email</div>;
    }
  }

  return (
    <>
      <div className="absolute flex metree--container">
        <div>
          <NavMenu />
        </div>
        <div>
          <Link to={"/content"}>
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </div>
        <div className="child_avatar-logo">
          <Link to={"/adult-profile"}>
            <img
              src={state.data.profile?.child_avatar ?? cuteVisitor}
              className="avatar"
              alt="avatar"
            />
          </Link>
        </div>
      </div>
      <div className="form-widget text-center adult-profile center margin-top txt-md">
        <div>
          <h1 className="header">Settings</h1>
        </div>
        <h2>Forgotten your password?</h2>
        <p>Click the button below to send a reset-password email </p>

        {/* <div className="flex row space-between mobile-column">
          <div className="mobile-wide">
            <div className="flex row pad-1">
              <label className="label-width" htmlFor="adult_name">
                Adult's Name
              </label>
              <input
                id="adult_name"
                type="text"
                placeholder="The name your child calls you"
                value={state.data.profile?.adult_name || ""}
                onChange={(e) => {
                  setState({
                    profile: {
                      adult_name: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="flex row pad-1">
              <label className="label-width" htmlFor="child_username">
                Child's Name
              </label>
              <input
                id="child_username"
                type="text"
                placeholder="What's your name?"
                value={state.data.profile?.child_name || ""}
                onChange={(e) => {
                  setState({
                    profile: {
                      child_name: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="flex row pad-1">
              <label className="label-width" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="text"
                placeholder="Your email"
                value={user.email}
                disabled
              />
            </div>
          </div>
        </div> */}

        <div className="flex flex.row flex-center">
          <button
            className="button block primary max-width"
            onClick={() => {
              onClickResetPassword();
            }}
            // disabled={loading}
          >
            Reset password
          </button>
        </div>
      </div>
    </>
  );
}
