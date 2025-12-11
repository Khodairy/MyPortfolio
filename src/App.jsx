import Hero from "./components/2-hero/Hero";
import Header from "./components/1-header/Header";
import Main from "./components/3-main/Main";
import Skills from "./components/4-skills/Skills";
import Contact from "./components/5-contact/Contact";
import Footer from "./components/6-footer/Footer";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setshowScrollBTN(true);
      } else {
        setshowScrollBTN(false);
      }
    });
  }, []);

  const [showScrollBTN, setshowScrollBTN] = useState(false);
  return (
    <div id="up" className="container">
      {/* Header */}
      <Header />

      {/* Hero / About Section */}
      <section id="about">
        <Hero />
      </section>

      <div className="divider" />

      {/* Main / Projects Section */}
      <section id="projects">
        <Main />
      </section>

      <div className="divider" />

      {/* Skills Section */}
      <section id="skills">
        <Skills />
      </section>

      <div className="divider" />

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>

      <div className="divider" />

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <a
        style={{ opacity: showScrollBTN ? 1 : 0, transition: "1s" }}
        href="#up"
      >
        <button className="icon-keyboard_arrow_up scroll2Top"></button>
      </a>
    </div>
  );
}

export default App;
