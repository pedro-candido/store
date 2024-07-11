import { useEffect } from 'react';
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
import { useStore } from '@store/globalStore';
import { convertNumberToDollar } from '@utils/formatter';
import { hasProductOnCart } from '@utils/products';

const { productTestId } = testIds;

function Product({ id, title, price, category, description, image, rating }: TProduct) {
  const { addProduct, productsChosen } = useStore();
  const isProductAlreadyAddedToCard = hasProductOnCart(id, productsChosen);

  function handlePress() {
    addProduct({
      productId: id,
      productTestId: `${productTestId}${id}`,
      image,
      price,
      title,
    });
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
            {!isProductAlreadyAddedToCard && (
              <Button iconName={'cart'} text={'Add to Cart'} onPress={handlePress} />
            )}
            {isProductAlreadyAddedToCard && (
              <Button
                type={'secondary'}
                iconName={'cart-remove'}
                text={'Remove'}
                onPress={handlePress}
              />
            )}
          </View>
        </View>
      </View>
    </Container>
  );
}

export default Product;
