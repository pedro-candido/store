import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react-native'

import { ProductList } from './'
import { testIds } from '@constants/testIds'
import { useCart } from '@hooks/index'
import { products } from '@/__mocks__/productsMock';
const { removeFromCartButton, addToCartButton } = testIds

const { addProduct, removeProductFromCart } = useCart()

describe('Product List', () => {
  it('should match snapshot', () => {
    const testRenderer = TestRenderer.create(<ProductList products={products} />)

    expect(testRenderer).toMatchSnapshot()
  })
  it('should add product to cart', ()=>{
    const { getByTestId } = render(<ProductList products={products} />)

    const addCart = getByTestId(`${addToCartButton}_0`)

    fireEvent.press(addCart)

    expect(addProduct).toHaveBeenCalledWith(`${addToCartButton}_0`)
  })

  it('should remove product from cart', ()=>{
    const { getByTestId } = render(<ProductList products={products} />)

    const removeCart = getByTestId(`${removeFromCartButton}_0`)

    fireEvent.press(removeCart)

    expect(removeProductFromCart).toHaveBeenCalledWith(`${removeFromCartButton}_0`)
  })

})