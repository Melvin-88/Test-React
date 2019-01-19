import React from "react";
import "./Header.scss";

export const HeaderDisplay = ({ logOut, user }) => (
  <header>
    {user && user.name ? <span>{user.name}</span> : null}
    <button
      onClick={() => {
        logOut();
      }}
      className="btn btn-blue"
    >
      Logout
    </button>
  </header>
);
