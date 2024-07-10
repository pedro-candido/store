import { Image, View } from 'react-native';

function ListEmptyComponent() {
  return <View style={{
    flex: 1, marginHorizontal: 'auto'
  }}><Image width={50} height={50} source={{
    uri: "https://i.gifer.com/ZKZg.gif"
  }} />
  </View>
}

export default ListEmptyComponent