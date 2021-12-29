import { useState, useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./components/NotFound/NotFound";
import Checkout from "./pages/Checkout/Checkout";
import Payment from "./components/Payment/Payment";

export default function App() {
  const [showComponent, setShowComponent] = useState(true);
  const [bodyColor, setBodyColor] = useState("#fff");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/checkout" || location.pathname === "/payment") {
      setShowComponent(false);
      setBodyColor("#F2F2F2");
    } else {
      setShowComponent(true);
      setBodyColor("#fff");
    }
  }, [showComponent, location]);

  const StyleContainer = styled.div`
    max-width: 110rem;
    width: 90%;
    margin: auto;
  `;

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Header />} />
      </Routes>
      <StyleContainer>
        <GlobalStyle bodyColor={bodyColor} />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/headphones' element={<Headphones />} />
          <Route path='/speakers' element={<Speakers />} />
          <Route path='/earphones' element={<Earphones />} />
          <Route path='/product-details/:product' element={<ProductDetail />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        {showComponent && <Testimonials />}
        <Footer />
      </StyleContainer>
    </>
  );
}
