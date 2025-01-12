"use client";
import styles from "./page.module.css";
import { Roboto } from "next/font/google";
import { Mulish } from "next/font/google";
import Tile from "./components/Tile";
import { useState } from "react";
import MediumArticles from "./components/MediumArticles";
const roboto = Roboto({
  weight: ["900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});
const mulish = Mulish({
  weight: ["500"],
  subsets: ["latin"],
  variable: "--font-mulish",
});
export default function Home() {
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <main className={`${mulish.className}`}>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <div className={styles.top}></div>
      <div id="home" className={styles.cardgenBox}>
        <div className={styles.boxContent}>
          <h1 className={`${roboto.className}`}>Hi, I'm Aryan Vora</h1>
          <p>Full-stack developer based in Fremont, CA. </p>
          <div className={styles.resume}>
            <a
              href="https://github.com/Aryan-Vora"
              className="mr-10"
              target="_blank"
            >
              <img className={styles.icon} src="github-icon.svg"></img>{" "}
            </a>
            <a href="latexresume.pdf" target="_blank">
              <img
                className={styles.icon}
                src="resume.png"
                rel="noreferrer noopener"
                title="Resume"
                target="_blank"
              ></img>{" "}
            </a>
            <a
              href="https://medium.com/@AryanVora"
              className="ml-10"
              target="_blank"
            >
              <img className={styles.icon} src="medium.png"></img>{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/aryanvora1/"
              className="ml-10"
              target="_blank"
            >
              <img className={styles.icon} src="linkedin.png"></img>{" "}
            </a>
          </div>
        </div>
      </div>
      <hr></hr>
      <h2 id="about" className={styles.subheader}>
        About Me
      </h2>
      <div className={styles.about}>
        <p className={showMore ? styles.showMore : styles.showLess}>
          Hello! I’m a student at the University of California, Santa Cruz,
          working towards a B.S. in Computer Science. I’m on track to graduate
          early in June 2025 and am excited to explore opportunities in
          full-stack development and related fields.
          <br /> <br />
          I’m passionate about building dynamic and impactful software
          solutions. My interests lie in full-stack development, where I enjoy
          creating seamless user experiences and robust backend systems. I
          thrive on working collaboratively and am eager to contribute to
          projects that are part of something bigger— whether that means solving
          real-world problems or creating innovative tools that make life
          easier.
          <br /> <br />
          I have experience working on full-stack projects and am always excited
          to learn and experiment with new technologies. I’m currently looking
          for summer internships or job opportunities where I can contribute to
          a motivated team, develop my technical skills, and tackle meaningful
          challenges.
          <br /> <br />
          When I’m not coding, you can find me at the gym, playing pickleball or
          volleyball, or gaming with friends. I love staying active and am
          always up for trying something new. I’m looking forward to connecting
          with others who share a passion for building cool things and making an
          impact!
        </p>
        <button className={styles.toggleButton} onClick={toggleShowMore}>
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
      <h2 id="projects" className={styles.subheader}>
        Projects
      </h2>
      <div className={styles.shift2}>
        <div className={styles.tiles}>
          <Tile
            name="BiteRight"
            imageSrc="biteright.png"
            link="https://biteright.co/"
          />
          <Tile
            name="Hand Tracking (Research)"
            imageSrc="handtracking.png"
            link="https://github.com/Aryan-Vora/handTrackingArvora/tree/main"
          />
          <Tile
            name="Receipt Scanner"
            imageSrc="receipt-scanner.png"
            link="https://github.com/Aryan-Vora/SqueezeeReceiptScanner"
          />
          <Tile
            name="Pokernow Extension"
            imageSrc="pokernow.png"
            link="https://chromewebstore.google.com/detail/pokernow-assistant/kbaibgafcamlpfbhklaigpgemgoifdfe?authuser=1"
          />
          <Tile name="Emulator" imageSrc="111emulator.png"></Tile>
          <Tile
            name="AI Notetaker"
            imageSrc="Notetaker.png"
            link="https://github.com/Aryan-Vora/Notetaker"
          />
          <Tile
            name="ClassBooster"
            imageSrc={[
              "ClassBoosterHome.png",
              "ClassBooster.png",
              "ClassBoosterDash.png",
            ]}
            link="https://github.com/anshgupta1234/WHS-CS-ClassBooster"
          />
          <Tile
            imageSrc="platformer.png"
            name="Platformer"
            link="https://github.com/Aryan-Vora/Platformer"
          />{" "}
          <Tile
            name="Price Compare Scraper"
            imageSrc="explorations.png"
            link="https://github.com/Aryan-Vora/Price-Compare"
          />
        </div>
      </div>
      <hr></hr>
      <h2 id="blog" className={styles.subheader}>
        My Blog
      </h2>
      <MediumArticles />

      <div className={styles.footer}>
        <h1 className={`${roboto.className}`}>Aryan Vora</h1>
        <div className={styles.footerDescription}>
          <p>
            A full-stack developer seeking opportunities to leverage my skills
            to contribute to innovative projects
          </p>
        </div>
      </div>
    </main>
  );
}
