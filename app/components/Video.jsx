import React from "react";
import PropTypes from "prop-types";
import styles from "./Tile.module.css";

function Video({ name, imageSrc, link }) {
  return (
    <div className={styles.tile}>
      {link ? (
        <a target="_blank" href="link">
          {name}
        </a>
      ) : (
        <a>{name}</a>
      )}{" "}
      <iframe
        className={styles.video}
        src={imageSrc}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

Video.propTypes = {
  name: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  link: PropTypes.string,
};

export default Video;
