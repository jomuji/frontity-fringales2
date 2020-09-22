import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";
import ReactLogo from './svg/crazy.svg';

const Header = ({ state }) => {
  return (
    <>
      <Container className="navbar navbar-expand-lg navbar-light bg-white">
        <StyledLink link="/" className="navbar-brand">
        <img src={ReactLogo} className="logo" alt="React Logo" width="40px" /><Title>FOOD <span>la bouffe</span>{/* {state.frontity.title} */}</Title>
        </StyledLink>
        {/* <Description>{state.frontity.description}</Description> */}
        <MobileMenu />
      
      <Nav />
      </Container>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.nav`
  width:100%;
  max-width: 100%;
  box-sizing: border-box;
  padding: 24px;
  color: #fff;

  .navbar-brand{
    display:inline-flex;

    .logo{
      color: #F24236;
      fill:#F24236;
    }
  }
  
`;

const Title = styled.div`
  margin: 5px 0 0 15px;
  
  font-family: 'Pacifico', cursive;
  font-size: 26px;
  line-height:26px;
  letter-spacing:1px;
  font-style:italic;

  span{
    font-family: 'Eczar', serif;
    display:block;
    font-size:14px;
    line-height:18px;
    letter-spacing:0;
  }
`;

const Description = styled.h4`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
  font-size:12px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
