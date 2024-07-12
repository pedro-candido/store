import React from 'react';

import { fireEvent, render } from '@testing-library/react-native';

import MockedNavigator from '@/__mocks__/MockedNavigator';
import { testIds } from '@constants/testIds';

import { Header } from './';

describe('Header', () => {
  it('should match snapshot', () => {
    const testRenderer = render(<Header />);

    expect(testRenderer).toMatchSnapshot();
  });
});
