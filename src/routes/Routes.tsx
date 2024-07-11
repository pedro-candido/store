import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoggedNavigationParams, LoggedRouters } from '@routes/LoggedRouters';
import { Cart, Products } from '@/screens';
import { FontAwesome } from '@expo/vector-icons';
import { Pressable } from 'react-native';

const { Navigator, Screen } = createStackNavigator<LoggedNavigationParams>();

const Icon = () => {
  const {navigate} = useNavigation()

  return <Pressable onPressOut={() => navigate(LoggedRouters.CART)}>
    <FontAwesome name={'search'} />
  </Pressable>
}

function Routes() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName={LoggedRouters.PRODUCTS}>
        <Screen options={{
          headerRight: Icon
        }} name={LoggedRouters.PRODUCTS} component={Products} />
        <Screen name={LoggedRouters.CART} component={Cart} />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;
