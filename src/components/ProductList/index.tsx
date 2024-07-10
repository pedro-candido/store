import { FlashList } from '@shopify/flash-list';
import { IProductList } from '@components/ProductList/ProductList.types';
import Product from '@components/Product';
import { Dimensions, View } from 'react-native';
import { TProduct } from '@/types/Product';

function ProductList({
                       products
                     }: IProductList) {
  return (
    <View style={{ height: '90%', width: Dimensions.get('screen').width }}>
      {products
        ? <FlashList renderItem={({ item }: { item: TProduct }) => <Product {...item} />}
                     data={products} es />
        : null}
    </View>
  );
}

export { ProductList };
