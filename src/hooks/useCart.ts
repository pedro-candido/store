import { IUseCart, IAddProduct, IRemoveProduct } from '@hooks/hooks.types';

/**
 * A função addProduct é responsável por adicionar produtos ao carrinho.
 * @constructor
 */
function useCart(): IUseCart {
  function addProduct({ productId, productTestId }: IAddProduct) {}

  function removeProductFromCart({ productId, productTestId }: IRemoveProduct) {}

  return {
    removeProductFromCart,
    addProduct,
  };
}

export default useCart;
