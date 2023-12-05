import React, {useState, useEffect} from "react";
import {Row, Col} from "reactstrap";
import MediumCard from "./MediumCard";
const MediumArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@AryanVora"
    )
      .then((res) => res.json())
      .then((data) => setArticles(data.items));
  }, []);

  return (
    <Row>
      {articles.map((article, index) => (
        <Col key={index}>
          <MediumCard article={article} />
        </Col>
      ))}
    </Row>
  );
};

export default MediumArticles;
