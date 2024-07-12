import React from 'react';

import { fireEvent, render } from '@testing-library/react-native';

import { products } from '@/__mocks__/productsMock';

import AddedProduct from './index';
const { title, image, price, id } = products[0];

const mockedFn = jest.fn();

jest.mock('@store/globalStore', () => ({
  useStore: () => ({
    removeProduct: mockedFn,
  }),
}));

describe('AddedProduct', () => {
  it('should match snapshot', () => {
    const testRenderer = render(
      <AddedProduct productTestId={''} productId={id} image={image} price={price} title={title} />
    );

    expect(testRenderer.toJSON).toMatchSnapshot();
  });
  it('should press on button', () => {
    const buttonTest = 'button-testId';
    const { getByTestId } = render(
      <AddedProduct
        productTestId={buttonTest}
        productId={id}
        image={image}
        price={price}
        title={title}
      />
    );

    const button = getByTestId(buttonTest);

    fireEvent.press(button);

    expect(mockedFn).toHaveBeenCalled();
  });
});
