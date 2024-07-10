import { Image, Pressable, Text, View } from 'react-native';
import { Container } from '@components/Product/Product.styles';
import { TProduct } from '@/types/Product';
import styled from 'styled-components/native';
import Button from '@/components/Button'

import { FontAwesome } from '@expo/vector-icons';

const Picture = styled.Image`
    width: 150px;
    height: 150px;
    margin-bottom: 10px;
    border-radius: 5px;
`

const PriceContainer = styled.View`
    flex-direction: row;
    justify-content: flex-start;
`

const RatingContainer = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 5%;
`


function Product({ id, title, price, category, description, image, rating }: TProduct) {
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
        <Text numberOfLines={2}>{title}</Text>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
            <View>
              <RatingContainer style={{
              }}>
                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center'
                }}>
                  <FontAwesome name={'star'} style={{
                    color: '#fdc509',
                  }} />
                  <Text>{rating.rate}({rating.count})</Text>
                </View>
              </RatingContainer>
              <PriceContainer>
                <Text>R$ {String(price.toFixed(2)).replace('.', ',')}</Text>
              </PriceContainer>
            </View>
            <View>
              <Button iconName={'cart-plus'} type={"primary"} onPress={() => {}} />
            </View>
          </View>
        </View>
      </View>

    </Container>
  );
}

export default Product;
