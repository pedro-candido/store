import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import Label from '@/components/Label';

const LabelMeta: Meta<typeof Label> = {
  title: 'Label',
  component: Label,
  args: {
    children: 'Hello world',
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default LabelMeta;

export const Regular: StoryObj<typeof Label> = {
  args: {
    style: {
      fontFamily: 'Gabarito-Regular',
    },
  },
};

export const Medium: StoryObj<typeof Label> = {
  args: {
    color: '#000',
    style: {
      fontFamily: 'Gabarito-Medium',
    },
  },
};

export const Bold: StoryObj<typeof Label> = {
  args: {
    color: '#000',
    style: {
      fontFamily: 'Gabarito-Bold',
    },
  },
};

export const Black: StoryObj<typeof Label> = {
  args: {
    color: '#000',
    style: {
      fontFamily: 'Gabarito-Black',
    },
  },
};

export const ExtraBold: StoryObj<typeof Label> = {
  args: {
    color: '#000',
    style: {
      fontFamily: 'Gabarito-ExtraBold',
    },
  },
};

export const SemiBold: StoryObj<typeof Label> = {
  args: {
    color: '#000',
    style: {
      fontFamily: 'Gabarito-SemiBold',
    },
  },
};
