"use client";
import styles from "./page.module.css";
import { Roboto } from "next/font/google";
import { useState } from "react";
import { useEffect } from "react";
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
  const [images, setImages] = useState([
    "ClassBoosterHome.png",
    "ClassBooster.png",
    "ClassBoosterDash.png",
  ]);
  const [imageName, setImageName] = useState(images[0]);

  const [imageCount, setImageCount] = useState(0);
  function nextImage() {
    setImageCount((previousState) => previousState + 1);
    console.log(imageCount);

    if (imageCount > images.length - 2) {
      setImageCount(0);
    }
    setImageName(images[imageCount]);
  }
  function prevImage() {
    setImageCount((previousState) => previousState - 1);
    console.log(imageCount);
    if (imageCount < 1) {
      setImageCount(images.length - 1);
    }
    setImageName(images[imageCount]);
  }
  useEffect(() => {
    nextImage();
  }, []);

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
            Hey there! I'm Aryan Vora, a full-stack developer based in Fremont,
            CA.{" "}
          </p>
          <div className={styles.resume}>
            <a href="https://github.com/Aryan-Vora" className="mr-10">
              <img className={styles.icon} src="github-icon.svg"></img>{" "}
            </a>
            <a href="https://docs.google.com/document/d/1qmtQNpSrnrLX3E5e06g5YrIpJ8rbYwXaHMIDvM1xs68/edit?usp=sharing">
              <img
                className={styles.icon}
                src="resume.png"
                rel="noreferrer noopener"
                title="Resume"
                target="_blank"
              ></img>{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/aryan-vora-71a856187/"
              className="ml-10"
            >
              <img className={styles.icon} src="linkedin.svg"></img>{" "}
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
          <img src="facecropped.png" className={styles.face}></img>
        </div>
      </div>
      <hr></hr>
      <h2 id="about" className={styles.subheader}>
        About Me
      </h2>
      <div className={styles.shift}>
        <div className={styles.cardgenBox}>
          <div className={styles.boxContent}>
            <img src="croppeddesk.jpg" className={styles.card}></img>
          </div>
          <div className={styles.boxContent}>
            <p className={styles.description}>
              Motivated and accomplished computer science student at UC Santa
              Cruz with a passion for full-stack development and a background in
              project leadership, hackathons, and tutoring. Seeking
              opportunities to leverage my skills in full-stack development, and
              other technologies to contribute to innovative projects and make a
              positive impact in the field of software development.
            </p>
          </div>
        </div>
      </div>
      <hr></hr>
      <h2 id="projects" className={styles.subheader}>
        Projects
      </h2>
      <div className={styles.tiles}>
        <div className={styles.tile}>
          <h2> Platformer</h2>
          <iframe
            className={styles.video}
            src="https://www.youtube.com/embed/GY6nHimEWpA"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className={styles.skills}>
            <ul>
              <a href="https://github.com/Aryan-Vora/Platformer"> View Code:</a>
              <li>
                <a href="https://github.com/Aryan-Vora/Platformer">
                  {" "}
                  <img src="github-icon.svg"></img>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.tile}>
          <h2> ClassBooster</h2>
          <div className={styles.slideshow}>
            <img src={imageName} className={styles.slide}></img>
            <button onClick={prevImage} className={styles.buttonRight}>
              &#10094;
            </button>
            <button onClick={nextImage} className={styles.buttonLeft}>
              &#10095;
            </button>
          </div>

          <div className={styles.skills}>
            <ul>
              <a href="https://github.com/Aryan-Vora/Platformer"> View Code:</a>
              <li>
                <a href="https://github.com/anshgupta1234/WHS-CS-Classbooster">
                  {" "}
                  <img src="github-icon.svg"></img>
                </a>
              </li>
            </ul>
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
