import { TestimonialsContainer, TestimonialsImg } from "./Testimonials.Style";
import { TextStyle, TitleProduct } from "../../styles/Text.Style";
import Img from "./img/testimonials-img.png";

export default function Testimonials() {
  return (
    <TestimonialsContainer>
      <div>
        <TitleProduct>
          Bringing you the <span style={{ color: "#D87D4A" }}>best</span> audio gear
        </TitleProduct>
        <TextStyle margin='3.2rem 0'>
          xLocated at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
        </TextStyle>
      </div>
      <TestimonialsImg>
        <img src={Img} alt='man test casque' />
      </TestimonialsImg>
    </TestimonialsContainer>
  );
}
