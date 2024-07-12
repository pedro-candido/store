import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import Product from '@/components/Product';
import { products } from '@/__mocks__/productsMock';

const ProductMeta: Meta<typeof Product> = {
  title: 'Product',
  component: Product,
  args: {
    children: 'Hello world',
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, width: '50%' }}>
        <Story />
      </View>
    ),
  ],
};

export default ProductMeta;

export const Default: StoryObj<typeof Product> = {
  args: {
    ...products[0],
  },
};
