import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Cart, Products } from '@/screens';
import { Header } from '@components/Header';
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
            header: () => <Header RightIcon={<HeaderRightItem />} />,
          }}
        />
        <Screen
          name={LoggedRouters.CART}
          component={Cart}
          options={{
            header: () => <Header LeftIcon={<HeaderLeftItem />} />,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;
