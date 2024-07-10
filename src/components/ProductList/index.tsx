import { FlashList } from '@shopify/flash-list';
import { IProductList } from '@components/ProductList/ProductList.types';
import Product from '@components/Product';
import { Dimensions, Image, View } from 'react-native';
import { TProduct } from '@/types/Product';
import { useStore } from '@store/globalStore';
import ListEmptyComponent from '@components/ListEmptyComponent/ListEmptyComponent';
import styled from 'styled-components/native';

const Container = styled.View`
    height: 90%;
    width: ${Dimensions.get('screen').width};
`

function ProductList({
                       products
                     }: IProductList) {

  return (
    <View style={{ height: '90%', width: Dimensions.get('screen').width, }}>
        <FlashList ListEmptyComponent={ListEmptyComponent} estimatedItemSize={200} renderItem={({ item }: { item: TProduct }) => <Product {...item} />}
                     data={products} numColumns={2} contentContainerStyle={{
                       padding: 20,
        }} />
    </View>
  );
}

export { ProductList };
