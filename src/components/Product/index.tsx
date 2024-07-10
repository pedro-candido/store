import { Image, Pressable, Text, View } from 'react-native';
import { Container } from '@components/Product/Product.styles';
import { TProduct } from '@/types/Product';
import styled from 'styled-components/native';

const Picture = styled.Image`
    width: 150px;
    height: 150px;
    margin-bottom: 10px;
    border-radius: 5px;
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
        <Text numberOfLines={1}>{title}</Text>
        <Text>{price}</Text>
      </View>
      <View>
        <Pressable onPress={() => {}}>
          <Text>Adicionar Produto</Text>
        </Pressable>
      </View>
    </Container>
  );
}

export default Product;
