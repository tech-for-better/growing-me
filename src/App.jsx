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

function MeTreeProvider({ children }) {
  const [state, setState] = useRemoteState({ load, update });
  return (
    <MeTreeContext.Provider value={{ state, setState }}>
      {children}
    </MeTreeContext.Provider>
  );
}

export async function load() {
  console.log("load - about to get all data");
  const data = await getAllData();
  console.log("load get all data", data);
  return data;
}

export async function update(changedData) {
  // TODO: update the right bit of the DB using the `changedData` object
  // just has to return a promise (resolved value isn't used)

  console.log("changedData in update fn in MeTree comp:", changedData);
  return await setData(changedData);
}

export default function Home() {
  const [session, setSession] = useState(null);
  const [state, setState] = useRemoteState({ load, update });
  console.log("STATE in app", state);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  if (!session)
    return (
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
          </Switch>{" "}
        </AuthProvider>
      </Router>
    );
  return (
    <>
      <Router>
        <AuthProvider>
          {/* <MeTreeContext.Provider value={{ state, setState }}> */}
          <MeTreeProvider>
            <Switch>
              {/* <Route path="/signup">
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
                </Route> */}

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
            {/* </MeTreeContext.Provider> */}
          </MeTreeProvider>
        </AuthProvider>
      </Router>
      {/* <LoginTree>
        <Signup />
        <MagicLinkLogIn /> */}
      {/* </LoginTree> */}
    </>
  );
}
