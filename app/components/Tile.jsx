import React from "react";
import PropTypes from "prop-types";
import styles from "./Tile.module.css";

function Tile({ name, imageSrc, link }) {
  return (
    <div className={styles.tile}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {name}
        <img className={styles.slide} src={imageSrc} alt={name} />
      </a>
    </div>
  );
}

Tile.propTypes = {
  name: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  link: PropTypes.string,
};

export default Tile;
