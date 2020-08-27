import React from 'react';
import { Footer } from '../../theme';
import { Global } from './styles';

export const Layout = ({ children }) => {
  return (
    <>
      <Global />
      {children}
      <Footer />
    </>
  );
};
