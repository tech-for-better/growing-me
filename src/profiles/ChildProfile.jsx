import React from "react";
import { useState } from "react";
import {cuteVisitor, pricklyVisitor, fluffyVisitor, creepyCrawlyVisitor }from "./../images/MeTreeImages";
import { ChildAvatar } from "../layout/ChildProfile.styled";

export default function ChildProfile({ session }) {
  const [childUsername, setChildUsername] = useState(null);
  const [child_avatar_url, setChildAvatarUrl] = useState(null);

  return (
    <div className="form-widget">
      <div>
        <label htmlFor="child_username">Child's Name</label>
        <input
          id="child_username"
          type="text"
          placeholder="What's your name?"
          value={childUsername || ""}
          onChange={(e) => setChildUsername(e.target.value)}
        />
      </div>

      <p>Choose your avatar:</p>
      <div>
        <input
          type="radio"
          id="child_avatar1"
          name="child_avatar"
          value={child_avatar_url || ""}
          onChange={(e) => setChildAvatarUrl(e.target.value)}
        />
        <label htmlFor="child_avatar1">
          <ChildAvatar src={cuteVisitor} alt="" />
        </label>

        <input
          type="radio"
          id="child_avatar2"
          name="child_avatar"
          value={child_avatar_url || ""}
          onChange={(e) => setChildAvatarUrl(e.target.value)}
        />
        <label htmlFor="child_avatar2">
          <ChildAvatar src={fluffyVisitor} alt="" />
        </label>

        <input
          type="radio"
          id="child_avatar3"
          name="child_avatar"
          value={child_avatar_url || ""}
          onChange={(e) => setChildAvatarUrl(e.target.value)}
        />
        <label htmlFor="child_avatar4">
          <ChildAvatar src={pricklyVisitor} alt="" />
        </label>
        <input
          type="radio"
          id="child_avatar4"
          name="child_avatar"
          value={child_avatar_url || ""}
          onChange={(e) => setChildAvatarUrl(e.target.value)}
        />
        <label htmlFor="child_avatar3">
          <ChildAvatar src={creepyCrawlyVisitor} alt="" />
        </label>
      </div>
    </div>
  );
}
