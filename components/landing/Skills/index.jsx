import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from '../../common';
import dev from '../../../assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => (
  <Wrapper id='about'>
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt='I’m Aaron and I’m a student Web Developer!' />
      </Thumbnail>
      <Details>
        <h1>Skills!</h1>
        <p>
          I am proficient with Reactjs, Node, Typescript, MongoDb, Express,
          REST, GRAPHQL, React Native, C++ for EOSIO Blockchain, Python for Data
          science.
        </p>
        <Button as={AnchorLink} href='#contact'>
          Contact me
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
