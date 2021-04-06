import React from "react";
import { Link } from "react-router-dom";
import List from "./List";

const Home = () => {
  return (
    <div>
      <List type={"artists"} />
      <List type={"albums"} />
      <List type={"songs"} />
    </div>
  );
};

export default Home;
