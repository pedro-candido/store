import { Image, Pressable, Text, View } from 'react-native';
import { Container } from '@components/Product/Product.styles';
import { TProduct } from '@/types/Product';

function Product({
                          id,
                          title,
                          price,
                          category,
                          description,
                          image,
                          rating
                        }: TProduct) {
return <Container>
  <View>
    <Image source={{
      uri: image
    }}
      width={200}
           height={200}
    />
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