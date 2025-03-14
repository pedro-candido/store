import React from 'react';
import { View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { render, fireEvent, screen } from '@testing-library/react-native';

import { testIds } from '@constants/testIds';
import { LoggedRouters } from '@routes/LoggedRouters';

import HeaderLeftItem from './';

const { backButton } = testIds;

const mockedGoBack = jest.fn();

const Stack = createStackNavigator();

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    goBack: mockedGoBack,
  }),
}));

const Component = () => <View>Cart Screen</View>;

const MockNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={'TestScreen'}>
      <Stack.Screen name="TestScreen" component={HeaderLeftItem} />
      <Stack.Screen name={LoggedRouters.CART} component={Component} />
    </Stack.Navigator>
  </NavigationContainer>
);

describe('HeaderLeftItem', () => {
  it('navigates to CART when pressed', () => {
    render(<MockNavigator />);

    const button = screen.getByTestId(backButton); // Adjust test ID as needed
    fireEvent.press(button);

    expect(mockedGoBack).toHaveBeenCalled();
  });
});
