import { TProduct } from '@/types/Product';
import { TProductsChosen } from '@store/products.store';

export interface IUseProducts {
  getProducts: () => Promise<void>;
  error: boolean;
  products: TProduct[] | [];
  hasProductOnCart: (productId: number, productsChosen: TProductsChosen[]) => boolean;
}
