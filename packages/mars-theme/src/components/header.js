import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";
import ReactLogo from './svg/22.png';

const Header = ({ state }) => {
  return (
    <>
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header class="masthead mb-auto">
        <div class="inner">
          <h3 class="masthead-brand">Cover</h3>
          <nav class="nav nav-masthead justify-content-center">
            <a class="nav-link active" href="#">Home</a>
            <a class="nav-link" href="#">Features</a>
            <a class="nav-link" href="#">Contact</a>
          </nav>
        </div>
      </header>

      <main role="main" class="inner cover container">
        <h1 class="cover-heading">Cover your page.</h1>
        <p class="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
        <p class="lead">
          <a href="#" class="btn btn-lg btn-secondary">Learn more</a>
        </p>
      </main>

      
    </div>
      <Container className="navbar navbar-expand-lg navbar-light bg-white">
        <StyledLink link="/" className="navbar-brand">
        <img src={ReactLogo} className="logo" alt="React Logo" width="150px" /><Title>{/* {state.frontity.title} */}</Title>
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
