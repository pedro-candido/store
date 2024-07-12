import React from 'react';

import { fireEvent, render } from '@testing-library/react-native';

import Button from './index';

const mockedFn = jest.fn();

describe('Button', () => {
  it('should match snapshot', () => {
    const testRenderer = render(<Button />);

    expect(testRenderer.toJSON).toMatchSnapshot();
  });
  it('should press on button', () => {
    const buttonTest = 'button-testId';
    const { getByTestId } = render(<Button testID={'button-testId'} onPress={mockedFn} />);

    const button = getByTestId(buttonTest);

    fireEvent.press(button);

    expect(mockedFn).toHaveBeenCalled();
  });
});
