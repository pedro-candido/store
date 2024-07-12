import React from 'react';

import { render } from '@testing-library/react-native';
import 'jest-styled-components';

import Label from './';

describe('Label', () => {
  it('should match snapshot', () => {
    const testRenderer = render(<Label children={'Hello World'} />);

    expect(testRenderer).toMatchSnapshot();
  });
});
