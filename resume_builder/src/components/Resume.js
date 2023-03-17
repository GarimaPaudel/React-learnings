import React from "react";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Header from "./Header";
function Resume({resume}){
    return(
        <>
        <div className="bg-gray-300">
           
        <Header />
        <Skills skills={resume.skills}/>
        <Education education={resume.education}/>
        <Experience experience={resume.experience}/>
        </div>
        </>

       
    )
}
export default Resume;