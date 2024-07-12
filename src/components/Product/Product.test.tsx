import React from 'react';

import { fireEvent, render } from '@testing-library/react-native';

import { products } from '@/__mocks__/productsMock';
import { testIds } from '@constants/testIds';

import Product from './index';

const item = products[0];

const mockedRemoveProduct = jest.fn();
const mockedAddProduct = jest.fn();
const mockedHasProduct = jest.fn();

const { productTestId } = testIds;

jest.mock('@store/globalStore', () => ({
  useStore: () => ({
    removeProduct: mockedRemoveProduct,
    addProduct: mockedAddProduct,
  }),
}));

jest.mock('@hooks/useProducts/useProducts', () => ({
  useProducts: () => ({
    hasProductOnCart: mockedHasProduct,
  }),
}));

describe('Product', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('should match snapshot', () => {
    const testRenderer = render(<Product {...item} />);

    expect(testRenderer.toJSON).toMatchSnapshot();
  });
  it('should press on add button', () => {
    const { getByTestId } = render(<Product {...item} />);
    const addButton = getByTestId(`add-${productTestId}${item.id}`);
    fireEvent.press(addButton);

    expect(mockedAddProduct).toHaveBeenCalled();
  });
});

describe('Product with remove', () => {
  beforeEach(() => {
    mockedHasProduct.mockImplementation(() => true);
  });

  it('should press on remove button', () => {
    const { getByTestId } = render(<Product {...item} />);

    const button = getByTestId(`remove-${productTestId}${item.id}`);

    fireEvent.press(button);

    expect(mockedRemoveProduct).toHaveBeenCalled();
  });
});
