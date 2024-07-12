import { Dimensions } from 'react-native';

import styled from 'styled-components/native';

export const Container = styled.View`
  height: 95%;
  width: ${Dimensions.get('screen').width}px;
`;
