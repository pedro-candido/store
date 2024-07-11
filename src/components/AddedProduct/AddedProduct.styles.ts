import styled from 'styled-components/native';

import Button from '@components/Button';

export const Container = styled.View`
  flex-direction: row;
  max-width: 100%;
  justify-content: space-around;
  align-items: center;
  margin-top: 2%;
`;

export const Picture = styled.Image`
  width: 50px;
  height: 50px;
`;

export const StyledButton = styled(Button)`
  max-width: 36px;
  margin-top: 0;
`;
