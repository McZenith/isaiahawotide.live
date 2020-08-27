import React from 'react';
import { Container } from '../../common';
import { Wrapper, Flex, Links, Details } from './styles';
import GitHubLogo from '../../../assets/icons/github.svg';

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <h2>Isaiah Awotide</h2>
        <span>
          © All rights are reserved | {new Date().getFullYear()} | Made with{' '}
          <span aria-label='love' role='img'>
            💖
          </span>{' '}
          based on{' '}
          <a
            href='https://aaronvandenberg.nl'
            rel='noopener noreferrer'
            target='_blank'
            title={'Aaron van den Berg'}
          >
            Aaron van den Berg
          </a>
        </span>
      </Details>
      <Links>
        <a
          href={'https://github.com/McZenith'}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={`follow me on GitHub`}
        >
          <img width='24' src={GitHubLogo} alt={'GitHub'} />
        </a>
      </Links>
    </Flex>
  </Wrapper>
);
