import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';

import HeaderItem from '@components/HeaderItem';
import { testIds } from '@constants/testIds';
import { LoggedNavigationParams, LoggedRouters } from '@routes/LoggedRouters';

const { cartButton } = testIds;

function HeaderRightItem() {
  const { navigate } = useNavigation<StackNavigationProp<LoggedNavigationParams>>();

  const handlePress = () => {
    navigate(LoggedRouters.CART);
  };

  return (
    <HeaderItem
      testID={cartButton}
      hasMarginRight={true}
      iconName={'shopping-cart'}
      onPress={handlePress}
    />
  );
}

export default HeaderRightItem;
