import AddedProductsList from '@components/AddedProductsList';
import { Container, Title } from '@screens/Cart/Cart.styles.ts';
import { useStore } from '@store/globalStore';

function Cart() {
  const { productsChosen } = useStore();

  return (
    <Container>
      {productsChosen.length === 0 && <Title>Ops, não há produtos</Title>}
      {productsChosen.length !== 0 && <AddedProductsList />}
    </Container>
  );
}

export default Cart;
