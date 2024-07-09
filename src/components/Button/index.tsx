import { Text } from 'react-native';
import {  } from 'react-native-vector-icons/';
import { TButtonProps } from '@components/Button/Button.types';
import { PressableButton } from '@components/Button/Button.styles';

function Button({
  type,
  size,
  text
                }: TButtonProps) {
  return (
    <PressableButton type={type} size={size}>
      <Text>{text}</Text>
    </PressableButton>
  )

}