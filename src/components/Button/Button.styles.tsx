import styled from 'styled-components/native';
import { PressableProps } from 'react-native';

type TPressableProps = {
  type: 'primary' | 'secondary';
  size?: number;
} & PressableProps;

export const PressableButton = styled.Pressable<TPressableProps>`
  background-color: ${({ type }) => (type === 'primary' ? 'green' : 'red')};
  width: 100%;
    padding: 8px;
    border-radius: 40px;
    margin-top: 5%;
    transition: .4s;
`;

export const Title = styled.Text`
    color: #ffffff;
    font-family: "Gabarito-Bold"
`