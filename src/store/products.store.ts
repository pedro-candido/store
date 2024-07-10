import { type StateCreator } from 'zustand';
import { TProduct } from '@/types/Product';

export interface IProductsStore {
  productsChosen: Array<string>;
  products: Array<string>;
  addProduct: () => void;
  setAllProducts: (products: TProduct[]) => void
}

export const createProductsSlice: StateCreator<IProductsStore> = (set) => {
  return {
    addProduct: () => set((state) => ({
      productsChosen: [...state.productsChosen],
    })),
    setAllProducts: () =>
      set((state) => ({
        products: [...state.products],
      })),
    products: [],
    productsChosen: []
  };
};
