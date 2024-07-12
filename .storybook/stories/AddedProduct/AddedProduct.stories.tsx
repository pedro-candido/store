import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import AddedProduct from '@/components/AddedProduct';
import { products } from '@/__mocks__/productsMock';

const AddedProductMeta: Meta<typeof AddedProduct> = {
  title: 'AddedProduct',
  component: AddedProduct,
  args: {
    children: 'Hello world',
  },
  decorators: [
    (Story) => (
      <View style={{ justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default AddedProductMeta;

export const Default: StoryObj<typeof AddedProduct> = {
  args: {
    ...products[0],
  },
};
