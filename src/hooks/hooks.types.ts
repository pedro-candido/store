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

