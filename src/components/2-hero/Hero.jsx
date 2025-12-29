import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";

const Hero = () => {
  const lottieRef = useRef();

  return (
    <section className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="/me-modified (2).png"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          Full Stack Developer | Crafting Elegant & Interactive Web Experiences
        </motion.h1>

        <p className="sub-title">
          I’m Abdallah Khodairy, a Junior Full Stack Web Developer based in
          Egypt. I build responsive and user-centered web applications using
          HTML5, CSS3, JavaScript, and React.js, with a strong foundation in
          frontend development and a growing focus on backend technologies. I’m
          currently developing and practicing backend development using Node.js,
          Express.js, and Nest.js, building RESTful APIs and integrating them
          with frontend applications to create complete, end-to-end solutions. I
          enjoy writing clean, maintainable code and continuously improving my
          skills by working on real projects and learning best practices in
          modern web development.
        </p>

        <div className="display-disktop all-icons flex">
          <a
            href="/Abdallah-Khodairy-Resume.pdf"
            target="_blank"
            rel="noreferrer"
            title="Open CV"
          >
            <FontAwesomeIcon icon={faFile} size="1x" color="inherit" />
          </a>

          <a
            href="https://api.whatsapp.com/send/?phone=201281235360&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noreferrer"
            title="Connect me"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>

          <a
            href="https://github.com/Khodairy"
            target="_blank"
            rel="noreferrer"
            title="github"
          >
            <div className="icon icon-github"></div>
          </a>

          <a
            href="https://www.linkedin.com/in/abdalla-khodairy-94b345244/"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
          >
            <div className="icon icon-linkedin"></div>
          </a>
        </div>

        <div className="display-mobile all-icons flex">
          <a
            href="/Abdallah-Khodairy-Resume.pdf"
            target="_blank"
            rel="noreferrer"
            title="Open CV"
          >
            <button>
              <FontAwesomeIcon icon={faFile} size="1x" color="inherit" />
              <span style={{ marginLeft: "5px" }}>Open CV</span>
            </button>
          </a>

          <a
            href="https://api.whatsapp.com/send/?phone=201281235360&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noreferrer"
            title="Connect me"
          >
            <button>
              <i className="fa-brands fa-whatsapp"></i>
              <span style={{ marginLeft: "10px" }}>Contact Me</span>
            </button>
          </a>

          <a
            href="https://github.com/Khodairy"
            target="_blank"
            rel="noreferrer"
            title="github"
          >
            <button>
              <div className="icon icon-github"></div>
              GitHub
            </button>
          </a>

          <a
            href="https://www.linkedin.com/in/abdalla-khodairy-94b345244/"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
          >
            <button>
              <div className="icon icon-linkedin"></div>
              LinkedIN
            </button>
          </a>
        </div>
      </div>

      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
