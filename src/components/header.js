import { Col, Row, Container } from 'react-bootstrap';
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import {AiOutlineDown,AiFillHeart,AiOutlineShoppingCart} from "react-icons/ai";
import React from 'react';

function Header() {
  return (
    <>
      <div className='top_header'>
        <Container>
          <Row>
            <Col>
              <div className='logo'>
                <img src={require("../image/asset 0.png")} alt=''></img>
              </div>
            </Col>


             <Col>
                <div className="top_right">
                  <ul className='d-flex'>
                    <li className=''>
                      < AiFillHeart className='icon_h'/>
                      <a href="#">My Wishlist </a>
                    </li>
                    <li>
                      <a href="#">USD <AiOutlineDown /></a>
                      <ul className="dropdown_currency">
                        <li><a href="#">USD</a></li>
                        <li><a href="#">AUD</a></li>
                        <li><a href="#">EUR</a></li>
                        <li><a href="#">GBP</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="/">ENG<AiOutlineDown /></a>
                      <ul className="dropdown_links">
                        <li><a href="#">ENG</a></li>
                        <li><a href="#">GER</a></li>

                      </ul>
                    </li>
                  </ul>
                </div>
                </Col> 


          </Row>
        </Container>
      </div>


      <div className='navigation'>
        <nav className="navbar navbar-expand-lg  bg-dark ">
          <div className="container">

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse main_menu" id="navbarSupportedContent" >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Page</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Shop</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Blog</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Faqs</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Contact</a>
                </li>
              </ul>
            </div>
            <div className='main_icon'>
                <AiOutlineSearch className='icon' />
                <AiOutlineUser className='icon'/>
                <AiOutlineShoppingCart className='icon'/>
            </div>
          </div>
        </nav>



      </div>

    </>
  );
}

export default Header;
