import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ marginRight: "0.5rem" }}>
        <Link to="apps/remote">Remote</Link>
      </div>
      <Link to="apps/remote/1">Remote with param</Link>
    </div>
  );
};

export default Home;
