import { Dimensions, Image, View } from 'react-native';

import { FlashList } from '@shopify/flash-list';

import { TProduct } from '@/types/Product';
import Index from '@components/ListEmptyComponent';
import Product from '@components/Product';
import { Container } from '@components/ProductList/ProductList.styles';
import { IProductList } from '@components/ProductList/ProductList.types';

function ProductList({ products }: IProductList) {
  return (
    <Container>
      <FlashList
        bounces={false}
        ListEmptyComponent={Index}
        estimatedItemSize={200}
        renderItem={({ item }: { item: TProduct }) => <Product {...item} />}
        data={products}
        numColumns={2}
        contentContainerStyle={{ padding: 20 }}
      />
    </Container>
  );
}

export { ProductList };
