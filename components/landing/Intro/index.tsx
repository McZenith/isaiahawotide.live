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
        <Link
          href='https://drive.google.com/file/d/1SCX2wubXadBwM9neBEoE9n4w9gB6bsvz/view?usp=drive_link'
          target='_blank'
        >
          <Button style={{ marginLeft: '0.5em', background: '#001F3F' }}>
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
