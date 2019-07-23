import styled, { css } from 'styled-components/native';
import { COLORS } from '~/styles';
import { TouchableOpacity, Text, Dimensions, StyleSheet } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const sizeStyles = {
  small: 'width: 136; height: 40;',
  medium: 'width: 212; height: 40;',
  large: 'width: 288; height: 45;',
  full: `width: ${screenWidth}; height: 40; border-radius: 0;`,
  stretch: 'width: 100%; height: 40;',
};

export const ButtonWrapper = styled(TouchableOpacity)`
  justifyContent: center;
  alignItems: center;
  border-radius: 4;
  background-color: ${COLORS.primaryDetails};
  ${({ size }) =>
    css`
      ${sizeStyles[size]};
    `}
  ${({ secondaryTheme }) =>
    secondaryTheme &&
    css`
      background-color: ${COLORS.primaryBase};
      borderwidth: ${StyleSheet.hairlineWidth};
      border-color: ${COLORS.primaryDetails};
    `}
  ${({ disabled, secondaryTheme }) =>
    disabled &&
    (secondaryTheme
      ? css`
          background-color: transparent;
          border-color: ${COLORS.primaryBorder};
        `
      : css`
          background-color: ${COLORS.disabled};
        `)}
`;

export const ButtonText = styled(Text)`
  font-size: ${({ size }) => (size === 'small' ? 14 : 16)};
  color: ${({ secondaryTheme }) =>
    secondaryTheme ? COLORS.primaryDetails : COLORS.primaryBase};
  ${({ disabled }) =>
    disabled &&
    css`
      color: ${COLORS.secondaryDisabled};
    `};
`;
