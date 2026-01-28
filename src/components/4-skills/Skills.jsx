import React from "react";
import { motion } from "framer-motion";

// أيقونات FA
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaBootstrap,
  FaServer,
} from "react-icons/fa";
import { SiExpress } from "react-icons/si";

// أيقونات SI
import {
  SiNestjs,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import MaterialUILogo from "../../assets/icons/material-ui.svg";

import "./skills.css";

const skills = [
  { name: "HTML5", icon: <FaHtml5 />, color: "#E44D26", level: "Proficient" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "#264de4", level: "Proficient" },
  {
    name: "JavaScript",
    icon: <FaJsSquare />,
    color: "#F7DF1E",
    level: "Proficient",
  },
  {
    name: "React.js",
    icon: <FaReact />,
    color: "#61DBFB",
    level: "Proficient",
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss />,
    color: "#38BDF8",
    level: "Proficient",
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap />,
    color: "#7952B3",
    level: "Proficient",
  },
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
    level: "Proficient",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    color: "#68A063",
    level: "Proficient",
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    color: "currentColor",
    level: "Proficient",
  },
  { name: "Nest.js", icon: <SiNestjs />, color: "#E0234E", level: "Familiar" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#4DB33D", level: "Proficient" },

  { name: "Git", icon: <FaGitAlt />, color: "#F1502F", level: "Proficient" },
  {
    name: "GitHub",
    icon: <FaGithub className="skill-icon github-icon" />,
    color: "#fff",
    level: "Proficient",
  },
  { name: "Figma", icon: <FaFigma />, color: "#F24E1E", level: "Familiar" },
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
                style={{ color: "var(--blue)", marginTop: "5px" }}
              >
                {skill.level}
              </div>
            </div>

            {/* النسبة تحت البار */}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
