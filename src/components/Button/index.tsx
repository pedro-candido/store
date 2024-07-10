import { Text } from 'react-native';
import {} from 'react-native-vector-icons/';
import { TButtonProps } from '@components/Button/Button.types';
import { PressableButton, Title } from '@components/Button/Button.styles';
import { FontAwesome } from '@expo/vector-icons';


function Button({ type, text, iconName, ...rest }: TButtonProps) {
  return (
    <PressableButton style={({pressed}) => pressed ? { opacity: 0.8 } : {} } type={type} {...rest}>
      {text &&  <Title>{text}</Title>}
      {!text && iconName && <FontAwesome style={{
        color: '#ffffff',
        fontSize: 18
      }} name={iconName} />}
    </PressableButton>
  );
}

export default Button