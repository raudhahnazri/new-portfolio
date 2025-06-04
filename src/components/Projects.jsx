// src/components/Projects.js

import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'Readiness To Work - Mental Health Assessment Platform',
    category: 'Full Stack',
    image: 'rtw.png',
    description:"A fully functional mental health web application featuring user authentication, module content management, and real-time support. Built in collaboration with the Institute of Psychiatry, Psychology and Neuroscience to help assess employees' readiness to return to work through interactive assessment modules.",
    technologies: ['Django', 'Reactjs', 'Firebase'],
    demoLink: 'https://www.youtube.com/watch?v=a4szjn5OcrQ',
    codeLink: 'https://github.com/raudhahnazri/worker-readiness-app.git'
  },
  {
    id: 2,
    title: 'Code Tutors - Online Tutoring Booking Platform',
    category: 'Full Stack',
    image: 'codetutors.png',
    description:'A web application connecting tutors and students through an intelligent booking system. The platform matches users based on availability and expertise, features integrated payment processing, and provides an intuitive interface for seamless scheduling and transactions.',
    technologies: ['Django', 'Html'],
    demoLink: 'https://generated-motif-444023-b9.nw.r.appspot.com',
    codeLink: 'https://github.com/raudhahnazri/tutoring-booking.git'
  }
];

const Projects = ({ id }) => {
  

  // Filter categories
  const categories = ['All', 'Frontend', 'Backend', 'Full Stack', 'UI/UX'];
  const [activeCategory, setActiveCategory] = useState('All');

  console.log('Active:', activeCategory);
  console.log('Projects:', projects.map(p => p.category));

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <ProjectsContainer id={id}>
      <ProjectsContent>
        <ProjectsHeader>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <SectionTitle>My Works</SectionTitle>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <SectionSubtitle>Recent Projects</SectionSubtitle>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <SectionDescription>
              Here's a selection of my recent work spanning various domains and technologies.
            </SectionDescription>
          </motion.div>
        </ProjectsHeader>

        <FilterContainer>
          {categories.map((category, index) => (
            <FilterButton 
              key={index}
              active={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </FilterButton>
          ))}
        </FilterContainer>

        <ProjectsGrid
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              variants={itemVariants}
            >
              <ProjectImageContainer>
                {/* This would be your actual project image */}
                <ProjectImage src={`${import.meta.env.BASE_URL}images/${project.image}`} alt={project.title}  />
                <ProjectOverlay>
                  <ProjectLinks>
                    <ProjectLink href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt />
                    </ProjectLink>
                    <ProjectLink href={project.codeLink} target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </ProjectLink>
                  </ProjectLinks>
                </ProjectOverlay>
              </ProjectImageContainer>
              <ProjectInfo>
                <ProjectCategory>{project.category}</ProjectCategory>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectTechnologies>
                  {project.technologies.map((tech, index) => (
                    <TechBadge key={index}>{tech}</TechBadge>
                  ))}
                </ProjectTechnologies>
              </ProjectInfo>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContent>
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.section`
  min-height: 100vh;
  background-color: ${props => props.theme.colors.dark};
  padding: 100px 0;
`;

const ProjectsContent = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectsHeader = styled.div`
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

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
  gap: 10px;
`;

const FilterButton = styled.button`
  padding: 8px 20px;
  border-radius: 30px;
  background-color: ${props => props.active ? props.theme.colors.primary : 'transparent'};
  color: ${props => props.active ? props.theme.colors.light : '#ADADAD'};
  border: ${props => props.active ? 'none' : '1px solid #ADADAD'};
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.active ? props.theme.colors.primary : 'rgba(138, 86, 232, 0.1)'};
    transform: translateY(-2px);
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  
  @media screen and (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media screen and (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: rgba(30, 30, 30, 0.7);
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }
`;

const ProjectImageContainer = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;
`;

const ProjectImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background-color: #333;
  background-image: linear-gradient(45deg, #444 25%, transparent 25%, transparent 50%, #444 50%, #444 75%, transparent 75%, transparent);
  background-size: 20px 20px;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  background-color: #333;
  background-image: linear-gradient(45deg, #444 25%, transparent 25%, transparent 50%, #444 50%, #444 75%, transparent 75%, transparent);
  background-size: 20px 20px;
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(138, 86, 232, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: all 0.3s ease;
  
  ${ProjectImageContainer}:hover & {
    opacity: 1;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const ProjectLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.light};
  color: ${props => props.theme.colors.primary};
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectInfo = styled.div`
  padding: 25px;
`;

const ProjectCategory = styled.span`
  font-size: 0.8rem;
  color: ${props => props.theme.colors.primary};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ProjectTitle = styled.h4`
  font-size: 1.3rem;
  margin: 10px 0;
  color: ${props => props.theme.colors.light};
`;

const ProjectDescription = styled.p`
  font-size: 0.9rem;
  color: #ADADAD;
  margin-bottom: 15px;
  line-height: 1.6;
`;

const ProjectTechnologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const TechBadge = styled.span`
  padding: 5px 10px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  color: ${props => props.theme.colors.light};
  font-size: 0.8rem;
`;

export default Projects;