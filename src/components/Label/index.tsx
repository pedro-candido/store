import { TextProps } from 'react-native';

import { Text } from '@components/Label/Label.styles';

function Label(props: TextProps) {
  return <Text {...props} />;
}

export default Label;
