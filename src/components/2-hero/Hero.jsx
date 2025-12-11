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
          Front-End Developer, UI Web Designer, and Creative Thinker.
        </motion.h1>

        <p className="sub-title">
          I’m Abdullah Khoudary, a passionate Front-End Developer and web
          designer based in Egypt. I specialize in crafting responsive,
          user-centered web experiences using React.js and modern JavaScript
          frameworks. I love blending creativity with clean code to bring ideas
          to life and build digital solutions that make people’s lives easier.
          Currently, I’m expanding my skills into backend development with
          Node.js, and soon I’ll be a full-stack MERN developer, ready to build
          end-to-end web applications.
        </p>

        <div className="all-icons flex">
          <a
            href="/public/Abdullah-Khoudary-Resume.pdf"
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
            title="Connect me via wattsApp"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>

          <a
            href="https://github.com/Khodairy"
            target="_blank"
            rel="noreferrer"
            title="Open my github profile"
          >
            <div className="icon icon-github"></div>
          </a>

          <a
            href="https://www.linkedin.com/in/abdalla-khodairy-94b345244/"
            target="_blank"
            rel="noreferrer"
            title="Open my LinkedIn profile"
          >
            <div className="icon icon-linkedin"></div>
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
