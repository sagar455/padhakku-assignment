import React from 'react';
import "../Styles/Banner.css"
import BannerImg from "../Assets/banner.png"

const Banner = () => {
  return (
    <div className="banner">
        <h1 className='banner-heading'>How to Make a Resume in 2023 | Beginner's <br/> Guide</h1>
        <img className='banner-img' src={BannerImg} alt="" />
    </div>
  )
}

export default Banner