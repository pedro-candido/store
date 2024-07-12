import { View } from 'react-native';

import Label from '@components/Label';
import { ProductList } from '@components/ProductList';
import { useProducts } from '@hooks/useProducts';

function Products() {
  const { products, error } = useProducts();

  if (!error) {
    return (
      <View>
        <ProductList products={products} />
      </View>
    );
  }

  return <Label>Ops, algo deu errado</Label>;
}

export default Products;
