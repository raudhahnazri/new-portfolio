// src/components/Contact.js
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = ({ id }) => {
  useEffect(() => {
    // Adding contact form event listener when component mounts
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // In a real scenario, you would send the form data to a server
        // For this example, we'll just show a success message
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
      });
    }

    // Cleanup event listener when component unmounts
    return () => {
      const contactForm = document.getElementById('contactForm');
      if (contactForm) {
        contactForm.removeEventListener('submit', function(e) {
          e.preventDefault();
        });
      }
    };
  }, []);

  return (
    <ContactContainer id={id}>
      <ContactContent>
        <ContactHeader>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <SectionTitle>Contact Me</SectionTitle>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <SectionSubtitle>Get in Touch</SectionSubtitle>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <SectionDescription>
              Have a project in mind or want to collaborate? Feel free to reach out!
            </SectionDescription>
          </motion.div>
        </ContactHeader>

        <ContactWrapper>
          <ContactInfoContainer>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ContactInfoTitle>Let's talk about everything!</ContactInfoTitle>
              <ContactInfoText>
                Don't like forms? Send me an email or contact me via instant message.
              </ContactInfoText>

              <ContactInfoItem>
                <ContactInfoIcon>
                  <FaMapMarkerAlt />
                </ContactInfoIcon>
                <ContactInfoContent>
                  <ContactInfoLabel>Location:</ContactInfoLabel>
                  <ContactInfoValue>Tower Hamlets, London, UK</ContactInfoValue>
                </ContactInfoContent>
              </ContactInfoItem>

              <ContactInfoItem>
                <ContactInfoIcon>
                  <FaEnvelope />
                </ContactInfoIcon>
                <ContactInfoContent>
                  <ContactInfoLabel>Email:</ContactInfoLabel>
                  <ContactInfoValue>raudhnaz@gmail.com</ContactInfoValue>
                </ContactInfoContent>
              </ContactInfoItem>

              <ContactInfoItem>
                <ContactInfoIcon>
                  <FaPhone />
                </ContactInfoIcon>
                <ContactInfoContent>
                  <ContactInfoLabel>Phone:</ContactInfoLabel>
                  <ContactInfoValue>+44 123 456 7890</ContactInfoValue>
                </ContactInfoContent>
              </ContactInfoItem>

              <SocialLinks>
                <SocialLink href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </SocialLink>
                <SocialLink href="https://github.com/" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </SocialLink>
                <SocialLink href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </SocialLink>
              </SocialLinks>
            </motion.div>
          </ContactInfoContainer>

          <ContactFormContainer>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ContactFormStyled id="contactForm">
                <FormGroup>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <FormInput type="text" id="name" name="name" required />
                </FormGroup>
                <FormGroup>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <FormInput type="email" id="email" name="email" required />
                </FormGroup>
                <FormGroup>
                  <FormLabel htmlFor="subject">Subject</FormLabel>
                  <FormInput type="text" id="subject" name="subject" required />
                </FormGroup>
                <FormGroup>
                  <FormLabel htmlFor="message">Message</FormLabel>
                  <FormTextarea id="message" name="message" rows="6" required />
                </FormGroup>
                <SubmitButton type="submit">Send Message</SubmitButton>
              </ContactFormStyled>
            </motion.div>
          </ContactFormContainer>
        </ContactWrapper>
      </ContactContent>
    </ContactContainer>
  );
};

const ContactContainer = styled.section`
  min-height: 100vh;
  background-color: ${props => props.theme.colors.dark};
  padding: 100px 0;
`;

const ContactContent = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const ContactHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  background: linear-gradient(to right, #8a56e8, #58a6ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media screen and (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.h3`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 20px;
`;

const SectionDescription = styled.p`
  font-size: 1rem;
  color: #ADADAD;
  max-width: 700px;
  margin: 0 auto;
`;

const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  
  @media screen and (max-width: ${props => props.theme.breakpoints.lg}) {
    flex-direction: column;
  }
`;

const ContactInfoContainer = styled.div`
  flex: 1;
  padding-right: 50px;
  
  @media screen and (max-width: ${props => props.theme.breakpoints.lg}) {
    padding-right: 0;
    margin-bottom: 50px;
    width: 100%;
  }
`;

const ContactInfoTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.light};
`;

const ContactInfoText = styled.p`
  font-size: 1rem;
  color: #ADADAD;
  margin-bottom: 30px;
`;

const ContactInfoItem = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const ContactInfoIcon = styled.div`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.primary};
  margin-right: 15px;
  display: flex;
  align-items: center;
`;

const ContactInfoContent = styled.div``;

const ContactInfoLabel = styled.span`
  display: block;
  font-size: 1rem;
  font-weight: 600;
  color: ${props => props.theme.colors.light};
  margin-bottom: 5px;
`;

const ContactInfoValue = styled.span`
  display: block;
  font-size: 0.9rem;
  color: #ADADAD;
`;

const SocialLinks = styled.div`
  display: flex;
  margin-top: 30px;
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
  margin-right: 15px;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.light};
    transform: translateY(-5px);
  }
`;

const ContactFormContainer = styled.div`
  flex: 1;
  background-color: rgba(30, 30, 30, 0.7);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
`;

const ContactFormStyled = styled.form`
  padding: 40px;
`;

const FormGroup = styled.div`
  margin-bottom: 25px;
`;

const FormLabel = styled.label`
  display: block;
  font-size: 0.9rem;
  color: ${props => props.theme.colors.light};
  margin-bottom: 10px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px 15px;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: ${props => props.theme.colors.light};
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 8px rgba(138, 86, 232, 0.3);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: ${props => props.theme.colors.light};
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 8px rgba(138, 86, 232, 0.3);
  }
`;

const SubmitButton = styled.button`
  display: inline-block;
  padding: 12px 30px;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.light};
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #7642e0;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(138, 86, 232, 0.3);
  }
`;

export default Contact;