import styled from 'styled-components';
import { View } from 'react-native';

export const Block = styled(View)`
  flex: ${({ size = 1 }) => size};
  align-self: stretch;
  justify-content: ${({ justify = 'center' }) => justify};
  align-items: ${({ align = 'center' }) => align};
`;
