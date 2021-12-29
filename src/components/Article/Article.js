import { ArticleContainer, ArticleImg, ButtonCart } from "./Article.Style";
import IconLeft from "./img/left-icon.svg";

export default function Article({ articleImg, name }) {
  return (
    <ArticleContainer>
      <ArticleImg src={articleImg} alt='img' />
      <h2>{name}</h2>
      <ButtonCart
        to={{
          pathname: `/${name}`,
        }}>
        Shop now <img src={IconLeft} alt='icon arrow left' />
      </ButtonCart>
    </ArticleContainer>
  );
}
