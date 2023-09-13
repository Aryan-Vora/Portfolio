import React from "react";
import PropTypes from "prop-types";
import styles from "./Tile.module.css";

function Tile({ name, imageSrc, link, viewtype }) {
  return (
    <div className={styles.tile}>
      <h2>{name}</h2>
      <img className={styles.slide} src={imageSrc} alt={name}></img>

      <div className={styles.skills}>
        <ul>
          <li>
            <a target="_blank" href={link}>
              View {viewtype}:
            </a>
          </li>
          <li>
            <a target="_blank" href={link}>
              <img src="github-icon.svg" alt="GitHub Icon"></img>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

Tile.propTypes = {
  name: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  viewtype: PropTypes.string.isRequired,
};

export default Tile;
