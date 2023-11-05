import React from "react";
import PropTypes from "prop-types";
import styles from "./Tile.module.css";
function Tile({ name, imageSrc, link }) {
  return (
    <div className={styles.tile}>
      {link ? (
        <a target="_blank" href="link">
          {name}
        </a>
      ) : (
        <a>{name}</a>
      )}
      <img className={styles.slide} src={imageSrc} alt={name}></img>
    </div>
  );
}

Tile.propTypes = {
  name: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  link: PropTypes.string,
};

export default Tile;
