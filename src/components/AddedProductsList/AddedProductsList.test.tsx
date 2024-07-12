import React from 'react';

import { render } from '@testing-library/react-native';

import AddedProductsList from './index';

describe('AddedProductsList', () => {
  it('should match snapshot', () => {
    const testRenderer = render(<AddedProductsList />);

    expect(testRenderer.toJSON).toMatchSnapshot();
  });
});
