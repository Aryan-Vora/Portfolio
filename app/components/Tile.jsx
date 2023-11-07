import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Tile.module.css";

function Tile({ name, imageSrc, link }) {
  const [currentImage, setCurrentImage] = useState(null);
  const [isSlideshow, setIsSlideshow] = useState(
    Array.isArray(imageSrc) && imageSrc.length > 1
  );
  const [imageCount, setImageCount] = useState(0);

  // Function to go to the next image in slideshow
  const nextImage = () => {
    setImageCount((prev) => (prev + 1) % imageSrc.length);
  };

  // Effect to handle the slideshow
  useEffect(() => {
    if (isSlideshow) {
      setCurrentImage(imageSrc[imageCount]);
      const intervalId = setInterval(nextImage, 3000); // Set interval for slideshow

      return () => clearInterval(intervalId); // Clear interval when unmounting
    }
  }, [imageCount, imageSrc, isSlideshow]);

  // Initial setup for current image
  useEffect(() => {
    setCurrentImage(isSlideshow ? imageSrc[0] : imageSrc);
  }, [imageSrc, isSlideshow]);

  // Render function
  const renderContent = () => {
    if (isSlideshow) {
      return (
        <div className={styles.slideshow}>
          <img src={currentImage} className={styles.slide} alt={name} />
        </div>
      );
    } else {
      return <img className={styles.slide} src={currentImage} alt={name} />;
    }
  };

  return (
    <div className={styles.tile}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {name}
        {renderContent()}
      </a>
    </div>
  );
}

Tile.propTypes = {
  name: PropTypes.string.isRequired,
  imageSrc: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  link: PropTypes.string.isRequired,
};

export default Tile;
