import React from 'react';

import { render } from '@testing-library/react-native';
import 'jest-styled-components';

import ListEmptyComponent from './';

describe('ListEmptyComponent', () => {
  it('should match snapshot', () => {
    const testRenderer = render(<ListEmptyComponent />);

    expect(testRenderer).toMatchSnapshot();
  });
});
