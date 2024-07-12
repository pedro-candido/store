import { PressableProps } from 'react-native';

import styled from 'styled-components/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type TPressableProps = {
  type: 'primary' | 'secondary';
  size?: number;
} & PressableProps;

export const PressableButton = styled.Pressable<TPressableProps>`
  background-color: ${({ type }) => (type === 'primary' ? '#005a54' : '#A50021')};
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  margin-top: 5%;
  transition: 0.4s;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Title = styled.Text`
  color: #ffffff;
  font-family: 'Gabarito-Bold';
`;

export const Icon = styled(MaterialCommunityIcons)`
  color: #ffffff;
  font-size: 18px;
`;
