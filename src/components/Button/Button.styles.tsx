import styled from 'styled-components/native';

type TPressableProps = {
  type: 'primary' | 'secondary';
  size: number;
};

export const PressableButton = styled.Pressable<TPressableProps>`
  background-color: ${({ type }) => (type === 'primary' ? 'green' : 'red')};
  color: '#fff';
  width: 100%;
`;
