import styled from 'styled-components';
import { View, Text } from 'react-native';
import { COLORS } from '~/styles';

export const Wrapper = styled(View)`
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Title = styled(Text)`
  font-size: 25;
  letter-spacing: 4;
  font-weight: bold;
  color: ${COLORS.primaryDarkFont};
`;

export const Dash = styled(View)`
  width: 40;
  height: 6;
  margin-top: 5;
  background-color: ${COLORS.primaryDetails};
`;
