import { IUseProducts } from '@hooks/hooks.types';
import { api } from '@/api';
import { AxiosResponse } from 'axios'

function useProducts(): IUseProducts{
  async function getProducts() {
    return await api.get("/products")
  }

  async function getOneProduct(productId: string) {
    return await api.get(`/products/${productId}`)
  }

  async function sortAllProducts() {
    return await api.get("/products?sort=desc")
  }

  async function getAllCategories() {
    return await api.get("/products/categories")
  }

  async function getProductsFromACategory(category: string) {
    return await api.get(`/products/category/${category}`)
  }

  return {
    getProducts,
    getOneProduct,
    getAllCategories,
    sortAllProducts,
    getProductsFromACategory
  }
}

export default useProducts