import React from 'react';

import renderer from 'react-shallow-renderer';

import Products from './';

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
    }),
    useRoute: () => ({
      params: {
        productId: 1,
      },
    }),
  };
});

test('Products', () => {
  renderer.render(<Products />);
  const result = renderer.getRenderOutput();

  expect(result.toJSON()).toMatchSnapshot();
});
