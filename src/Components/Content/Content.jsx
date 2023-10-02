import React, {useRef} from "react";
import "../../Styles/Content.css";
import MiddleContent from "./MiddleContent";

const Content = () => {
  const containerRef = useRef(null);
  
  const handleScroll = (section) => {
    containerRef.current.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    });
  };
  return (
    <div className="content-container">
      <div className="left-container">
        <div className="sticky-container">
          <h3>Content</h3>
          <button onClick={()=>handleScroll(document.getElementById("section1"))}>
            <p>How to make resume?</p>
          </button>

          <ol>
            <li>
              <button onClick={()=>handleScroll(document.getElementById("section2"))}>Pick the Right Resume Format</button>
              <ul>
                <li>
                  <button onClick={()=>handleScroll(document.getElementById("section3"))}>Fix Your Resume Layout</button>
                </li>
                <li>
                  <button onClick={()=>handleScroll(document.getElementById("section4"))}>
                    Want to Save Time? Use a (Free) Resume Template
                  </button>
                </li>
              </ul>
            </li>
            <li>
              <button onClick={()=>handleScroll(document.getElementById("section5"))}>Add Your Contact Information</button>
            </li>
            <li>
              <button onClick={()=>handleScroll(document.getElementById("section6"))}>Write a Resume Headline (Summary or Objective)</button>
            </li>
          </ol>
        </div>
      </div>
      <MiddleContent containerRef = {containerRef} />
      <div className="right-container">
        <div className="sticky-container">
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
    </div>
  );
};

export default Content;
