import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import db from "../../firebase";
import { ProductContainer, ProductImgContainer, ProductImg, ProductData } from "../../components/Product/Product.Style";
import { NewProductSpan, TitleProduct, TextStyle } from "../../styles/Text.Style";
import { Price, ContainerCart, Infos } from "./ProductDetail.Style";
import { Button, ButtonBack } from "../../styles/Buttons.Style";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import Alert from "../../components/Alert/Alert";

export default function ProductDetail() {
  const [product, setProduct] = useState({});
  const [nbProduct, setNbProduct] = useState(1);
  const [error, setError] = useState(false);

  const location = useLocation();
  const dispatch = useDispatch();

  const productCategory = location.state.productCategory;
  const idProduct = location.state.idProduct;

  /* Handle DOM Infos */
  const addInfos = useRef();
  let timerInfo;
  let display = true;

  /* Get Product by id */
  const getProduct = onSnapshot(doc(db, productCategory, idProduct), (doc) => {
    setProduct({ ...doc.data(), id: doc.id });
  });

  /* Update product quantity by input number */ 
  const updateQuantity = (e) => {
    if (e.target.value <= 0) {
      setError(true);
    }

    setNbProduct(Number(e.target.value));
  };

  /* Add Product to cart */
  const addToCart = (e) => {
    e.preventDefault();

    const itemAdded = {
      ...product,
      quantity: nbProduct,
    };

    dispatch({
      type: "ADDITEM",
      payload: itemAdded,
    });

    addInfos.current.style.display = "block";

    if (display) {
      display = false;
      timerInfo = setTimeout(() => {
        addInfos.current.style.display = "none";
        display = true;
      }, 1000);
    }
  };

  useEffect(() => {
    return () => {
      clearTimeout(timerInfo);
    };
  }, []);

  return (
    <>
      {error && <Alert setError={setError} />}
      <ProductContainer margin='20rem 0 16rem'>
        <ButtonBack to={`/${productCategory}`}>Go Back</ButtonBack>
        <ProductImgContainer margin='9.5rem 0 0 0'>
          <ProductImg src={product.image} alt='product' />
        </ProductImgContainer>
        <ProductData>
          <NewProductSpan color='#D87D4A'>New Product</NewProductSpan>
          <TitleProduct>{product.name}</TitleProduct>
          <TextStyle margin='3rem 0'>{product.desc}</TextStyle>
          <Price>$ {product.price}</Price>
          <ContainerCart>
            <input type='number' defaultValue='1' min='1' onChange={updateQuantity} />
            <Button to='/' onClick={addToCart}>
              Add to cart
            </Button>
            <Infos ref={addInfos}>Produit ajouté au panier !</Infos>
          </ContainerCart>
        </ProductData>
      </ProductContainer>
    </>
  );
}
