import { useState } from "react";
import { ArticlesContainer } from "./Articles.Style";
import Article from "../Article/Article";
import img1 from "./img/img-1.png";
import img2 from "./img/img-2.png";
import img3 from "./img/img-3.png";

export default function Articles({ margin = "16rem 0" }) {
  const [articles, setArticles] = useState([
    { id: 1, articleImg: img1, name: "headphones" },
    { id: 2, articleImg: img2, name: "speakers" },
    { id: 3, articleImg: img3, name: "earphones" },
  ]);

  return (
    <ArticlesContainer margin={margin}>
      {articles.map((article) => (
        <Article key={article.id} articleImg={article.articleImg} name={article.name} />
      ))}
    </ArticlesContainer>
  );
}
