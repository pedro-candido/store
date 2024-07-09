import { AxiosResponse } from 'axios';

export interface IAddProduct {
  productId: string
  productTestId: string
}

export interface IRemoveProduct {
  productId: string
  productTestId: string
}

export interface IUseCart {
  addProduct: ({ productId, productTestId }: IAddProduct) => void
  removeProductFromCart: ({ productId, productTestId }: IRemoveProduct) => void
}

interface IProducts {
  id: number,
  title: string,
  price: string,
  category: string,
  description: string,
  image: string
}

export interface IUseProducts {
  getProducts: () => Promise<AxiosResponse<IProducts>>
  getOneProduct: (productId: string) => Promise<AxiosResponse<IProducts>>
  sortAllProducts: () => Promise<AxiosResponse<IProducts>>
  getAllCategories: () => Promise<AxiosResponse<IProducts>>
  getProductsFromACategory: (category: string) => Promise<AxiosResponse<IProducts>>
}