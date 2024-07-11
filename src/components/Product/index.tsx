import { Image, Pressable, Text, View } from 'react-native';
import { Container } from '@components/Product/Product.styles';
import { TProduct } from '@/types/Product';
import styled from 'styled-components/native';
import Button from '@/components/Button'

import { FontAwesome } from '@expo/vector-icons';
import { useStore } from '@store/globalStore';
import { useEffect } from 'react';

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
  const { addProduct, productsChosen } = useStore()

  function handlePress() {
    addProduct(id)
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
        <Text style={{
          fontFamily: 'Gabarito-Regular'
        }} numberOfLines={2}>{title}</Text>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'center',
            alignItems: 'flex-end'
          }}>
              <RatingContainer>
                <View style={{
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  marginTop: 'auto',
                  marginBottom: 'auto'
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
            <Button iconName={'shopping-cart'} text={"Comprar"} type={"primary"} onPress={handlePress} />
          </View>
        </View>
      </View>

    </Container>
  );
}

export default Product;
