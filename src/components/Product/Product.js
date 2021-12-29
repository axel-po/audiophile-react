import { ProductContainer, ProductImgContainer, ProductImg, ProductData } from "./Product.Style";
import { NewProductSpan, TitleProduct, TextStyle } from "../../styles/Text.Style";
import { Button } from "../../styles/Buttons.Style";
import { useLocation } from "react-router";

export default function Product({ id, image, newProduct, name, desc }) {
  const location = useLocation();
  const productCategory = location.pathname.replace("/", "");

  return (
    <ProductContainer margin='7rem 0'>
      <ProductImgContainer>
        <ProductImg src={image} alt={`product ${name}`} />
      </ProductImgContainer>
      <ProductData>
        {newProduct && <NewProductSpan color='#D87D4A'>New Product</NewProductSpan>}
        <TitleProduct>{name}</TitleProduct>
        <TextStyle margin='3rem 0'>{desc}</TextStyle>
        <Button to={`/product-details/${id}`} state={{ productCategory, idProduct: id }}>
          See product
        </Button>
      </ProductData>
    </ProductContainer>
  );
}
