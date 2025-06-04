// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { FaHeart, FaLinkedin, FaGithub, FaTwitter, FaArrowUp, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    // make sure the year is dynamic
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        {/* Top Section: Logo, navigation links and social media links */}
        <FooterTop>
          <FooterLogo>R.Nazri</FooterLogo>
          <FooterNavigation>
            <FooterNavItem>
              <FooterNavLink 
                to="home" 
                smooth={true} 
                duration={500} 
                // spy is when the link automatically highlight/become active
                spy={true} 
                // exact makes spying more precise as in ensures link only highlights when the target section is in view
                exact="true" 
                offset={-80} // lower than header
              >
                Home
              </FooterNavLink>
            </FooterNavItem>
            <FooterNavItem>
              <FooterNavLink 
                to="about" 
                smooth={true} 
                duration={500} 
                spy={true} 
                exact="true" 
                offset={-80}
              >
                About
              </FooterNavLink>
            </FooterNavItem>
          
            <FooterNavItem>
              <FooterNavLink 
                to="project" 
                smooth={true} 
                duration={500} 
                spy={true} 
                exact="true" 
                offset={-80}
              >
                Projects
              </FooterNavLink>
            </FooterNavItem>
          </FooterNavigation>

          <SocialLinks>
            <SocialLink href="https://www.linkedin.com/in/raudhah-nazri-010914256" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </SocialLink>
            <SocialLink href="https://github.com/raudhahnazri" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </SocialLink>
            <SocialLink href="https://instagram.com/rdhah.nzri" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </SocialLink>
          </SocialLinks>
        </FooterTop>
        
        <FooterDivider />
        
        <FooterBottom>
          <FooterCopyright>
            &copy; {currentYear} Raudhah Nazri. All rights reserved. Made with <HeartIcon><FaHeart /></HeartIcon>
          </FooterCopyright>
          <ScrollToTop 
            to="home" 
            smooth={true} 
            duration={800} 
            spy={true} 
            exact="true" 
            offset={-80}
          >
            <FaArrowUp />
          </ScrollToTop>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: #0a0a0a;
  padding: 60px 0 20px;
`;

const FooterContent = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  
  @media screen and (max-width: ${props => props.theme.breakpoints.lg}) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const FooterLogo = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
  
  @media screen and (max-width: ${props => props.theme.breakpoints.lg}) {
    margin-bottom: 20px;
  }
`;

const FooterNavigation = styled.ul`
  display: flex;
  
  @media screen and (max-width: ${props => props.theme.breakpoints.lg}) {
    margin-bottom: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  @media screen and (max-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const FooterNavItem = styled.li`
  margin: 0 15px;
  
  @media screen and (max-width: ${props => props.theme.breakpoints.sm}) {
    margin: 10px 0;
  }
`;

const FooterNavLink = styled(Link)`
  font-size: 0.9rem;
  color: #ADADAD;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const SocialLinks = styled.div`
  display: flex;
`;

const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(138, 86, 232, 0.1);
  color: ${props => props.theme.colors.primary};
  margin-left: 15px;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.light};
    transform: translateY(-5px);
  }
  
  @media screen and (max-width: ${props => props.theme.breakpoints.sm}) {
    margin: 0 8px;
  }
`;

const FooterDivider = styled.div`
  height: 1px;
  background-color: rgba(255, 255, 255, 0.1);
  margin-bottom: 20px;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  
  @media screen and (max-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const FooterCopyright = styled.p`
  font-size: 0.9rem;
  color: #ADADAD;
  display: flex;
  align-items: center;
  
  @media screen and (max-width: ${props => props.theme.breakpoints.sm}) {
    margin-bottom: 20px;
    text-align: center;
  }
`;

const HeartIcon = styled.span`
  color: #ff5e5e;
  margin: 0 5px;
  animation: pulse 1.5s infinite;
  
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const ScrollToTop = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.light};
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #7642e0;
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(138, 86, 232, 0.3);
  }
`;

export default Footer;