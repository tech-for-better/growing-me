import React from "react";
import "./Layout/index.css";
import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import { LoginTree } from "./Layout/Login.styled";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/Auth";

// react-dnd
import { render } from "react-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import AdultProfile from "./AdultProfile";
import ChildProfile from "./ChildProfile";
import MagicLinkLogIn from "./MagicLinkLogIn";
import { PrivateRoute } from "./components/PrivateRoute";
import Signup from "./Signup";
import Login from "./Login";
import { MeTree } from "./MeTree";
import Gallery from "./Gallery";
import Content from "./Content";
import { getGalleryData, getAllData } from "../database/model";
import useRemoteState from "../utils/useRemoteState";
import { load, update } from './MeTree'

export default function Home() {
  const [session, setSession] = useState(null);
  const [state, setState] = useRemoteState({ load, update });
  console.log('STATE in app', state)

  // const [galleryImage, setGalleryImage] = useState([]);
  // console.log("galleryImage in app", galleryImage);

  // get adult/child names + meTree data from db and render to page once on firstRender/re-load?
  // useEffect(() => {
  //   async function getImages() {
  //     try {
  //       let data = await getGalleryData();
  //       console.log("data from getName: ", data);

  //       if (data) {
  //         console.log("gallery data in app", data);
  //         setGalleryImage(data.images);
  //       }
  //     } catch (error) {
  //       console.error(error.message);
  //     } finally {
  //     }
  //   }
  //   getImages();
  // }, []); // only runs on first render

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/signup">
              <LoginTree>
                <Signup />
              </LoginTree>
            </Route>

            <Route path="/login">
              <LoginTree>
                <Login />
              </LoginTree>
            </Route>

            <Route path="/magic-link-login">
              <LoginTree>
                <MagicLinkLogIn />
              </LoginTree>
            </Route>

            <PrivateRoute
              exact
              path="/"
              render={() => {
                return (
                  <DndProvider backend={HTML5Backend}>
                    <MeTree
                      // setGalleryImage={setGalleryImage}
                      // galleryImage={galleryImage}
                    />
                  </DndProvider>
                );
              }}
            />

            <PrivateRoute
              path="/adult-profile"
              render={() => <AdultProfile />}
              // comp={AdultProfile}/>
            />
            <PrivateRoute
              path="/child-profile"
              render={() => <ChildProfile />}
              // comp={ChildProfile} />
            />
            <PrivateRoute
              path="/gallery"
              // comp={WhosePlaying} />
              render={() => (
                <Gallery
                  state={state}
                  setState={setState}
                  // galleryImage={galleryImage}
                  // setGalleryImage={setGalleryImage}
                />
              )}
            />
            <PrivateRoute
              path="/content"
              render={() => <Content />}
              // comp={Content}/>
            />

            {/* {!session ? (
              <LoginTree>
                <Signup />
                <MagicLinkLogIn />
              </LoginTree>
            ) : (
              <AdultProfile key={session.user.id} session={session} />
            )} */}
          </Switch>
        </AuthProvider>
      </Router>
      {/* <LoginTree>
        <Signup />
        <MagicLinkLogIn /> */}
      {/* </LoginTree> */}
    </>
  );
}
