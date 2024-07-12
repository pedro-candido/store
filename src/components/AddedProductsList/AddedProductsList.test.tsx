import React from 'react';
import { View } from 'react-native';

import { render } from '@testing-library/react-native';

import { products } from '@/__mocks__/productsMock';
import { convertNumberToDollar } from '@utils/formatter';

import AddedProductsList from './index';

describe('AddedProductsList', () => {
  it('should match snapshot', () => {
    const testRenderer = render(<AddedProductsList />);

    expect(testRenderer.toJSON).toMatchSnapshot();
  });
});
