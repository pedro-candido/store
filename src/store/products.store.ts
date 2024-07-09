import { type StateCreator } from 'zustand'

export interface IProductsStore {
  productsChosen: Array<string>
  setProductsChosen: () => void
}

export const createProductsSlice: StateCreator<IProductsStore> = (set) => {
  return ({
    addProduct: () =>((state) => ({
      productsChosen: [...state.productsChosen]
    })),

  })
}
