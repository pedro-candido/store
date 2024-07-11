import { Icon, PressableButton, Title } from '@components/HeaderItem/HeaderItem.styles';
import { IButtonProps } from '@components/HeaderItem/HeaderItem.types';

function HeaderItem({
  type = 'primary',
  text,
  iconName,
  hasMarginRight = false,
  ...rest
}: IButtonProps) {
  return (
    <PressableButton
      style={({ pressed }) => (pressed ? { opacity: 0.8 } : {})}
      type={type}
      hasMarginRight={hasMarginRight}
      {...rest}
    >
      {text && <Title>{text}</Title>}
      {iconName && <Icon name={iconName} />}
    </PressableButton>
  );
}

export default HeaderItem;
