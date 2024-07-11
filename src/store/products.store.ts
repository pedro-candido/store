import { type StateCreator } from 'zustand';

import { TProduct } from '@/types/Product';

export type TProductsChosen = {
  productId: number;
  productTestId: string;
  image: string;
  price: number;
  title: string;
};

export interface IProductsStore {
  productsChosen: TProductsChosen[];
  products: string[];
  addProduct: ({ productId, productTestId, image, price }: TProductsChosen) => void;
}

export const createProductsSlice: StateCreator<IProductsStore> = (set) => {
  return {
    addProduct: ({ productId, productTestId, image, price, title }) =>
      set((state) => ({
        productsChosen: [
          ...state.productsChosen,
          {
            productId,
            productTestId,
            image,
            price,
            title,
          },
        ],
      })),
    products: [],
    productsChosen: [],
  };
};
