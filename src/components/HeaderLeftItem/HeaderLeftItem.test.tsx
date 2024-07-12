import React from 'react';

import { fireEvent, render } from '@testing-library/react-native';

import MockedNavigator from '@/__mocks__/MockedNavigator';
import { testIds } from '@constants/testIds';

import HeaderLeftItem from './';

const { backButton } = testIds;

const mockedGoBack = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    goBack: mockedGoBack,
  }),
}));

describe('HeaderLeftItem', () => {
  it('should match snapshot', () => {
    const testRenderer = render(<HeaderLeftItem />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('should press on goback button', () => {
    const { getByTestId } = render(<HeaderLeftItem />);

    const button = getByTestId(backButton);

    fireEvent.press(button);

    expect(mockedGoBack).toHaveBeenCalled();
  });
});
