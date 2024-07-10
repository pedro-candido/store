import { IUseProducts } from '@hooks/hooks.types';
import { useEffect, useState } from 'react';
import { api } from '@/api';

function useProducts(): IUseProducts {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
  }, [])

   async function getProducts() {
     try {
       const { data } = await api.get("/products")
       setProducts(data)

       return { success: true }
     } catch(err) {
       console.log(err)
       return { success: false }
     }
  }

  async function getOneProduct(productId: string) {
    const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
    return await response.json()
  }

  async function sortAllProducts() {
    const response = await fetch('https://fakestoreapi.com/products?sort=desc');
    return await response.json();
  }

  async function getAllCategories() {
    const response = await fetch('https://fakestoreapi.com/products/categories');
    return await response.json()
  }

  async function getProductsFromACategory(category: string) {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    return await response.json()
  }

  return {
    getProducts,
    getOneProduct,
    getAllCategories,
    sortAllProducts,
    getProductsFromACategory,
    products,
  };
}

export default useProducts;
