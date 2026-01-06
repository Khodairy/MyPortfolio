import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
          Frontend Engineer | Specialized in React.js & Modern Web UIs
        </motion.h1>

        <p className="sub-title">
          I’m Abdallah Khodairy, a Frontend Developer based in Egypt with a
          passion for building high-performance, scalable, and visually stunning
          web applications. My core expertise is centered around React.js and
          the modern JavaScript ecosystem, where I focus on creating seamless
          user experiences and clean, maintainable code. To deliver truly
          integrated solutions, I leverage a solid foundation in Node.js and
          NestJS. This backend awareness allows me to architect front-end
          systems that sync perfectly with APIs, ensuring optimized data flow
          and robust application performance. I thrive on turning complex
          problems into intuitive digital interfaces.
        </p>

        <div className="display-disktop all-icons flex">
          <a
            href="/Abdallah_Khodairy_Resume.pdf"
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
            href="https://www.linkedin.com/in/abdallah-khodairy/"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
          >
            <div className="icon icon-linkedin"></div>
          </a>
        </div>

        <div className="display-mobile all-icons flex">
          <a
            href="/Abdallah_Khodairy_Resume.pdf"
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
            href="https://www.linkedin.com/in/abdallah-khodairy/"
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
