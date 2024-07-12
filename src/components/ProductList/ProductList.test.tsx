import React from 'react';

import { render } from '@testing-library/react-native';

import { products } from '@/__mocks__/productsMock';

import { ProductList } from './';

describe('Product List', () => {
  it('should match snapshot', () => {
    const testRenderer = render(<ProductList products={products} />);

    expect(testRenderer).toMatchSnapshot();
  });
});
