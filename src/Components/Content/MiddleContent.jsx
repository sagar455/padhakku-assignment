import React from "react";
import "../../Styles/Content.css";
import SubSection from "../../Assets/sub-section-img1.png";
import SubSectionImg2 from "../../Assets/sub-section-img2.png";

const MiddleContent = () => {
  return (
    <div className="middle-container">
      <div className="section">
        <p className="intro-content">
          For most job-seekers, a good resume is what stands between a dream job
          and Choice D. Get your resume right, and you’ll be getting replies
          from every other company you apply to.
          <br /><br /> If your resume game is weak, though, you’ll end up sitting
          around for weeks, maybe even months, before you even get a single
          response.
          <br /><br /> So you’re probably wondering how you can write a resume that
          leads to HR managers inviting you to interviews daily. <br /><br /> Well,
          you’ve come to the right place In this guide, we’re going to teach you
          everything you need to know about how to make a resume, including:
        </p>
        <h3 className="section-heading">
          ✅ How to Write a Resume in 9 Steps:
        </h3>
        <div className="pointers-section">
          <ol>
            <li>Pick the Right Resume Format & Layout</li>
            <li>Mention Your Personal Details & Contact Information</li>
            <li>Use a Resume Summary or Objective</li>
            <li>List Your Work Experience & Achievements</li>
            <li>Mention Your Top Soft & Hard Skills</li>
            <li>
              Include Additional Resume Sections (Languages, Hobbies, etc.)
            </li>
            <li>Tailor Your Information For the Job Ad</li>
            <li>Craft a Convincing Cover Letter</li>
            <li>Proofread Your Resume and Cover Letter</li>
          </ol>
        </div>
        <p>
         <i> New to resume-making? Give our resumes 101 video a watch before diving
          into the article!</i>
        </p>
        <iframe
          src="https://www.youtube.com/embed/KD_oQk0zxsU?si=uU9dbnonRevCyR4J"
         className="video"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <div className="sub-section">
          <h3 className="sub-section-heading">
            How to Make a Resume (The Right Way!)
          </h3>
          <img src={SubSection} alt="img" />
          <h3>Fix Your Resume Layout</h3>
          <p>
            With formatting out of the way, let’s discuss your resume’s layout.
            After all, the layout is the first thing a job recruiter notices
            about your resume. <br />
            Does it look organized or cluttered? Is it too short or too long? Is
            it boring and easy to ignore, or is it reader-friendly and
            attention-grabbing?
            <br /> Here are some of the best practices when it comes to your
            resume layout:
          </p>
          <h3 className="section-heading"> ✅ Resume Layout Must-Haves</h3>
          <div className="pointers-section">
            <ol>
              <li>
                One page in length. You should only go for 2 pages if you
                really, really believe that it’ll add significant value. HR
                managers in big firms get around 1,000+ resumes per month.
                They’re not going to spend their valuable time reading your life
                story!
              </li>
              <li>
                Ample white space, especially around the margins. Without the
                right amount of white space, your resume will end up looking
                overcrowded with information
              </li>
              <li>
                Easy-to-read font. We’d recommend sticking to what stands out,
                but not too much. Do: Ubuntu, Roboto, Overpass, etc. Don’t
                (ever): Comic Sans
              </li>
              <li>
                Readable font size. As a rule of thumb, go for 11-12 pt for
                normal text and 14-16 pt for section titles.
              </li>
              <li>
                PDF file type. Always save your resume as a PDF file. Although
                Word is a popular alternative, it has a good chance of messing
                up your resume formatting.
              </li>
            </ol>
          </div>
          <img src={SubSectionImg2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MiddleContent;
