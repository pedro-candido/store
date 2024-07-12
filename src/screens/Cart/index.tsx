import AddedProductsList from '@components/AddedProductsList';
import { Container, ContainerWithoutItems, Title } from '@screens/Cart/Cart.styles.ts';
import { useStore } from '@store/globalStore';

function Cart() {
  const { productsChosen } = useStore();

  if (productsChosen.length === 0) {
    return (
      <ContainerWithoutItems>
        <Title>Ops, parece que você não escolheu nenhum produto</Title>
      </ContainerWithoutItems>
    );
  }
  return (
    <Container>
      <AddedProductsList />
    </Container>
  );
}

export default Cart;
