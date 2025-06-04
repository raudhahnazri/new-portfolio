// src/components/About.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';


const About = ({ id }) => {
  return (
    <AboutContainer id={id}>
      <AboutContent>
        <AboutImageWrapper>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <AboutImage src={`${import.meta.env.BASE_URL}images/image.jpg`} alt="About Me" />

          </motion.div>
        </AboutImageWrapper>

        <AboutInfo>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <SectionTitle>WHO AM I?</SectionTitle>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <AboutName>
              I'm <span className='highlight-name'>Raudhah Nazri</span>, a Web Developer and also your Designer.
            </AboutName>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <AboutDescription>
             I'm a computer science student with a passion for creativity and problem-solving. It all started when I stumbled upon the Scratch app as a kid. The colorful blocks and playful interface sparked my curiosity and introduced me to the world of coding. Since then, I've been learning to build complete digital solutions, from responsive front-ends with HTML, CSS, JavaScript, and React to robust back-ends using Python and Django. I aspire to become a full-stack developer and UI/UX designer, creating web applications that are both beautiful, user-friendly and functional.
            </AboutDescription>
          </motion.div>
          
          <InfoItems>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <InfoItem>
                <InfoLabel>Name :</InfoLabel>
                <InfoValue>Raudhah Ahmad Nazri</InfoValue>
              </InfoItem>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <InfoItem>
                <InfoLabel>Age :</InfoLabel>
                <InfoValue>23</InfoValue>
              </InfoItem>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <InfoItem>
                <InfoLabel>Email</InfoLabel>
                <InfoValue>raudhnaz@gmail.com</InfoValue>
              </InfoItem>
            </motion.div>
          </InfoItems>
        </AboutInfo>
      </AboutContent>
    </AboutContainer>
  );
};

const AboutContainer = styled.section`
  min-height: 100vh;
  background-color: ${props => props.theme.colors.dark};
  display: flex;
  align-items: center;
`;

const AboutContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  
  @media screen and (max-width: ${props => props.theme.breakpoints.lg}) {
    flex-direction: column;
  }
`;

const AboutImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  
  @media screen and (max-width: ${props => props.theme.breakpoints.lg}) {
    margin-bottom: 50px;
    width: 100%;
  }
`;

const AboutImagePlaceholder = styled.div`
  width: 400px;
  height: 500px;
  border-radius: 20px;
  background-color: #333;
  background-image: linear-gradient(135deg, #444 25%, transparent 25%, transparent 50%, #444 50%, #444 75%, transparent 75%, transparent);
  background-size: 20px 20px;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
  
  @media screen and (max-width: ${props => props.theme.breakpoints.md}) {
    width: 300px;
    height: 400px;
  }
`;

const AboutImage = styled.img`
  width: 400px;
  height: 500px;
  border-radius: 20px;
  background-color: #333;
  background-image: linear-gradient(135deg, #444 25%, transparent 25%, transparent 50%, #444 50%, #444 75%, transparent 75%, transparent);
  background-size: 20px 20px;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
  
  @media screen and (max-width: ${props => props.theme.breakpoints.md}) {
    width: 300px;
    height: 400px;
  }
`;

const AboutInfo = styled.div`
  flex: 1;
  padding-left: 50px;
  
  @media screen and (max-width: ${props => props.theme.breakpoints.lg}) {
    padding-left: 0;
    text-align: center;
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 20px;
  letter-spacing: 2px;
`;

const AboutName = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.light};

  .highlight-name {
    color: #8e44ad;
  }


  
  @media screen and (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: 2rem;
  }
`;

const AboutDescription = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: #ADADAD;
  margin-bottom: 30px;
`;

const InfoItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  @media screen and (max-width: ${props => props.theme.breakpoints.lg}) {
    justify-content: center;
  }
`;

const InfoItem = styled.div`
  
  min-height: 100px; 
  margin-right: 20px;
  margin-bottom: 20px;
  background-color: rgba(30, 30, 30, 0.7);
  border-radius: 15px;
  padding: 20px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  
  @media screen and (max-width: ${props => props.theme.breakpoints.md}) {
    width: 100%;
    margin-right: 0;
  }
`;

const InfoLabel = styled.h4`
  font-size: 1rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 10px;
`;

const InfoValue = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.colors.light};
`;


export default About;