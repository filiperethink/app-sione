import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Title, Dash } from './styled';

const FancyTitle = ({ title }) => (
  <Wrapper>
    <Title>{title}</Title>
    <Dash />
  </Wrapper>
);

FancyTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default FancyTitle;
