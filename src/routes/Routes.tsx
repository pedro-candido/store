import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Logo from '@/assets/Logo.svg';
import { Cart, Products } from '@/screens';
import HeaderLeftItem from '@components/HeaderLeftItem';
import HeaderRightItem from '@components/HeaderRightItem';
import { LoggedNavigationParams, LoggedRouters } from '@routes/LoggedRouters';

const { Navigator, Screen } = createStackNavigator<LoggedNavigationParams>();

function Routes() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName={LoggedRouters.PRODUCTS}>
        <Screen
          name={LoggedRouters.PRODUCTS}
          component={Products}
          options={{
            headerTitle: () => <Logo width={100} />,
            headerRight: () => <HeaderRightItem />,
          }}
        />
        <Screen
          name={LoggedRouters.CART}
          component={Cart}
          options={{
            headerLeft: () => <HeaderLeftItem />,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;
