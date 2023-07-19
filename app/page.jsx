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
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>

      <div id="home" className={styles.cardgenBox}>
        <div className={styles.boxContent}>
          <h1 className={`${roboto.className}`}>Full-Stack Developer</h1>
          <p>
            Hey there! I'm Aryan Vora, a full-stack developer based in Santa
            Cruz, CA.{" "}
          </p>
          <div className={styles.resume}>
            <a href="https://github.com/Aryan-Vora" className="mr-10">
              <img className={styles.icon} src="github-icon.svg"></img>{" "}
            </a>
            <a href="resume.pdf">
              <img
                className={styles.icon}
                src="resume.png"
                rel="noreferrer noopener"
                title="Resume"
                target="_blank"
              ></img>{" "}
            </a>
          </div>

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
              <li></li>
            </ul>
            <ul>
              <img src="java.png" className="mr-4 mt-2"></img>
              <img src="python.png" className="mr-4 mt-2"></img>
              <img src="C.svg" className="mr-4 mt-2"></img>
              <img src="git.svg" className="mr-4 mt-2"></img>
              <img src="unix.png" className="mr-4 mt-2"></img>
            </ul>
          </div>
        </div>
        <div className={styles.boxContent}>
          <img src="facecropped.png" className={styles.card}></img>
        </div>
      </div>
      <hr></hr>
      <div className={styles.cardgenBox}>
        <div className={styles.boxContent}>
          <img src="croppeddesk.jpg" className={styles.card}></img>
        </div>
        <div className={styles.boxContent}>
          <h2 className={styles.subheader}>About Me</h2>
          <p>
            Motivated and accomplished computer science student with a passion
            for full-stack development and a background in project leadership,
            hackathons, and tutoring. Seeking opportunities to leverage my
            skills in full-stack development, and other technologies to
            contribute to innovative projects and make a positive impact in the
            field of software development.
          </p>
        </div>
      </div>
      <hr></hr>
      <div className={styles.cardgenBox} id="projects">
        <div className={styles.boxContent}>
          <h2 className={styles.subheader}>Projects</h2>
          <h3 className={styles.mobileprojectheader}> Platformer Game</h3>

          <iframe
            className={styles.project}
            src="https://www.youtube.com/embed/GY6nHimEWpA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div className={styles.desktop}>
            <div className={styles.skills}>
              <ul>
                View Code:
                <li>
                  <a href="https://github.com/Aryan-Vora/Platformer">
                    {" "}
                    <img src="github-icon.svg"></img>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.boxContent}>
          <div className={styles.mobile}>
            <h3> Platformer Game</h3>
            <p>
              This game is fully complete with multiple levels, music, and sound
              effects to enhance the overall gaming experience. By leveraging
              the Processing (Java) framework, I ensured smooth graphics
              rendering and responsive controls, creating a seamless and
              enjoyable gameplay environment.
            </p>
            <div className={styles.skills}>
              <ul>
                View Source Code:
                <li>
                  <a href="https://github.com/Aryan-Vora/Platformer">
                    {" "}
                    <img src="github-icon.svg"></img>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

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
