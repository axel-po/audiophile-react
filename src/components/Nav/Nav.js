import React, { useState, useEffect, useContext } from "react";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { NavWrapper, NavContainer, Logo, NavItems, NavLink, Shop, ButtonMenu } from "./Nav.Style";
import IconShop from "./icon-cart.svg";
import IconMenu from "./icon-menu.svg";
import { CartContext } from "../../context/CartContext";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

export default function Nav() {
  const [width, setWidth] = useState(window.innerWidth);

  const [toggleBackground, setToggleBackground] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);

  const { toggleCart, setToggleCart } = useContext(CartContext);

  const location = useLocation();
  const menu = useRef();
  let { pathname } = location;

  const handleWidth = () => {
    setWidth(window.innerWidth);
  };

  /* Responsive Nav */
  const handleNav = () => {
    setToggleNav(!toggleNav);
  };

  useEffect(() => {
    /* Background navbar */
    const changeBackground = () => {
      if (window.scrollY >= 40 || pathname !== "/" || toggleNav) {
        setToggleBackground(true);
      } else {
        setToggleBackground(false);
      }
    };

    changeBackground();

    /* Responsive Nav/Menu */
    const toggleMenu = () => {
      if (width >= 911) {
        setToggleNav(false);
      }
    };

    window.addEventListener("scroll", changeBackground);
    window.addEventListener("resize", handleWidth);
    window.addEventListener("resize", toggleMenu);

    return () => {
      window.removeEventListener("scroll", changeBackground);
      window.removeEventListener("resize", handleWidth);
      window.removeEventListener("resize", toggleMenu);
    };
  }, [pathname, toggleNav, width]);

  return (
    <NavWrapper toggleBackground={toggleBackground}>
      <NavContainer toggleNav={toggleNav} toggleBackground={toggleBackground}>
        <Logo onClick={() => setToggleNav(false)} to='/'>
          audiophile
        </Logo>
        <NavItems ref={menu} toggleNav={toggleNav}>
          <NavLink onClick={() => setToggleNav(false)} to='/'>
            Home
          </NavLink>
          <NavLink onClick={() => setToggleNav(false)} to='/headphones'>
            Headphones
          </NavLink>
          <NavLink onClick={() => setToggleNav(false)} to='/speakers'>
            Speakers
          </NavLink>
          <NavLink onClick={() => setToggleNav(false)} to='/earphones'>
            Earphones
          </NavLink>
        </NavItems>
        <Shop src={IconShop} alt='logo shop' onClick={() => setToggleCart(!toggleCart)} />
        {width <= 911 && <ButtonMenu onClick={handleNav} src={IconMenu} alt='icon de menu' />}
        {toggleCart && <ShoppingCart />}
      </NavContainer>
    </NavWrapper>
  );
}
