import { useEffect } from 'react';
import { View } from 'react-native';

import Label from '@components/Label';
import { ProductList } from '@components/ProductList';
import { useProducts } from '@hooks/useProducts/useProducts';
import { Container, LabelText } from '@screens/Products/Products.styles';

function Products() {
  const { products, error, getProducts } = useProducts();

  useEffect(() => {}, [getProducts()]);

  if (!error) {
    return (
      <View>
        <ProductList products={products} />
      </View>
    );
  }

  return (
    <Container>
      <LabelText>Ops, algo deu errado, tente novamente mais tarde</LabelText>
    </Container>
  );
}

export default Products;
