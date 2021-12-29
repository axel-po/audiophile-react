import { useState, useEffect } from "react";
import { useContext } from "react";
import { Overlay } from "../../styles/Overlay.Style";
import { useRef } from "react";
import {
  ShoppingCartContainer,
  Flex,
  ButtonRemove,
  CartWrapper,
  CartContainer,
  CartImg,
  CartInfos,
  CartQuantity,
  TitleCart,
  Price,
  TitleNotProduct,
} from "./ShoppingCart.Style";
import { Button } from "../../styles/Buttons.Style";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { CartContext } from "../../context/CartContext";
import useExistProduct from "../../utils/useExistProduct";

export default function ShoppingCart() {
  const { setToggleCart } = useContext(CartContext);
  const storeState = useSelector((state) => state);

  const dispatch = useDispatch();
  let totalItems = 0;
  let totalPrice = 0;

  /* Test if cart is empty */
  const existProducts = useExistProduct();

  /* Case Delete products */
  const removeProducts = () =>
    dispatch({
      type: "DELETEITEMS",
    });

  /* Case update products */
  const handleChange = (event, id) => {
    const indexItem = storeState.cart.findIndex((obj) => obj.id === id);

    const objUpdate = {
      ...storeState.cart[indexItem],
      quantity: Number(event.target.value),
    };

    dispatch({
      type: "UPDATEITEM",
      payload: objUpdate,
    });
  };

  /* Handle Total Price and quantity */
  if (storeState.cart.length !== 0) {
    for (const item of storeState.cart) {
      const itemPrice = item.price * item.quantity;
      totalPrice += itemPrice;
    }
  }

  for (const item of storeState.cart) {
    totalItems += item.quantity;
  }

  /* close modal when click outside */
  const cartRef = useRef();

  const closeModalCart = (e) => {
    if (cartRef.current === e.target) {
      setToggleCart(false);
    }
  };

  return (
    <>
      <Overlay ref={cartRef} onClick={closeModalCart}>
        <ShoppingCartContainer>
          <Flex>
            <h3>Cart ({totalItems})</h3>
            {existProducts && <ButtonRemove onClick={removeProducts}>Remove all</ButtonRemove>}
          </Flex>

          {existProducts ? (
            <>
              <CartWrapper>
                {storeState.cart.map((product) => (
                  <CartContainer key={product.id}>
                    <div>
                      <CartImg>
                        <img src={product.image} alt='' />
                      </CartImg>
                      <CartInfos>
                        <h2>{product.name}</h2>
                        <p>$ {product.price}</p>
                      </CartInfos>
                    </div>
                    <CartQuantity>
                      <input type='number' value={product.quantity} min='1' max='30' onChange={(e) => handleChange(e, product.id)} />
                    </CartQuantity>
                  </CartContainer>
                ))}
              </CartWrapper>

              <Flex>
                <TitleCart>Total</TitleCart>
                <Price>$ {totalPrice}</Price>
              </Flex>
              <Button width='100%' margin='2.4rem 0 0' to='/checkout' onClick={() => setToggleCart(false)}>
                Checkout
              </Button>
            </>
          ) : (
            <TitleNotProduct>Votre panier est vide.</TitleNotProduct>
          )}
        </ShoppingCartContainer>
      </Overlay>
    </>
  );
}
