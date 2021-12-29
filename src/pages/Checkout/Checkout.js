import React, { useState, useEffect } from "react";
import { CheckoutWrapper, CheckoutContainer, Title, SpanInfos, FormCheckout, InputContainer, Label, InputForm } from "./Checkout.Style";
import { Button, ButtonBack } from "../../styles/Buttons.Style";
import {
  ShoppingCartContainer,
  Flex,
  Grid,
  CartWrapper,
  CartContainer,
  CartImg,
  CartInfos,
  CartQuantity,
  TitleCart,
  Price,
  TitleNotProduct,
} from "../../components/ShoppingCart/ShoppingCart.Style";
import { useSelector } from "react-redux";
import useDimension from "../../utils/useDimension";
import useExistProduct from "../../utils/useExistProduct";

export default function Checkout() {
  const storeState = useSelector((state) => state);

  /* Handle Total Price */
  let totalPrice = 0;
  if (storeState.cart.length !== 0) {
    for (const item of storeState.cart) {
      const itemPrice = item.price * item.quantity;
      totalPrice += itemPrice;
    }
  }

  /* Handle Style responsive of ShoppingCart */
  const browserWidth = useDimension();

  const style = {
    largeScreen: {
      position: "static",
      margin: "15.8rem 0",
      width: "100%",
      height: "min-content",
    },
    smallScreen: {
      position: "static",
      margin: "0 0 16rem",
      width: "100%",
      maxWidth: "none",
      height: "min-content",
    },
  };

  /* test if empty cart */
  const existProducts = useExistProduct();

  return (
    <>
      <ButtonBack to='/' top='11rem'>
        Go back
      </ButtonBack>

      <CheckoutWrapper>
        <CheckoutContainer>
          <Title>Checkout</Title>
          <SpanInfos margin='0 0 2rem'>billing details</SpanInfos>

          <FormCheckout>
            <InputContainer>
              <Label htmlFor='name'>Name</Label>
              <InputForm id='name' placeholder='Name' />
            </InputContainer>
            <InputContainer>
              <Label htmlFor='email'>Email Address</Label>
              <InputForm id='email' placeholder='Email' />
            </InputContainer>
            <InputContainer>
              <Label htmlFor='tel'> Phone Number</Label>
              <InputForm id='tel' placeholder='+1 202-555-0136' />
            </InputContainer>
          </FormCheckout>

          <SpanInfos>shipping ino</SpanInfos>
          <FormCheckout>
            <InputContainer col='1/-1'>
              <Label htmlFor='adress'>Adress</Label>
              <InputForm id='adress' placeholder='1137 Williams Avenue' />
            </InputContainer>
            <InputContainer>
              <Label htmlFor='zip'>ZIP Code</Label>
              <InputForm id='zip' placeholder='10001' />
            </InputContainer>
            <InputContainer>
              <Label htmlFor='city'>City</Label>
              <InputForm id='city' placeholder='New York' />
            </InputContainer>
            <InputContainer>
              <Label htmlFor='Country'>Country</Label>
              <InputForm id='Country' placeholder='United States' />
            </InputContainer>
          </FormCheckout>
        </CheckoutContainer>

        <ShoppingCartContainer style={browserWidth <= 1027 ? style.smallScreen : style.largeScreen}>
          <Flex>
            <h3>Summary</h3>
          </Flex>

          <CartWrapper>
            {storeState.cart.map((product) => (
              <CartContainer key={product.id}>
                <div>
                  <CartImg>
                    <img src={product.image} alt={product.name} />
                  </CartImg>
                  <CartInfos>
                    <h2>{product.name}</h2>
                    <p>$ {product.price}</p>
                  </CartInfos>
                </div>
                <CartQuantity>x{product.quantity}</CartQuantity>
              </CartContainer>
            ))}
          </CartWrapper>

          {existProducts ? (
            <>
              <Grid>
                <TitleCart>Total</TitleCart>
                <Price>$ {totalPrice}</Price>
              </Grid>
              <Button width='100%' margin='2.4rem 0 0' to='/'>
                Continue and Pay
              </Button>
            </>
          ) : (
            <TitleNotProduct>Votre panier est vide.</TitleNotProduct>
          )}
        </ShoppingCartContainer>
      </CheckoutWrapper>
    </>
  );
}
