import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';

import HeaderItem from '@components/HeaderItem';
import { LoggedNavigationParams } from '@routes/LoggedRouters';

function HeaderLeftItem() {
  const { goBack } = useNavigation<StackNavigationProp<LoggedNavigationParams>>();

  const handlePress = () => {
    goBack();
  };

  return <HeaderItem iconName={'chevron-left'} onPress={handlePress} />;
}

export default HeaderLeftItem;
