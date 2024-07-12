import { useEffect, useState } from 'react';

import { api } from '@/api';
import { IUseProducts } from '@hooks/hooks.types';
import { TProductsChosen } from '@store/products.store';

function useProducts(): IUseProducts {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      const { data } = await api.get('/products');
      setProducts(data);
      setError(false);
    } catch (err) {
      console.log(err);
      setError(true);
    }
  }

  function hasProductOnCart(productId: number, productsChosen: TProductsChosen[]) {
    return !!productsChosen.find((item) => item.productId === productId);
  }

  return {
    getProducts,
    error,
    products,
    hasProductOnCart,
  };
}

export { useProducts };
