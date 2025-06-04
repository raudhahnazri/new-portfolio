import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false); // at top of the page
    const [isOpen, setIsOpen] = useState(false);

    // this would detect scoll
    useEffect(() => {
        // function that checks how far the user has scrolled
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true); // navbar gets a semi-transparent dark background + blur effect

            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll); // tells the browser to run the handleScroll function
        //  every time user scrolls the page
        return () => window.removeEventListener('scroll', handleScroll);
        // cleanup function that removes the scroll listener when component is unmounts 
    }, []); // [] means it only run once when the component first appears on screen (mounts)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    }

    return (
        <NavContainer scrolled={scrolled}>
            <NavContent>
                <Logo>R.Nazri</Logo> 
                <MenuIcon onClick={toggleMenu}>
                    {isOpen? <FaTimes /> : <FaBars />}
                </MenuIcon>

                {/* contains menu item */}
                <NavMenu isOpen={isOpen}>
                    <NavItem>
                        {/* NavLink to id of the page */}
                        <NavLink to="home" smooth={500} spy={true} exact="true" offset={-80} onClick={closeMenu}>
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="about" smooth={500} spy={true} exact="true" offset={-80} onClick={closeMenu}>
                            About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="project" smooth={500} spy={true} exact="true" offset={-80} onClick={closeMenu}>
                          Projects
                      </NavLink>
                    </NavItem>
                </NavMenu>
            </NavContent>

        </NavContainer>
    );
};

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  z-index: 100;
  transition: ${props => props.theme.transitions.main};
  background-color: ${props => props.scrolled ? 'rgba(12, 12, 12, 0.9)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${props => props.scrolled ? '0 5px 15px rgba(0, 0, 0, 0.1)' : 'none'};
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 50px;

  @media screen and (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 0 30px;
  }
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 24px;
  cursor: pointer;
  
  @media screen and (max-width: ${props => props.theme.breakpoints.md}) {
    display: block;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  
  @media screen and (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: ${props => props.isOpen ? '0' : '-100%'};
    width: 100%;
    height: calc(100vh - 80px);
    background-color: rgba(12, 12, 12, 0.95);
    backdrop-filter: blur(10px);
    transition: all 0.5s ease;
    padding: 40px 0;
  }
`;

const NavItem = styled.li`
  margin-left: 30px;
  
  @media screen and (max-width: ${props => props.theme.breakpoints.md}) {
    margin: 20px 0;
  }
`;

const NavLink = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: ${props => props.theme.transitions.main};
  position: relative;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
  
  &.active {
    color: ${props => props.theme.colors.primary};
    
    &:after {
      width: 100%;
    }
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${props => props.theme.colors.primary};
    transition: ${props => props.theme.transitions.main};
  }
  
  &:hover:after {
    width: 100%;
  }
`;

export default Navbar;