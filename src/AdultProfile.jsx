import React from "react";
import { useContext } from "react";
import logo from "./../public/assets/Logo.svg";
import Avatar from "./components/Avatar";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "./contexts/Auth";
import "./Layout/adultProfile.css";
import cuteVisitor from "./../public/assets/cute_visitors.svg";
import pricklyVisitor from "../public/assets/prickly_visitors.svg";
import fluffyVisitor from "./../public/assets/fluffy_visitors.svg";
import creepyCrawlyVisitor from "./../public/assets/creepy_crawly_visitors.svg";
import { ChildAvatar } from "./Layout/ChildProfile.styled";
import NavMenu from "./components/NavMenu";
import { MeTreeContext } from "./App";

export default function AdultProfile() {
  const { state, setState } = useContext(MeTreeContext);

  const history = useHistory();

  const { user } = useAuth();

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
          <h1 className="header">Create your Growing Me profile</h1>
        </div>

        <div className="flex row space-between mobile-column">
          <div>
            <Avatar
              url={state.data.profile?.avatar_url || ""}
              size={150}
              onUpload={(url) => {
                setState({
                  profile: {
                    avatar_url: url,
                  },
                });
                // updateProfile({
                //   adult_name,
                //   avatar_url: url,
                //   child_name,
                //   child_avatar,
                // });
              }}
            />
          </div>

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
        </div>
        <h2>Choose your avatar</h2>
        <div className="grid avatar-selection">
          <div className="flex center">
            <input
              type="radio"
              id="child_avatar1"
              name="child_avatar"
              value="./../public/assets/cute_visitors.svg"
              onChange={(e) => {
                setState({
                  profile: {
                    child_avatar: e.target.value,
                  },
                });
              }}
            />
            <label htmlFor="child_avatar1">
              <ChildAvatar src={cuteVisitor} alt="" />
            </label>
          </div>

          <div className="flex center">
            <input
              type="radio"
              id="child_avatar2"
              name="child_avatar"
              value="./../public/assets/fluffy_visitors.svg"
              onChange={(e) => {
                setState({
                  profile: {
                    child_avatar: e.target.value,
                  },
                });
              }}
            />
            <label htmlFor="child_avatar2">
              <ChildAvatar src={fluffyVisitor} alt="" />
            </label>
          </div>

          <div className="flex center">
            <input
              type="radio"
              id="child_avatar3"
              name="child_avatar"
              value="./../public/assets/prickly_visitors.svg"
              onChange={(e) => {
                setState({
                  profile: {
                    child_avatar: e.target.value,
                  },
                });
              }}
            />
            <label htmlFor="child_avatar3">
              <ChildAvatar src={pricklyVisitor} alt="" />
            </label>
          </div>

          <div className="flex center">
            <input
              type="radio"
              id="child_avatar4"
              name="child_avatar"
              value="./../public/assets/creepy_crawly_visitors.svg"
              onChange={(e) => {
                setState({
                  profile: {
                    child_avatar: e.target.value,
                  },
                });
              }}
            />
            <label htmlFor="child_avatar4">
              <ChildAvatar src={creepyCrawlyVisitor} alt="" />
            </label>
          </div>
        </div>
        <div className="flex flex.row flex-center">
          <button
            className="button block primary max-width"
            onClick={() => {
              history.push("/");
            }}
            // disabled={loading}
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
}
