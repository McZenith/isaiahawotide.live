import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from '../../common';
import dev from '../../../assets/illustrations/mobile-dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';
import { Header } from '../../theme/Header';
import Link from 'next/link';

export const Intro = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <h1>Hi There!</h1>
        <h4>I’m Isaiah, a Financial Technology Prodigy!</h4>
        <Button as={AnchorLink} href='#contact'>
          Contact me
        </Button>
        <Link href='https://drive.google.com/file/d/12sTq3W6j-Wy9KhtKxDLFwcy7vs_qZVZp/view?usp=sharing'>
          <Button secondary={true} style={{ marginLeft: '0.5em' }}>
            Resume
          </Button>
        </Link>
      </Details>
      <Thumbnail>
        <img src={dev} alt='Isaiah Awotide' />
      </Thumbnail>
    </IntroWrapper>
  </Wrapper>
);
