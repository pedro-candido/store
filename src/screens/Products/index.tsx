import { View } from 'react-native';

import { ProductList } from '@components/ProductList';
import { useProducts } from '@hooks/useProducts';

function Products() {
  const { products } = useProducts();

  return (
    <View>
      <ProductList products={products} />
    </View>
  );
}

export default Products;
