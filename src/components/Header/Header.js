import { Button } from "../../styles/Buttons.Style";
import { NewProductSpan } from "../../styles/Text.Style";
import { HeaderWrapper, HeaderContainer, HeaderData, HeaderImg } from "./Header.Style";
import ImgHeader from "./img/img-header.png";

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderData>
          <NewProductSpan color='#898989'>New product</NewProductSpan>
          <h1>XX99 Mark II Headphones</h1>
          <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          <Button to='/headphones'>See Product</Button>
        </HeaderData>
        <HeaderImg src={ImgHeader} alt='header img' />
      </HeaderContainer>
    </HeaderWrapper>
  );
}
