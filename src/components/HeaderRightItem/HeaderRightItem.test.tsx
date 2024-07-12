import React from 'react';
import { View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { render, fireEvent, screen } from '@testing-library/react-native';

import { testIds } from '@constants/testIds';
import { LoggedRouters } from '@routes/LoggedRouters';

import HeaderRightItem from './';

const { cartButton } = testIds;
const mockedNavigate = jest.fn();

const Stack = createStackNavigator();

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: mockedNavigate,
  }),
}));

const Component = () => <View>Cart Screen</View>;

const MockNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={'TestScreen'}>
      <Stack.Screen name="TestScreen" component={HeaderRightItem} />
      <Stack.Screen name={LoggedRouters.CART} component={Component} />
    </Stack.Navigator>
  </NavigationContainer>
);

describe('HeaderRightItem', () => {
  it('navigates to CART when pressed', () => {
    render(<MockNavigator />);

    const button = screen.getByTestId(cartButton); // Adjust test ID as needed
    fireEvent.press(button);

    expect(mockedNavigate).toHaveBeenCalled();
  });
});
