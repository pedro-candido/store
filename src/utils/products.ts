import { TProductsChosen } from '@store/products.store';

export const hasProductOnCart = (productId: number, productsChosen: TProductsChosen[]) => {
  return productsChosen.find((item) => item.productId === productId);
};
