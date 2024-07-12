import {
  Container,
  Picture,
  StyledButton,
  StyledLabel,
} from '@components/AddedProduct/AddedProduct.styles';
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
      <Label numberOfLines={1}>{title}</Label>
      <StyledLabel>{convertNumberToDollar(price)}</StyledLabel>
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
