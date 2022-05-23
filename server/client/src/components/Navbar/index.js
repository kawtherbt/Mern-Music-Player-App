import React from 'react';
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon,  NavBtn, NavBtnLink} from './NavbarEle';
import logo from "../../images/yay.png"
const Navbar = ({toggle}) => {
  return (
    <>
    <Nav>
        <NavbarContainer className= "p-3 shadow-lg" onClick={toggle}>
            <NavLogo to='/'>
            <img src={logo} alt="logo" /></NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavBtn>
                <NavBtnLink to="about">About</NavBtnLink>
                <NavBtnLink to="download">Download</NavBtnLink>
                <NavBtnLink to="support">Support</NavBtnLink>
                <NavBtnLink to="login">Log In</NavBtnLink>
                <NavBtnLink to="signup">Sign up</NavBtnLink>
                </NavBtn>
        </NavbarContainer>
    </Nav>
    </>
  );
};

export default Navbar;