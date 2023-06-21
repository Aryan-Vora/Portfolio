import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.topnav}>
        <a rel="noopener" target="_self" href="#home">Home</a>
        <a rel="noopener" target="_self" href="#about">About</a>
        <a rel="noopener" target="_self" href="#projects">Projects</a>
        <a rel="noopener" target="_self" href="mailto:voraaryan1@gmail.com">Contact</a>
      </div>
      <div id="home"className={styles.cardgenBox}>
        
        <div className={styles.boxContent}>
            <h1>Full-Stack Web Developer</h1>
            <p>Hey there! I'm Aryan Vora, a full-stack developer based in Santa Cruz, CA. </p>
            <a href="https://github.com/Aryan-Vora"><img src="github-icon.svg"></img> </a>
            <div className={styles.techStack}>
            <ul>Tech Stack |
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
      <hr ></hr>
      <div className={styles.cardgenBox2}>
      <img src="croppeddesk.jpg" className={styles.card2}></img>

        <div className={styles.boxContent}>
              <h2>About Me</h2>
              <p className={styles.longDescription}>Motivated and accomplished computer science student with a passion for front-end development and a background in project leadership, hackathons, and tutoring. Seeking opportunities to leverage my skills in web development, and other technologies to contribute to innovative projects and make a positive impact in the field of software development.
 </p>
        </div>
      </div>
      <hr></hr>
      <div id="projects"className={styles.cardgenBox3}>

        <div className={styles.boxContent}>
              <h2>Projects</h2>
        </div>
      </div>
    </main>
  )
}
