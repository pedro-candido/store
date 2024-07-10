import { Text, View } from 'react-native';
import { ProductList } from '@components/ProductList';
import useProducts from '@hooks/useProducts';

function Products() {
  const { products } = useProducts();

  return (
    <View>
      <Text>Tela de produtos</Text>
      <ProductList products={products} />
    </View>
  );
}

export default Products;
