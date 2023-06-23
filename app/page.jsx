import styles from "./page.module.css";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: ["900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});
import { Mulish } from "next/font/google";
const mulish = Mulish({
  weight: ["500"],
  subsets: ["latin"],
  variable: "--font-mulish",
});
export default function Home() {
  return (
    <main className={`${mulish.className}`}>
      <div id="home" className={styles.cardgenBox}>
        <div className={styles.boxContent}>
          <h1 className={`${roboto.className}`}>Full-Stack Web Developer</h1>
          <p>
            Hey there! I'm Aryan Vora, a full-stack web developer based in Santa
            Cruz, CA.{" "}
          </p>
          <a href="https://github.com/Aryan-Vora">
            <img className={styles.icon} src="github-icon.svg"></img>{" "}
          </a>
          <div className={styles.skills}>
            <ul>
              Skills
              <li>
                <img src="html-5.svg"></img>
              </li>
              <li>
                <img src="css-3.svg"></img>
              </li>
              <li>
                <img src="javascript.svg"></img>
              </li>
              <li>
                <img src="react.svg"></img>
              </li>
              <li>
                <img id="about" src="nextjs-icon.svg"></img>
              </li>
            </ul>
          </div>
        </div>
        <img src="facecropped.png" className={styles.card}></img>
      </div>
      <hr></hr>
      <div className={styles.cardgenBox}>
        <img src="croppeddesk.jpg" className={styles.card}></img>

        <div className={styles.boxContent}>
          <h2 className={styles.subheader}>About Me</h2>
          <p>
            Motivated and accomplished computer science student with a passion
            for front-end development and a background in project leadership,
            hackathons, and tutoring. Seeking opportunities to leverage my
            skills in web development, and other technologies to contribute to
            innovative projects and make a positive impact in the field of
            software development.
          </p>
        </div>
      </div>
      <hr></hr>
      <div id="projects" className={styles.cardgenBox}>
        <div className={styles.boxContent}>
          <h2 className={styles.subheader}>Projects</h2>
        </div>
      </div>
      <div className={styles.footer}>
        <h1 className={`${roboto.className}`}>Aryan Vora</h1>
        <div className={styles.footerDescription}>
          <p>
            A full-stack Web Developer seeking opportunities to leverage my
            skills to contribute to innovative projects
          </p>
        </div>
      </div>
    </main>
  );
}
