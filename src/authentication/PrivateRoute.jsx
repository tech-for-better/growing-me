import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useAuth } from "./contexts/Auth";

export function PrivateRoute({ comp: Component, ...rest }) {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        // Renders the page only if `user` is present (user is authenticated)
        // Otherwise, redirect to the login page
        return user ? (
          Component ? (
            <Component {...props} />
          ) : (
            rest.render(props)
          )
        ) : (
          <Redirect to="/" />
        );
      }}
    ></Route>
  );
}
