import * as React from 'react';

import { fireEvent, render, screen } from '@testing-library/react-native';

import { testIds } from '@/constants/testIds';

import Products from './';

const { cartButton } = testIds;

const mockedNavigate = jest.fn;

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: mockedNavigate,
      dispatch: jest.fn(),
    }),
    useRoute: () => ({
      params: {
        productId: 1,
      },
    }),
  };
});

describe('Products', () => {
  it('should copy screen', () => {
    const testrenderer = render(<Products />);

    expect(testrenderer.toJSON()).toMatchSnapshot();
  });
});
