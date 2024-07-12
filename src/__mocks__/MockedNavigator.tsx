import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

type Params = {
  component: React.ComponentType<any>;
  [key: string]: any;
};

const MockedNavigator = ({ component, params = {} }: Params) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MockedScreen" component={component} initialParams={params} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MockedNavigator;
