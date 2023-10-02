import React from "react";
import "../../Styles/Content.css";
import MiddleContent from "./MiddleContent";

const Content = () => {
  return (
    <div className="content-container">
      <div className="left-container">
        <h3>Content</h3>
        <p>How to make resume?</p>
        <ol>
          #
          <li>
            {" "}
            Pick the Right Resume Format{" "}
            <ul>
              <li>Fix Your Resume Layout</li>
              <li>Want to Save Time? Use a (Free) Resume Template</li>
            </ul>
          </li>
          #<li>Add Your Contact Information</li>
          #<li>Write a Resume Headline (Summary or Objective)</li>
        </ol>
      </div>
      <MiddleContent />
      <div className="right-container">
        <h3>Share this article</h3>
        <div className="social-icons">
          <div className="container1">
            <p>linekdin</p>
            <p>Twiter</p>
          </div>
          <div className="container2">
            <p>Whatapp</p>
            <p>Email</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
