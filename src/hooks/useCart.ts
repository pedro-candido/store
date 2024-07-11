import { IUseCart, IAddProduct, IRemoveProduct } from '@hooks/hooks.types';
import { useStore } from '@store/globalStore';

/**
 * A função addProduct é responsável por adicionar produtos ao carrinho.
 * @constructor
 */
function useCart(): IUseCart {
  const { addProduct: addProductAction, removeProduct: removeProductAction } = useStore();
  function addProduct({ productId, productTestId, image, price, title }: IAddProduct) {
    addProductAction({ productId, productTestId, image, price, title });
  }

  function removeProductFromCart({ productId }: IRemoveProduct) {
    removeProductAction(productId);
  }

  return {
    removeProductFromCart,
    addProduct,
  };
}

export default useCart;
