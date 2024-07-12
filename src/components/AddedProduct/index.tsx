import { Container, Picture, StyledButton } from '@components/AddedProduct/AddedProduct.styles';
import Label from '@components/Label';
import { useStore } from '@store/globalStore';
import { TProductsChosen } from '@store/products.store';
import { convertNumberToDollar } from '@utils/formatter';

function AddedProduct({ productId, image, price, title, productTestId }: TProductsChosen) {
  const { removeProduct } = useStore();

  const handlePress = () => {
    removeProduct(productId);
  };

  return (
    <Container>
      <Picture source={{ uri: image }} />
      <Label
        numberOfLines={1}
        style={{
          width: 100,
        }}
      >
        {title}
      </Label>
      <Label>{convertNumberToDollar(price)}</Label>
      <StyledButton
        testID={productTestId}
        onPress={handlePress}
        type={'secondary'}
        iconName={'close'}
      />
    </Container>
  );
}

export default AddedProduct;
