import React from 'react';

import { renderHook } from '@testing-library/react-hooks';
import { waitFor } from '@testing-library/react-native';

import { useProducts } from '@/hooks';

const setState = jest.fn();

describe('useProducts', () => {
  it('fetches products successfully', async () => {
    const { result } = renderHook(() => useProducts());

    await waitFor(() => {
      result.current.getProducts();
    });

    expect(result.current.products).toBeDefined();
    expect(result.current.error).toBe(false);
  });
  it('should indicate if a product is in the cart', () => {
    const { result } = renderHook(() => useProducts());

    const productsChosen = [
      {
        productId: 1,
        title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        price: 109.95,
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        productTestId: '',
      },
    ];

    expect(result.current.hasProductOnCart(1, productsChosen)).toBe(true);
    expect(result.current.hasProductOnCart(2, productsChosen)).toBe(false);
  });
});
