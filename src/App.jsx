import React from "react";
import "./index.css";
import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import Auth from "./Auth";
import Account from "./Account";
import { LoginTree } from "./Layout/Login.styled";

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
      {!session ? (
        <LoginTree>
          <Auth />
        </LoginTree>
      ) : (
        <Account key={session.user.id} session={session} />
      )}
      {/* // </div> */}
    </>
  );
}

// export default App;
