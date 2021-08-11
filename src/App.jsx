import React from "react";
import "./Layout/index.css";
import { useState, useEffect, createContext } from "react";
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
import { getGalleryData, getAllData, setData } from "../database/model";
import useRemoteState from "../utils/useRemoteState";
// import { load, update } from "./MeTree";

export const MeTreeContext = createContext();

export async function load() {
  const user = supabase.auth.user();
  console.log('user i n load fn', user);
  console.log("load - about to get all data");
  const data = await getAllData();
  console.log("load get all data", data);
  return data;
}

export async function update(changedData) {

  console.log("changedData in update fn in MeTree comp:", changedData);
  return await setData(changedData);
}

export default function Home() {
  const [session, setSession] = useState(null);

  const user = supabase.auth.user();
  console.log("user in home fn", user);

  const [state, setState] = useRemoteState({ load, update });
  console.log("STATE in app", state);

  console.log("user in home fn AFTER useRemote", user);

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
          <MeTreeContext.Provider value={{ state, setState }}>
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
          </MeTreeContext.Provider>
        </AuthProvider>
      </Router>
      {/* <LoginTree>
        <Signup />
        <MagicLinkLogIn /> */}
      {/* </LoginTree> */}
    </>
  );
}
