import React, { useState, useEffect } from "react";
import styles from "./Tile.module.css"; // Import the CSS file
import PropTypes from "prop-types";
function Slideshow({ name, link, imageSrc }) {
  const [imageCount, setImageCount] = useState(0);
  const [imageName, setImageName] = useState(imageSrc[0]);

  function nextImage() {
    setImageCount((previousState) => (previousState + 1) % imageSrc.length);
  }
  useEffect(() => {
    setImageName(imageSrc[imageCount]);
  }, [imageCount, imageSrc]);

  useEffect(() => {
    const intervalId = setInterval(nextImage, 3000); // Auto-advance every 3 seconds

    return () => {
      clearInterval(intervalId); // Clean up interval on component unmount
    };
  }, []);

  return (
    <div className={styles.tile}>
      <h2> {name}</h2>
      <div className={styles.slideshow}>
        <img src={imageName} className={styles.slide}></img>
      </div>
      <div className={styles.skills}>
        {link && (
          <ul>
            <li>
              <a target="_blank" href={link}>
                View Code:
              </a>
            </li>
            <li>
              <a target="_blank" href={link}>
                <img src="github-icon.svg" alt="GitHub Icon"></img>
              </a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
Slideshow.propTypes = {
  name: PropTypes.string.isRequired,
  imageSrc: PropTypes.array.isRequired,
  link: PropTypes.string,
};
export default Slideshow;
