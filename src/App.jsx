import React from "react";
import "./Layout/index.css";
import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import { LoginTree } from "./Layout/Login.styled";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AdultProfile from "./AdultProfile";
import ChildProfile from "./ChildProfile";
import Auth from "./Auth";
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
      {/* // <div className="container" style={{ padding: "50px 0 100px 0" }}> */}

      <Router>
        <Switch>
          <Route exact path="/me-tree" component={MeTree} />
          <Route path="/login" component={Auth} />
          <Route path="/adult-profile" component={AdultProfile} />
          <Route path="/child-profile" component={ChildProfile} />
          <Route path="/whose-playing" component={WhosePlaying} />

          {!session ? (
            <LoginTree>
              <Auth />
            </LoginTree>
          ) : (
            <AdultProfile key={session.user.id} session={session} />
          )}
        </Switch>
      </Router>
      {/* // </div> */}
    </>
  );
}

// export default App;
