import { useEffect, useState } from 'react';

import { api } from '@/api';
import { IUseProducts } from '@hooks/hooks.types';
import { TProductsChosen } from '@store/products.store';

function useProducts(): IUseProducts {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      console.warn('products');
      const { data } = await api.get('/products');
      setProducts(data);
      return { success: true };
    } catch (err) {
      console.log(err);
      return { success: false };
    }
  }

  async function getOneProduct(productId: string) {
    const response = await fetch(`products/${productId}`);
    return await response.json();
  }

  async function sortAllProducts() {
    const response = await fetch('https://fakestoreapi.com/products?sort=desc');
    return await response.json();
  }

  async function getAllCategories() {
    const response = await fetch('https://fakestoreapi.com/products/categories');
    return await response.json();
  }

  async function getProductsFromACategory(category: string) {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    return await response.json();
  }

  function hasProductOnCart(productId: number, productsChosen: TProductsChosen[]) {
    return !!productsChosen.find((item) => item.productId === productId);
  }

  return {
    getProducts,
    getOneProduct,
    getAllCategories,
    sortAllProducts,
    getProductsFromACategory,
    products,
    hasProductOnCart,
  };
}

export { useProducts };
