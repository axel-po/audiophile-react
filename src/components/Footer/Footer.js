import React from "react";
import { FooterWrapper, FooterContainer, Logo, NavItems, NavLink, TextContainer, SocialMediaContainer, SocialMedia, CopyRight } from "./Footer.Style";
import { TextStyle } from "../../styles/Text.Style";
import "boxicons";

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <Logo to='/'>audiophile</Logo>
        <NavItems>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/headphones'>Headphones</NavLink>
          <NavLink to='/speakers'>Speakers</NavLink>
          <NavLink to='/earphones'>Earphones</NavLink>
        </NavItems>
        <TextContainer>
          <TextStyle>
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to
            helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
          </TextStyle>
        </TextContainer>
        <SocialMediaContainer>
          <SocialMedia>
            <i className='bx bxl-facebook-square'></i>
          </SocialMedia>
          <SocialMedia>
            <i className='bx bxl-twitter'></i>
          </SocialMedia>
          <SocialMedia>
            <i className='bx bxl-instagram'></i>
          </SocialMedia>
        </SocialMediaContainer>
        <CopyRight>Copyright 2021. All Rights Reserved</CopyRight>
      </FooterContainer>
    </FooterWrapper>
  );
}
