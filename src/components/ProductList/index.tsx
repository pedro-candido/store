import { FlashList } from '@shopify/flash-list';
import { IProductList } from '@components/ProductList/ProductList.types';
import Product from '@components/Product';
import { Dimensions, View } from 'react-native';
import { TProduct } from '@/types/Product';
import { useStore } from '@store/globalStore';

function ProductList({
                       products
                     }: IProductList) {

  return (
    <View style={{ height: '90%', width: Dimensions.get('screen').width, }}>
      {products
        ? <FlashList estimatedItemSize={200} renderItem={({ item }: { item: TProduct }) => <Product {...item} />}
                     data={products} numColumns={2} />
        : null}
    </View>
  );
}

export { ProductList };
