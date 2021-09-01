import React from "react";
import "./Layout/index.css";
import { useState, useEffect, createContext } from "react";
import { supabase } from "./supabaseClient";
import { LoginTree } from "./Layout/Login.styled";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/Auth";

// react-dnd
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
import Content from "./Activities/Content";
import { getAllData, setData } from "../database/model";
import useRemoteState from "../utils/useRemoteState";
import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

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
  // Update the right bit of the DB using the `changedData` object
  // just has to return a promise (resolved value isn't used)
  return await setData(changedData);
}

export default function Home() {
  const [session, setSession] = useState(null);

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
            <Route
              exact
              path="/"
              render={() => {
                return (
                  <LoginTree>
                    <Login />
                  </LoginTree>
                );
              }}
            />
            <Route path="/signup">
              <LoginTree>
                <Signup />
              </LoginTree>
            </Route>

            <Route path="/magic-link-login">
              <LoginTree>
                <MagicLinkLogIn />
              </LoginTree>
            </Route>
          </Switch>
        </AuthProvider>
      </Router>
    );
  return (
    <>
      <Router>
        <AuthProvider>
          <MeTreeProvider>
            <Switch>
              <PrivateRoute
                exact
                path="/"
                render={() => {
                  return (
                    <DndProvider backend={HTML5Backend}>
                      <ErrorBoundary
                        FallbackComponent={ErrorFallback}
                        onReset={() => {
                          // reset the state of your app so the error doesn't happen again
                        }}
                      >
                        <MeTree />
                      </ErrorBoundary>
                    </DndProvider>
                  );
                }}
              />
              <PrivateRoute
                path="/adult-profile"
                render={() => <AdultProfile />}
              />
              <PrivateRoute
                path="/child-profile"
                render={() => <ChildProfile />}
              />
              <PrivateRoute path="/gallery" render={() => <Gallery />} />
              <PrivateRoute path="/content" render={() => <Content />} />
            </Switch>
          </MeTreeProvider>
        </AuthProvider>
      </Router>
    </>
  );
}
