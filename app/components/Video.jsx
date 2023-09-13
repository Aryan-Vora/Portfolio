import React from "react";
import PropTypes from "prop-types";
import styles from "./Tile.module.css";

function Video({ name, imageSrc, link, viewtype }) {
  return (
    <div className={styles.tile}>
      <h2>{name}</h2>
      <iframe
        className={styles.video}
        src={imageSrc}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
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

Video.propTypes = {
  name: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  viewtype: PropTypes.string.isRequired,
};

export default Video;
