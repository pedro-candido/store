import { Dimensions, Image, View } from 'react-native';

import styled from 'styled-components/native';

import { FlashList } from '@shopify/flash-list';

import { TProduct } from '@/types/Product';
import ListEmptyComponent from '@components/ListEmptyComponent/ListEmptyComponent';
import Product from '@components/Product';
import { IProductList } from '@components/ProductList/ProductList.types';
import { useStore } from '@store/globalStore';

const Container = styled.View`
  height: 90%;
  width: ${Dimensions.get('screen').width};
`;

function ProductList({ products }: IProductList) {
  return (
    <View style={{ height: '95%', width: Dimensions.get('screen').width }}>
      <FlashList
        bounces={false}
        ListEmptyComponent={ListEmptyComponent}
        estimatedItemSize={200}
        renderItem={({ item }: { item: TProduct }) => <Product {...item} />}
        data={products}
        numColumns={2}
        contentContainerStyle={{ padding: 20 }}
      />
    </View>
  );
}

export { ProductList };
