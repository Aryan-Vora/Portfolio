import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import MediumCard from "./MediumCard";
import styles from "./MediumCard.module.css";

const MediumArticles = () => {
  const [articles, setArticles] = useState([]);
  const [visibleArticles, setVisibleArticles] = useState(3);
  const [error, setError] = useState(false);
  const MAX_ARTICLES = 3;

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@AryanVora"
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status !== "ok" || !data.items) {
          throw new Error("Failed to fetch articles");
        }
        const filteredArticles = data.items.filter(
          (article) =>
            !article.title.includes("Know Your Audience") &&
            !article.title.includes("Clarity Over Conciseness")
        );
        setArticles(filteredArticles);
      })
      .catch((err) => {
        console.error("Error fetching Medium articles:", err);
        setError(true);
      });
  }, []);

  if (error) {
    return null;
  }

  const showMore = () => {
    setVisibleArticles((prev) => Math.min(prev + 3, MAX_ARTICLES));
  };

  return (
    <div>
      {articles.slice(0, visibleArticles).map((article, index) => (
        <MediumCard key={index} article={article} />
      ))}
      <div className={styles.buttonContainer}>
        {visibleArticles < Math.min(articles.length, MAX_ARTICLES) ? (
          <button className={styles.showMoreButton} onClick={showMore}>
            Show More
          </button>
        ) : (
          <a
            href="https://medium.com/@AryanVora"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.showMoreButton}
          >
            Visit My Blog
          </a>
        )}
      </div>
    </div>
  );
};

export default MediumArticles;
