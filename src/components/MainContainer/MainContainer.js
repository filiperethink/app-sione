import React, { Fragment } from 'react';
import { Container, TopBar } from './styled';

const MainContainer = ({ children }) => (
  <Fragment>
    <TopBar />
    <Container>{children}</Container>
  </Fragment>
);

export default MainContainer;
