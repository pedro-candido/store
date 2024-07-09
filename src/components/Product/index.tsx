import { Image, Pressable, Text, View } from 'react-native';
import { Container } from '@components/Product/Product.styles';

type TProduct = {
  id: number
  title: string
  price: string
  category: string
  description: string
  image: string
}

function Product({
                          id,
                          title,
                          price,
                          category,
                          description,
                          image
                        }: TProduct) {
return <Container>
  <View>
    <Image source={require('image')} />
  </View>
  <View>
    <Text>
      {title}
    </Text>
    <Text>
      {price}
    </Text>
  </View>
  <View>
    <Pressable onPress={() => {}}>
      <Text>
        Adicionar Produto
      </Text>
    </Pressable>
  </View>
</Container>
}

export default Product