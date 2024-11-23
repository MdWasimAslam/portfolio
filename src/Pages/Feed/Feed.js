import React from "react";
import Hero from "../../Components/Hero";
import "./Feed.css";
import Header from "../../Components/Header";

const Feed = () => {
  return (
    <div className="primary-layout">
      <Header />
      <div className="primary-content">
      <Hero />
      </div>
    </div>
  );
};

export default Feed;
