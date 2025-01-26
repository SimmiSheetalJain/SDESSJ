import React from "react";
import styles from "./About.module.css";
import Sheetal from "../../assets/about/Sheetal.jpg";
import { FaArrowRight } from "react-icons/fa";
import TextColorChange from "../TextColorChange";

const About = () => {
  return (
    <div className={`${styles.About} lg:px-32`}>
      <div className="flex flex-row text-blue-200 mt-4 items-center gap-2">
        <h1 className="text-[30px] font-bold md:text-[40px] lg:text-[35px]">About Me</h1>
        <div className="border-b-4 border-solid border-blue-100 p-1 w-16"></div>
      </div>
      <div className="container w-full h-[80vh] flex flex-col items-center gap-3  mt-5 mb-20 lg:flex-row lg:justify-between lg:mt-2">
        <div className="data w-full lg:w-[60%]">
          <div className="pg flex gap-2 text-blue-100 md:text-[25px]">
            &#187;
            <p className="text-[16px] flex flex-row items-start md:text-[25px] lg:text-[22px]">
              Master of Computer Applications in AIML -(2023-25), LNCT University, Bhopal 
            </p>
          </div>
          <div className="ug flex gap-2 text-blue-100 md:text-[25px]">
            &#187;
            <p className="text-[16px] flex flex-row items-start md:text-[25px] lg:text-[22px]">
              Bachelor of Computer Applications - ( 2018-21), Raja Balwant Singh
              College, Agra
            </p>
          </div>
          <div className="about">
            <p className="text-[15px] text-justify mt-3 md:text-[23px] lg:text-[20px]">
              Hi! I am Sheetal Jain. I am born and brought up in Agra, Uttar Pradesh. I completed my education upto Graduation From Agra. I have secured 93%tile in CAT2022 in QA, AIR816 in CMAT2022, 96%tile in MHMBA-CET2022, AIR1064 in NIMCET2023(Scored in 2 months Preparation), 90%tile in XAT2024.I have also been Smart India Hackathon(2024) Finalist. 
            </p>
            <p className="text-[15px] text-justify mt-3 md:text-[23px] lg:text-[20px]">
            I am currently pursuing my MCA With Artificial Intelligence and Machine Learning Specialization from LNCT University, Bhopal, Madhya Pradesh. I have been Selected as System Engineer in Infosys. Currenttly Doing my trainning from Infosys Global Corporate Hub, Mysuru.
            </p>
            <p className="text-[15px] text-justify mt-3 md:text-[23px] lg:text-[20px]">
            I have a deep interested in AI, ML, DL, and GenAI. I have worked on Project Like Deepfake Detection Tool, AI-embeded SEO Analyzer, AYUSH StartUp Registration Portal.  
            </p>
            <p className="text-[15px] text-justify mt-3 md:text-[23px] lg:text-[20px]">
              I have qualified GATE DA 2025 with AIR ______. The GATE Attempt expanded my knowledge stack and allowed me to explore AIML & DL in deep. 
            </p>
          </div>
        </div>
        <div>
          <img className="w-[120px] md:w-[180px] lg:w-[270px] mt-5" src={Sheetal} alt="Profile" />
          <h1 className="text-[30px] font-bold md:text-[40px] lg:text-[35px] text-center">Sheetal Jain</h1>
        </div>
      </div>
    </div>
  );
};

export default About;


// border-2 border-solid border-green-500
// border-2 border-solid border-yellow-400