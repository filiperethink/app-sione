import React from 'react';
import PropTypes from 'prop-types';
import { ButtonWrapper, ButtonText } from './styled';

const Button = props => {
  const { onPress, text, disabled, size, secondaryTheme } = props;
  return (
    <ButtonWrapper
      onPress={onPress}
      disabled={disabled}
      secondaryTheme={secondaryTheme}
      size={size}
    >
      <ButtonText
        size={size}
        secondaryTheme={secondaryTheme}
        disabled={disabled}
      >
        {text}
      </ButtonText>
    </ButtonWrapper>
  );
};

Button.defaultProps = {
  size: 'medium',
  secondaryTheme: false,
  disabled: false,
};

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'full', 'stretch']),
  secondaryTheme: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Button;
