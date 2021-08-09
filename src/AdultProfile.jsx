import React from "react";
import { useState, useEffect, useContext } from "react";
import { supabase } from "./supabaseClient";
import logo from "./../assets/Logo.svg";
import Avatar from "./components/Avatar";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "./contexts/Auth";
// import ChildProfile from "./ChildProfile";
import "./Layout/adultProfile.css";
import cuteVisitor from "./../assets/cute_visitors.svg";
import pricklyVisitor from "../assets/prickly_visitors.svg";
import fluffyVisitor from "./../assets/fluffy_visitors.svg";
import creepyCrawlyVisitor from "./../assets/creepy_crawly_visitors.svg";
import { ChildAvatar } from "./Layout/ChildProfile.styled";
// import { getProfileData, setProfileData } from "../database/model";
import NavMenu from "./components/NavMenu";
import { MeTreeContext } from "./App";

export default function AdultProfile() {
  const { state, setState } = useContext(MeTreeContext);

  const history = useHistory();

  const { user } = useAuth();

  return (
    <>
      <div>
        <NavMenu />
      </div>

      <div className="center">
        <Link to={"/content"}>
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </div>
      <div className="form-widget text-center adult-profile center txt-md">
        <div>
          <h1 className="header">Create your growing me profile</h1>
        </div>

        <div className="flex row space-between">
          <div>
            <Avatar
              url={state.data.profile.avatar_url || ""}
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

          <div>
            <div>
              <div className="flex row pad-1">
                <div>
                  <label htmlFor="adult_name">Adult's Name</label>
                </div>
                <div>
                  <input
                    id="adult_name"
                    type="text"
                    placeholder="The name your child calls you"
                    value={state.data.profile.adult_name || ""}
                    onChange={(e) => {
                      setState({
                        profile: {
                          adult_name: e.target.value,
                        },
                      });
                    }}
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="flex row pad-1">
                <div>
                  <label htmlFor="child_username">Child's Name</label>
                </div>
                <div>
                  <input
                    id="child_username"
                    type="text"
                    placeholder="What's your name?"
                    value={state.data.profile.child_name || ""}
                    onChange={(e) => {
                      setState({
                        profile: {
                          child_name: e.target.value,
                        },
                      });
                    }}
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="flex row pad-1">
                <div>
                  <label htmlFor="email">Email</label>
                </div>
                <div>
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
          </div>
        </div>
        <h2>Choose your avatar</h2>
        <div className="grid avatar-selection">
          <div className="flex center">
            <input
              type="radio"
              id="child_avatar1"
              name="child_avatar"
              value="./../assets/cute_visitors.svg"
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
              value="./../assets/fluffy_visitors.svg"
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
              value="./../assets/prickly_visitors.svg"
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
              value="./../assets/creepy_crawly_visitors.svg"
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
