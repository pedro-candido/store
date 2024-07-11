import { AxiosResponse } from 'axios';

import { TProduct } from '@/types/Product';

export interface IAddProduct {
  productId: number;
  productTestId: string;
  image: string;
  price: number;
  title: string;
}

export interface IRemoveProduct {
  productId: number;
}

export interface IUseCart {
  addProduct: ({ productId, productTestId }: IAddProduct) => void;
  removeProductFromCart: ({ productId }: IRemoveProduct) => void;
}

export interface IUseProducts {
  getProducts: () => Promise<{
    success: boolean;
  }>;
  getOneProduct: (productId: string) => Promise<AxiosResponse<TProduct>>;
  sortAllProducts: () => Promise<AxiosResponse<TProduct[]>>;
  getAllCategories: () => Promise<AxiosResponse<TProduct[]>>;
  getProductsFromACategory: (category: string) => Promise<AxiosResponse<TProduct>>;
  products: TProduct[] | [];
}
