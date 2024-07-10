import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoggedNavigationParams, LoggedRouters } from '@routes/LoggedRouters';
import { Cart, Products } from '@/screens';

const { Navigator, Screen } = createStackNavigator<LoggedNavigationParams>();

function Routes() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName={LoggedRouters.PRODUCTS}>
        <Screen name={LoggedRouters.PRODUCTS} component={Products} />
        <Screen name={LoggedRouters.CART} component={Cart} />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;
