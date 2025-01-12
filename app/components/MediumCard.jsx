import React from "react";
import styles from "./MediumCard.module.css";

const MediumCard = ({ article }) => {
  // Function to extract the first 300 characters and remove anything within < >, and finish the last word
  const formatDescription = (text) => {
    let cleanText = text.slice(0, 2500).replace(/<[^>]*>/g, "");
    if (text.length > 2500) {
      const lastSpaceIndex = cleanText.lastIndexOf(" ");
      cleanText = cleanText.slice(0, lastSpaceIndex) + "...";
    }
    return cleanText;
  };

  //function to retrieve thumbnail from description ]
  //it should look for src=\"https:// ... and end with \"
  const getThumbnail = (text) => {
    const regex = /src="(https:\/\/[^"]+)"/;
    const match = text.match(regex);
    if (match) {
      return match[1];
    }
    return null;
  };

  return (
    <div className={styles.card}>
      <img
        src={getThumbnail(article.description)}
        alt="Article"
        className={styles.articleImage}
      />
      <div className={styles.textSection}>
        <a
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.title}
        >
          {article.title}
        </a>
        <p className={styles.date}>{article.pubDate}</p>
        <p className={styles.description}>
          {formatDescription(article.description)}
        </p>
      </div>
    </div>
  );
};

export default MediumCard;
