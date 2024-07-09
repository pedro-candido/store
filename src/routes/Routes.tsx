import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LoggedNavigationParams, LoggedRouters } from '@routes/LoggedRouters';
import { Cart, Products } from '@/screens';

const { Navigator, Screen } = createStackNavigator<LoggedNavigationParams>()

function Routes() {
  return(
    <NavigationContainer>
      <Navigator>
        <Screen name={LoggedRouters.CART} component={Cart} />
        <Screen name={LoggedRouters.PRODUCTS} component={Products} />
      </Navigator>
    </NavigationContainer>
  )
}