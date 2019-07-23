import styled from 'styled-components/native';
import { COLORS } from '~/styles';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';

export const Wrapper = styled(View)`
  width: ${({ halfSize }) => (halfSize ? '45%' : '100%')};
  margin-bottom: 20;
`;

export const Input = styled(TextInput)`
  padding-vertical: 8;
  padding-horizontal: 6;
  margin-bottom: 6;
  border-radius: 3;
  border-width: 1;
  border-color: ${COLORS.primaryBorder};
  font-size: 18;
  color: ${COLORS.primaryDarkFont};
`;

export const Label = styled(Text)`
  font-size: 12;
  color: ${COLORS.primaryBorder};
`;

export const ErrorMessage = styled(Text)`
  position: absolute;
  bottom: -20;
  left: 0;
  font-size: 12;
  color: ${COLORS.primaryError};
`;

export const IconWrapper = styled(View)`
  bottom: 20;
  right: 10;
  position: absolute;
  align-self: flex-end;
`;

export const TouchableIconWrapper = styled(TouchableOpacity)`
  bottom: 20;
  right: 10;
  position: absolute;
  align-self: flex-end;
`;
