import styled from 'styled-components';
import { View } from 'react-native';
import { COLORS } from '~/styles';

export const TopBar = styled(View)`
  background-color: ${COLORS.primaryDetails};
  height: 20;
  width: 100%;
`;

export const Container = styled(View)`
  background-color: ${COLORS.primaryBase};
  flex: 1;
  padding-horizontal: 25;
`;
