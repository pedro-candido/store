import { Text, View } from 'react-native';
import Product from '@components/Product';

function Products() {
  return <View>
    <Text>Tela de produtos</Text>
    <Product id={1} title={"Produto"} price={10} description={"produto"} category={"qualquer"} image={"https://static.vecteezy.com/system/resources/thumbnails/027/254/720/small_2x/colorful-ink-splash-on-transparent-background-png.png"} rating={{
      rate: 4.0,
      count: 500
    }} />
  </View>
}

export default Products