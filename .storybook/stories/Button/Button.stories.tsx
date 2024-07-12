import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import Button from '@/components/Button';

const ButtonMeta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {},
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default ButtonMeta;

export const Primary: StoryObj<typeof Button> = {
  args: {
    text: 'Full width',
  },
};

export const Secondary: StoryObj<typeof Button> = {
  args: {
    text: 'Full width',
    type: 'secondary',
  },
};

export const Small: StoryObj<typeof Button> = {
  args: {
    text: 'Small',
    style: {
      width: 75,
    },
  },
};

export const Icon: StoryObj<typeof Button> = {
  args: {
    iconName: 'cart',
    style: {
      width: 50,
    },
  },
};

export const IconSecondary: StoryObj<typeof Button> = {
  args: {
    iconName: 'close',
    type: 'secondary',
    style: {
      width: 50,
    },
  },
};
