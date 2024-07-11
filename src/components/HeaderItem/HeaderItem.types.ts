import { PressableProps } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

export interface IButtonProps extends PressableProps {
  type?: 'primary' | 'secondary';
  size?: number;
  text?: string;
  iconName?: keyof typeof FontAwesome.glyphMap
  hasMarginRight?: boolean
};
