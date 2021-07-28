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
import WhosePlaying from "./WhosePlaying";
import Content from "./Content";

export default function Home() {
  const [session, setSession] = useState(null);

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
              exact path="/"
              render={() => {
                return (
                  <DndProvider backend={HTML5Backend}>
                  <MeTree />
                </DndProvider>
                )}
              } />

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
              path="/whose-playing"
              // comp={WhosePlaying} />
              render={() => <WhosePlaying />}
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
