import { Dimensions } from 'react-native';

import styled from 'styled-components/native';

export const Container = styled.View`
  height: 90%;
  width: ${Dimensions.get('screen').width};
`;
