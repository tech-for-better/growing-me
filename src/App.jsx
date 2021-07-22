import React from "react";
import "./Layout/index.css";
import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import { LoginTree } from "./Layout/Login.styled";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/Auth";

import AdultProfile from "./AdultProfile";
import ChildProfile from "./ChildProfile";
import MagicLinkLogIn from "./MagicLinkLogIn";
import { PrivateRoute } from "./components/PrivateRoute";
import Signup from "./Signup";
import Login from "./Login";
import MeTree from "./MeTree";
import WhosePlaying from "./WhosePlaying";

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
            <PrivateRoute exact path="/" component={MeTree} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/magic-link-login" component={MagicLinkLogIn} />
            <PrivateRoute path="/adult-profile" component={AdultProfile} />
            <PrivateRoute path="/child-profile" component={ChildProfile} />
            <PrivateRoute path="/whose-playing" component={WhosePlaying} />

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
