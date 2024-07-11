import styled from 'styled-components/native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10px;
`;

export const Picture = styled.Image`
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
  border-radius: 5px;
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
`;

export const RatingContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 5%;
  align-items: flex-start;
  margin-bottom: auto;
  align-content: flex-start;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  align-items: flex-end;
`;

export const StarIcon = styled(MaterialCommunityIcons).attrs({
  color: '#fdc509',
  size: 14,
})``;
