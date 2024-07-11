import { type StateCreator } from 'zustand';
import { TProduct } from '@/types/Product';

export interface IProductsStore {
  productsChosen: Array<number>;
  products: Array<string>;
  addProduct: (productId: number) => void;
  setAllProducts: (products: TProduct[]) => void
}

export const createProductsSlice: StateCreator<IProductsStore> = (set) => {
  return {
    addProduct: (rest) => set((state) => ({
      productsChosen: [...state.productsChosen, rest],
    })),
    setAllProducts: (rest) =>
      set((state) => ({
        products: [...state.products, ...rest],
      })),
    products: [],
    productsChosen: []
  };
};
