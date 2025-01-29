import React from "react";
import styles from "./About.module.css";
import Sheetal from "../../assets/about/Sheetal.jpg";
import { FaArrowRight } from "react-icons/fa";
import TextColorChange from "../TextColorChange";

import { FaGithubSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SiKaggle } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { CiInstagram } from "react-icons/ci";
import { SiGeeksforgeeks } from "react-icons/si";
import { FaQuora } from "react-icons/fa";

const About = () => {
  return (
    <div className={`${styles.About} lg:px-32`}>
      <div className="flex flex-row text-blue-200 mt-4 items-center gap-1">
        <h1 className="text-[15px] font-bold md:text-[40px] lg:text-[35px]">
          About Me
        </h1>
        <div className="border-b-4 border-solid border-blue-100 p-1 w-16"></div>
      </div>
      <div className="container w-full h-[80vh] flex flex-col items-center gap-3  mt-5 mb-20 lg:flex-row lg:justify-between lg:mt-2">
        <div className="data w-full lg:w-[60%]">
          <div className="pg flex gap-2 text-blue-100 md:text-[25px]">
            &#187;
            <p className="text-[12px] flex flex-row items-start md:text-[25px] lg:text-[22px]">
              Master of Computer Applications in AIML -(2023-25), LNCT
              University, Bhopal
            </p>
          </div>
          <div className="ug flex gap-2 text-blue-100 md:text-[25px]">
            &#187;
            <p className="text-[12px] flex flex-row items-start md:text-[25px] lg:text-[22px]">
              Bachelor of Computer Applications - ( 2018-21), Raja Balwant Singh
              College, Agra
            </p>
          </div>
          <div className="about">
            <p className="text-[11px] text-justify mt-3 md:text-[23px] lg:text-[20px]">
              Hi! I am Sheetal Jain. I am born and brought up in Agra, Uttar
              Pradesh. I completed my education upto Graduation From Agra. I
              have secured 93%tile in CAT2022 in QA, AIR816 in CMAT2022, 96%tile
              in MHMBA-CET2022, AIR1064 in NIMCET2023(Scored in 2 months
              Preparation), 90%tile in XAT2024.I have also been Smart India
              Hackathon(2024) Finalist.
            </p>
            <p className="text-[11px] text-justify mt-3 md:text-[23px] lg:text-[20px]">
              I am currently pursuing my MCA With Artificial Intelligence and
              Machine Learning Specialization from LNCT University, Bhopal,
              Madhya Pradesh. I have been Selected as System Engineer in
              Infosys. Currenttly Doing my trainning from Infosys Global
              Corporate Hub, Mysuru.
            </p>
            <p className="text-[11px] text-justify mt-3 md:text-[23px] lg:text-[20px]">
              I have a deep interested in AI, ML, DL, and GenAI. I have worked
              on Project Like Deepfake Detection Tool, AI-embeded SEO Analyzer,
              AYUSH StartUp Registration Portal.
            </p>
            {/* <p className="text-[15px] text-justify mt-3 md:text-[23px] lg:text-[20px]">
              I have qualified GATE DA 2025 with AIR ______. The GATE Attempt
              expanded my knowledge stack and allowed me to explore AIML & DL in
              deep.
            </p> */}
          </div>
        </div>
        {/* <div>
          <img className="w-[120px] md:w-[180px] lg:w-[270px] mt-5" src={Sheetal} alt="Profile" />
          <h1 className="text-[30px] font-bold md:text-[40px] lg:text-[35px] text-center">Sheetal Jain</h1>
        </div> */}
        <div>
          <div>
            <p className="text-[16px] md:text-[24px] font-bold border-b-4 border-blue-500 pb-3">
              Find Me Elsewhere
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 mt-5 gap-4 text-[40px]">
              <a
                href="https://www.linkedin.com/in/sheetal-jain-0030001b5/"
                target="_blank"
                className="flex justify-center hover:text-[#03fcc6]"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/SimmiSheetalJain"
                target="_blank"
                className="flex justify-center hover:text-[#03fcc6]"
              >
                <FaGithubSquare />
              </a>
              <a
                href="https://leetcode.com/u/SheetalSimmiJain/"
                target="_blank"
                className="flex justify-center hover:text-[#03fcc6]"
              >
                <SiLeetcode />
              </a>
              <a
                href="https://www.geeksforgeeks.org/user/sheetaljainladoo11/"
                target="_blank"
                className="flex justify-center hover:text-[#03fcc6]"
              >
                <SiGeeksforgeeks />
              </a>
              <a
                href="https://www.kaggle.com/sheetalsimmijain"
                target="_blank"
                className="flex justify-center hover:text-[#03fcc6]"
              >
                <SiKaggle />
              </a>
              <a
                href="https://www.quora.com/profile/Simmi-Sheetal-Jain?ch=2&oid=761484891&srid=gn2pU&target_type=user"
                target="_blank"
                className="flex justify-center hover:text-[#03fcc6]"
              >
                <FaQuora />
              </a>
              <a
                href="https://www.facebook.com/people/Sheetal-Jain/pfbid0iC9P5KydmSMHhZDBRpkn7iVD473gzQUaAntKbrafgK52xFgmPnpWXQSvVTKQamk7l/"
                target="_blank"
                className="flex justify-center hover:text-[#03fcc6]"
              >
                <FaFacebookSquare />
              </a>
              <a
                href="https://x.com/SheetalSimmi"
                target="_blank"
                className="flex justify-center hover:text-[#03fcc6]"
              >
                <FaSquareXTwitter />
              </a>
              <a
                href="https://www.youtube.com/channel/UC6c8iZ5p2v5XgLg-0mX141Q"
                target="_blank"
                className="flex justify-center hover:text-[#03fcc6]"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.instagram.com/simmi_sheetal_jain/"
                target="_blank"
                className="flex justify-center hover:text-[#03fcc6]"
              >
                <CiInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

// border-2 border-solid border-green-500
// border-2 border-solid border-yellow-400
