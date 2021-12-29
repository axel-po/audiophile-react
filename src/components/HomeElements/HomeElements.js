import { HomeElementsWrapper, Title, Description, ElementOne, ElementTwo, ElementThree, ElementFour } from "./HomeElements.Style";
import { Button } from "../../styles/Buttons.Style";
import img1 from "./img/image-speaker-zx9.png";

export default function HomeElements() {
  return (
    <HomeElementsWrapper>
      <ElementOne>
        <img src={img1} alt='' />
        <div>
          <Title color='white' size='5.9rem'>
            ZX9 SPEAKER
          </Title>
          <Description>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</Description>
          <Button to='/speakers' bg='black'>
            See product
          </Button>
        </div>
      </ElementOne>
      <ElementTwo>
        <div>
          <Title color='black' mb='3.2rem'>
            Zx7 speakers
          </Title>
          <Button to='/speakers'  bg='black'>See product</Button>
        </div>
      </ElementTwo>
      <ElementThree />
      <ElementFour>
        <div>
          <Title color='black' mb='3.2rem'>
            Yx1 Earphones
          </Title>
          <Button to='/earphones'  bg='black'>See product</Button>
        </div>
      </ElementFour>
    </HomeElementsWrapper>
  );
}
