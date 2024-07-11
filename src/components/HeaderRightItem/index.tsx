import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';

import HeaderItem from '@components/HeaderItem';
import { LoggedNavigationParams, LoggedRouters } from '@routes/LoggedRouters';

function HeaderRightItem() {
  const { navigate } = useNavigation<StackNavigationProp<LoggedNavigationParams>>();

  const handlePress = () => {
    navigate(LoggedRouters.CART);
  };

  return <HeaderItem hasMarginRight={true} iconName={'shopping-cart'} onPress={handlePress} />;
}

export default HeaderRightItem;
