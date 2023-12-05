import React from "react";
import styles from "./MediumCard.module.css";

const MediumCard = ({article}) => {
  // Function to extract the first 300 characters and remove anything within < >, and finish the last word
  const formatDescription = (text) => {
    let cleanText = text.slice(0, 2500).replace(/<[^>]*>/g, "");
    if (text.length > 2500) {
      const lastSpaceIndex = cleanText.lastIndexOf(" ");
      cleanText = cleanText.slice(0, lastSpaceIndex) + "...";
    }
    return cleanText;
  };

  return (
    <div className={styles.card}>
      <img
        src={article.thumbnail}
        alt="Article"
        className={styles.articleImage}
      />
      <div className={styles.textSection}>
        <h3 className={styles.title}>{article.title}</h3>
        <p className={styles.date}>{article.pubDate}</p>
        <p className={styles.description}>
          {formatDescription(article.description)}
        </p>
      </div>
    </div>
  );
};

export default MediumCard;
