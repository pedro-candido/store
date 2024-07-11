import { Container, Picture, StyledButton } from '@components/AddedProduct/AddedProduct.styles';
import Label from '@components/Label';
import { TProductsChosen } from '@store/products.store';
import { convertNumberToDollar } from '@utils/formatter';

function AddedProduct({ image, price, title }: TProductsChosen) {
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
      <StyledButton type={'secondary'} iconName={'close'} />
    </Container>
  );
}

export default AddedProduct;
