import { Icon, PressableButton, Title } from '@components/Button/Button.styles';
import { IButtonProps } from '@components/Button/Button.types';

function Button({ type = 'primary', text, iconName, ...rest }: IButtonProps) {
  return (
    <PressableButton
      style={({ pressed }) => (pressed ? { opacity: 0.8 } : {})}
      type={type}
      {...rest}
    >
      {text && <Title>{text}</Title>}
      {iconName && <Icon name={iconName} />}
    </PressableButton>
  );
}

export default Button;
