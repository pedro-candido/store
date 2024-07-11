import styled, { css } from 'styled-components/native';

import { FontAwesome } from '@expo/vector-icons';

import { IButtonProps } from '@components/HeaderItem/HeaderItem.types';

export const PressableButton = styled.Pressable<IButtonProps>`
  ${({ hasMarginRight }) =>
    hasMarginRight
      ? css`
          margin-right: 20px;
        `
      : css`
          margin-left: 10px;
        `};
  border-radius: 20px;
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

export const Icon = styled(FontAwesome)`
  color: #005a54;
  font-size: 24px;
`;
