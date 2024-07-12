import React from 'react';

import { render } from '@testing-library/react-native';

import { Header } from './';

describe('Header', () => {
  it('should match snapshot', () => {
    const testRenderer = render(<Header />);

    expect(testRenderer).toMatchSnapshot();
  });
});
