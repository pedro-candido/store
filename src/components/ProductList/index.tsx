
import { testIds } from '@constants/testIds'
import { FlashList } from '@shopify/flash-list'
import { IProductList } from '@components/ProductList/ProductList.types';
import Product from '@components/Product';

function ProductList({ products }:IProductList) {
  return (
    <FlashList renderItem={({
      item
                            }) => <Product {...item} />} data={products} />
  )
}

export { ProductList }