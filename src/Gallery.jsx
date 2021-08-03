import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import { Link } from "react-router-dom";

export default function Gallery({ session }) {
  return (
    <div className="form-widget">
      <p>
        Go to <Link to="/me-tree">MeTree</Link>
        <Link to="/whose-playing"> whose </Link>
        <Link to="/child-profile">child </Link>
        <Link to="/login">login </Link>
        <Link to="/">adult </Link>
      </p>
    </div>
  );
}
