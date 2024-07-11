import { AxiosResponse } from 'axios';

import { TProduct } from '@/types/Product';

export interface IAddProduct {
  productId: number;
  productTestId: string;
  image: string;
  price: number;
  name: string;
}

export interface IRemoveProduct {
  productId: string;
  productTestId: string;
}

export interface IUseCart {
  addProduct: ({ productId, productTestId }: IAddProduct) => void;
  removeProductFromCart: ({ productId, productTestId }: IRemoveProduct) => void;
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
