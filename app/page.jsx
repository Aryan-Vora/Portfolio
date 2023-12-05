"use client";
import styles from "./page.module.css";
import {Roboto} from "next/font/google";
import {Mulish} from "next/font/google";
import Tile from "./components/Tile";
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
  return (
    <main className={`${mulish.className}`}>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <div className={styles.top}></div>
      <div id="home" className={styles.cardgenBox}>
        <div className={styles.boxContent}>
          <h1 className={`${roboto.className}`}>Full-Stack Developer</h1>
          <p>
            Hey there! I'm Aryan Vora, a full-stack developer based in Fremont,
            CA.{" "}
          </p>
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

          <div className={styles.skills}>
            <ul>
              Skills
              <li>
                <img src="python.svg"></img>
              </li>
              <li>
                <img src="javascript.svg"></img>
              </li>
              <li>
                <img src="java.svg"></img>
              </li>
              <li>
                <img src="C.svg"></img>
              </li>
              <li>
                <img src="react.svg"></img>
              </li>
              <li>
                <img src="html-5.svg"></img>
              </li>
              <li>
                <img src="css-3.svg"></img>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr></hr>
      <h2 id="about" className={styles.subheader}>
        About Me
      </h2>
      <div className={styles.shift}>
        <div className={styles.cardgenBox}>
          <div className={styles.boxContent}>
            <p className={styles.description}>
              Motivated and accomplished computer science student at UC Santa
              Cruz with a passion for full-stack development. Seeking
              opportunities to leverage my skills in full-stack development, and
              other technologies to contribute to innovative projects and make a
              positive impact in the field of software development.
            </p>
          </div>
          <div className={styles.boxContent2}>
            <img src="croppeddesk.jpg" className={styles.card}></img>
          </div>
        </div>
      </div>
      <hr></hr>
      <h2 id="projects" className={styles.subheader}>
        Projects
      </h2>
      <div className={styles.shift2}>
        <div className={styles.tiles}>
          <Tile
            name="Receipt Scanner"
            imageSrc="receipt-scanner.png"
            link="https://www.squeezeestore.com/"
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
          <Tile name="Price Compare API" imageSrc="explorations.png" link="" />
          <Tile
            name="AI Notetaker"
            imageSrc="Notetaker.png"
            link="https://github.com/Aryan-Vora/Notetaker"
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
      <hr></hr>
    </main>
  );
}
