import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';

import HeaderItem from '@components/HeaderItem';
import { testIds } from '@constants/testIds';
import { LoggedNavigationParams } from '@routes/LoggedRouters';

const { backButton } = testIds;

function HeaderLeftItem() {
  const { goBack } = useNavigation<StackNavigationProp<LoggedNavigationParams>>();

  const handlePress = () => {
    goBack();
  };

  return <HeaderItem testID={backButton} iconName={'chevron-left'} onPress={handlePress} />;
}

export default HeaderLeftItem;
