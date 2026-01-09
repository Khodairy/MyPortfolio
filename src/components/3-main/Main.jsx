import { useState } from "react";
import "./main.css";
import { myProjects } from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub, FaLink } from "react-icons/fa";

const Main = () => {
  const [currentActive, setCurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  // حالة Read More لكل بطاقة
  const [showMoreArr, setShowMoreArr] = useState({});

  const handleClick = (buttonCategory) => {
    setCurrentActive(buttonCategory);

    const newArr = myProjects.filter((item) =>
      item.category.includes(buttonCategory)
    );

    setArr(newArr);
  };

  const toggleReadMore = (key) => {
    setShowMoreArr((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const getFirstWords = (text, count) => {
    const words = text.trim().split(" ");
    return (
      words.slice(0, count).join(" ") + (words.length > count ? "..." : "")
    );
  };

  return (
    <main className="flex">
      {/* ================= Left Section Buttons ================= */}
      <section className="flex left-section">
        <button
          onClick={() => {
            setCurrentActive("all");
            setArr(myProjects);
          }}
          className={currentActive === "all" ? "active" : ""}
        >
          all projects
        </button>

        <button
          onClick={() => handleClick("css")}
          className={currentActive === "css" ? "active" : ""}
        >
          HTML & CSS
        </button>

        <button
          onClick={() => handleClick("js")}
          className={currentActive === "js" ? "active" : ""}
        >
          JavaScript
        </button>

        <button
          onClick={() => handleClick("react")}
          className={currentActive === "react" ? "active" : ""}
        >
          React & MUI
        </button>

        <button
          onClick={() => handleClick("node")}
          className={currentActive === "node" ? "active" : ""}
        >
          Node & Express
        </button>
      </section>

      {/* ================= Right Section Cards ================= */}
      <section className="flex right-section">
        <AnimatePresence>
          {arr.map((item) => (
            <motion.article
              layout
              initial={{ transform: "scale(0.4)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ type: "spring", damping: 8, stiffness: 50 }}
              key={item.imgPath}
              className="card"
            >
              <a href={item.pathLink} target="_blank" rel="noopener noreferrer">
                <img width={266} src={item.imgPath} alt={item.projectTitle} />
              </a>

              <div style={{ width: "266px" }} className="box">
                <h1 className="title">{item.projectTitle}</h1>

                {/* -------- Read more logic -------- */}
                <p className="sub-title">
                  {showMoreArr[item.imgPath]
                    ? item.info
                    : getFirstWords(item.info, 5)}
                </p>

                <button
                  className="read-more-btn"
                  onClick={() => toggleReadMore(item.imgPath)}
                >
                  {showMoreArr[item.imgPath] ? "Less..." : "More..."}
                </button>
                {/* -------- End Read more -------- */}

                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <a
                      href={item.pathLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLink className="icon-link" />
                    </a>
                    <a
                      href={item.gitHubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="icon-github" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
