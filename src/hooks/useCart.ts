import { IUseCart, IAddProduct, IRemoveProduct } from '@hooks/hooks.types';
import { useStore } from '@store/globalStore';

/**
 * A função addProduct é responsável por adicionar produtos ao carrinho.
 * @constructor
 */
function useCart(): IUseCart {
  const { addProduct: addProductAction, productsChosen } = useStore();
  function addProduct({ productId, productTestId, image, price }: IAddProduct) {
    addProductAction(productId, productTestId, image, price);
  }

  function getCart() {
    return productsChosen;
  }

  function removeProductFromCart({ productId, productTestId }: IRemoveProduct) {}

  return {
    removeProductFromCart,
    addProduct,
  };
}

export default useCart;
