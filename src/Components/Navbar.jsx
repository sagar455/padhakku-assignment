import React from "react";
import "../Styles/Navbar.css";
import CompanyLogo from "../Assets/Company_Logo.jpeg";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/system";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-side">
        <button className="logo-btn">
          <img className="logo" src={CompanyLogo} alt="Logo" />
        </button>
      </div>
      <div className="right-side">
        <a className="nav-links" href="#">
          All Articles
        </a>
        <a className="nav-links" href="#">
          Resume & CV Writing
        </a>
        <a className="nav-links" href="#">
          Articles
        </a>
        <a className="nav-links" href="#">
          Examples
        </a>
        <CustomMenuIcon />
      </div>
    </div>
  );
};

export default Navbar;

const CustomMenuIcon = styled(MenuIcon)`
  display: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;
