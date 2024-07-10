import { FontAwesome } from '@expo/vector-icons';

export type TButtonProps = {
  type: 'primary' | 'secondary';
  size?: number;
  text?: string;
  iconName?: keyof typeof FontAwesome.glyphMap
};
