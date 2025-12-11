import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { FaFigma, FaBootstrap } from "react-icons/fa";
import MaterialUILogo from "../../assets/icons/material-ui.svg";

import { SiMongodb, SiTailwindcss, SiTypescript } from "react-icons/si";

import "./skills.css";

const skills = [
  { name: "HTML5", icon: <FaHtml5 />, color: "#E44D26", level: 100 },
  { name: "CSS3", icon: <FaCss3Alt />, color: "#264de4", level: 95 },
  { name: "JavaScript", icon: <FaJsSquare />, color: "#F7DF1E", level: 75 },
  { name: "React.js", icon: <FaReact />, color: "#61DBFB", level: 90 },
  { name: "TailwindCSS", icon: <SiTailwindcss />, color: "#38BDF8", level: 70 },
  { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3", level: 80 },
  {
    name: "Material UI",
    icon: (
      <img
        src={MaterialUILogo}
        alt="Material UI"
        style={{ width: "32px", height: "32px" }}
      />
    ),
    color: "#0081CB",
    level: 90,
  },
  { name: "Node.js", icon: <FaNodeJs />, color: "#68A063", level: 20 },
  { name: "MongoDB", icon: <SiMongodb />, color: "#4DB33D", level: 10 },

  { name: "Git", icon: <FaGitAlt />, color: "#F1502F", level: 90 },
  {
    name: "GitHub",
    icon: <FaGithub className="skill-icon github-icon" />,
    color: "#fff",
    level: 90,
  },
  { name: "Figma", icon: <FaFigma />, color: "#F24E1E", level: 70 },
];

export default function Skills() {
  return (
    <section className="skills-container">
      <h2 className="skills-title">Skills & Technologies</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="skill-icon" style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <p className="skill-name">{skill.name}</p>

            {/* Progress Bar */}
            <div className="skill-bar">
              <div
                className="skill-bar-fill"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>

            {/* النسبة تحت البار */}
            <div className="skill-level">{skill.level}%</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
