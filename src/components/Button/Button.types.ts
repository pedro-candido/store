import { FontAwesome } from '@expo/vector-icons';
import { PressableProps } from 'react-native';

export interface IButtonProps extends PressableProps {
  type: 'primary' | 'secondary';
  size?: number;
  text?: string;
  iconName?: keyof typeof FontAwesome.glyphMap
};
