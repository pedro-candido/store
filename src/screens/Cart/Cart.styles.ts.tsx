import styled from 'styled-components/native';

import Label from '@components/Label';

export const Container = styled.View`
  height: 95%;
  width: 100%;
  justify-content: center;
`;

export const ContainerWithoutItems = styled.View`
  align-items: center;
  margin-top: 10%;
`;

export const Title = styled(Label)`
  font-size: 20px;
  font-family: 'Gabarito-Medium';
  text-align: center;
  width: 50%;
`;
