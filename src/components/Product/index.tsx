import { View } from 'react-native';

import Button from '@/components/Button';
import { TProduct } from '@/types/Product';
import Label from '@components/Label';
import {
  Container,
  Picture,
  PriceContainer,
  RatingContainer,
  StarIcon,
  Wrapper,
} from '@components/Product/Product.styles';
import { testIds } from '@constants/testIds';
import { useProducts } from '@hooks/useProducts';
import { useStore } from '@store/globalStore';
import { convertNumberToDollar } from '@utils/formatter';

const { productTestId } = testIds;

function Product({ id, title, price, description, image, rating }: TProduct) {
  const { addProduct, productsChosen, removeProduct } = useStore();
  const { hasProductOnCart } = useProducts();

  const isProductAlreadyAddedToCard = hasProductOnCart(id, productsChosen);

  function handlePressPrimary() {
    addProduct({
      productId: id,
      productTestId: `${productTestId}${id}`,
      image,
      price,
      title,
    });
  }

  function handlePressSecondary() {
    removeProduct(id);
  }

  return (
    <Container>
      <View>
        <Picture
          source={{
            uri: image,
          }}
        />
      </View>
      <View>
        <View>
          <Label numberOfLines={2}>
            {title}. {description}
          </Label>
          <Wrapper>
            <RatingContainer>
              <StarIcon name={'star'} />
              <Label>
                {rating.rate}({rating.count})
              </Label>
            </RatingContainer>
            <PriceContainer>
              <Label>{convertNumberToDollar(price)}</Label>
            </PriceContainer>
          </Wrapper>
          <View>
            {!isProductAlreadyAddedToCard ? (
              <Button
                testID={`add-${productTestId}${id}`}
                iconName={'cart'}
                text={'Add to Cart'}
                onPress={handlePressPrimary}
              />
            ) : (
              <Button
                testID={`remove-${productTestId}${id}`}
                type={'secondary'}
                iconName={'cart-remove'}
                text={'Remove'}
                onPress={handlePressSecondary}
              />
            )}
          </View>
        </View>
      </View>
    </Container>
  );
}

export default Product;
