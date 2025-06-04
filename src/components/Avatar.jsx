// First Section : 3D Avatar

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

// currently, use placeholder for avatar
// later, import image : import AvatarImage from '../assets/images/avatar.png';

const Avatar = ({id}) => {
    return (
        <AvatarPageContainer id={id}>
            <AvatarPageContent>
                <AvatarPageInfo>
                    {/* Framer Motion (using an animation library for react)  */}
                    <motion.div initial={{opacity: 0, y: 20}} animate={{opacity:1, y: 0}} transition={{duration: 0.5}}>
                        {/* motion: fade-in and slide-up */}
                        <AvatarPageTitle>Hi, I'm an aspiring Web Developer</AvatarPageTitle>
                    </motion.div>

                    <motion.div initial={{opacity: 0, y: 20}} animate={{opacity:1, y: 0}} transition={{duration: 0.5, delay: 0.2}}>
                        <AvatarPageSubtitle>
                            I solve problems with code and bring visions to
                            life through design.
                        </AvatarPageSubtitle>
                    </motion.div>

                    <motion.div initial={{opacity: 0, y: 20}} animate={{opacity:1, y: 0}} transition={{duration: 0.5, delay: 0.4}}>
                        <ButtonWrapper>
                            <AvatarDownloadButton
                            href="/RAUDHAH CV.pdf"
                            download
                          >
                            My Resume
                          </AvatarDownloadButton>

                          <AvatarBorderOnlyButton
                             to="project"
                             smooth="{true}"
                             duration={500}
                             spy={true}
                             exact="true"
                             offset={-80}
                            >
                                My Works
                          </AvatarBorderOnlyButton>
                        </ButtonWrapper>
                    </motion.div>
                </AvatarPageInfo>

                <AvatarContainer>
                    <motion.div initial={{opacity: 0, scale:0.8}} animate={{opacity: 1, scale: 1}}
                     transition={{ duration: 0.5}}
                    >
                        <AvatarWrapper>
                            {/* replace the colored circle with actual 3D avatar */}
                            <AvatarPlaceholder>
                                <NameTag>Raudhah Nazri</NameTag>
                            </AvatarPlaceholder>

                        </AvatarWrapper>

                    </motion.div>
                </AvatarContainer>


            </AvatarPageContent>

        </AvatarPageContainer>
    );

};

const AvatarPageContainer = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.dark};
  position: relative;
  overflow: hidden;
`;

const AvatarPageContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 80px;
  
  @media screen and (max-width: ${props => props.theme.breakpoints.lg}) {
    flex-direction: column-reverse;
    text-align: center;
    padding-top: 0;
  }
`;

const AvatarPageInfo = styled.div`
  flex: 1;
  
  @media screen and (max-width: ${props => props.theme.breakpoints.lg}) {
    margin-top: 40px;
  }
`;

const AvatarPageTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  background: linear-gradient(to right, #e2c5fa, #9c6eff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media screen and (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: 2.5rem;
  }
`;

const AvatarPageSubtitle = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 30px;
  color: #ADADAD;
  max-width: 500px;
  
  @media screen and (max-width: ${props => props.theme.breakpoints.lg}) {
    margin: 0 auto 30px auto;
  }
`;

const ButtonWrapper = styled.div`
  @media screen and (max-width: ${props => props.theme.breakpoints.lg}) {
    display: flex;
    justify-content: center;
  }
`;

const AvatarBorderOnlyButton = styled(Link)`
  display: inline-block;
  padding: 12px 30px;
  background-color: transparent;
  color: ${props => props.theme.colors.light};
  font-size: 1rem;
  font-weight: 600;
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.primary};
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(138, 86, 232, 0.3);
  }
`;

const AvatarDownloadButton = styled.a`
  display: inline-block;
  padding: 12px 30px;
  background-color: transparent;
  color: ${props => props.theme.colors.light};
  font-size: 1rem;
  font-weight: 600;
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  
  &:hover {
    background-color: ${props => props.theme.colors.primary};
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(138, 86, 232, 0.3);
  }
`;


const AvatarContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
  @media screen and (max-width: ${props => props.theme.breakpoints.lg}) {
    width: 100%;
  }
`;

const AvatarWrapper = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: #241245;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 4px solid ${props => props.theme.colors.primary};
  box-shadow: 0 20px 30px rgba(138, 86, 232, 0.2);
  
  @media screen and (max-width: ${props => props.theme.breakpoints.md}) {
    width: 250px;
    height: 250px;
  }
`;

const AvatarPlaceholder = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: linear-gradient(45deg, #FFD700, #FFA500);
  position: relative;
  
  @media screen and (max-width: ${props => props.theme.breakpoints.md}) {
    width: 200px;
    height: 200px;
  }
`;

const NameTag = styled.div`
  position: absolute;
  top: -30px;
  right: -40px;
  background-color: ${props => props.theme.colors.secondary};
  color: #000;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export default Avatar;