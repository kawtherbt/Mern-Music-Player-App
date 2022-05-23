import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinkWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcon, SocialIconLink} from './FooterEle'

function Footer() {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinkWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>COMPANY</FooterLinkTitle>
                            <FooterLink to="/login">About</FooterLink>
                            <FooterLink to="/login">Jobs</FooterLink>
                            <FooterLink to="/login">For the Record</FooterLink>
                    </FooterLinkItems>
                </FooterLinkWrapper>
                <FooterLinkWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>COMMUNITIES</FooterLinkTitle>
                            <FooterLink to="/login">For Artists</FooterLink>
                            <FooterLink to="/login">Developers</FooterLink>
                            <FooterLink to="/login">Advertising</FooterLink>
                            <FooterLink to="/login">Investors</FooterLink>
                            <FooterLink to="/login">Vendors</FooterLink>
                    </FooterLinkItems>
                </FooterLinkWrapper>
                <FooterLinkWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>USEFUL LINKS</FooterLinkTitle>
                            <FooterLink to="/login">Support</FooterLink>
                            <FooterLink to="/login">Web Player</FooterLink>
                            <FooterLink to="/login">Free Mobile App</FooterLink>
                    </FooterLinkItems>
                </FooterLinkWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/"> 
                        Samma3ni
                    </SocialLogo>
                    <WebsiteRights>Samma3ni © {new Date().getFullYear()} All Rights Reserved.</WebsiteRights>
                    <SocialIcon>
                        <SocialIconLink href="/" target="_blank"
                            aria-label="Facebook" >
                                <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank"
                            aria-label="Instagram" >
                                <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank"
                            aria-label="Youtube" >
                                <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank"
                            aria-label="Twitter" >
                                <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank"
                            aria-label="Linkedin" >
                                <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcon>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer