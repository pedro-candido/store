import { Image, View } from 'react-native';

import { FlashList } from '@shopify/flash-list';

import AddedProduct from '@components/AddedProduct';
import Button from '@components/Button';
import Label from '@components/Label';
import { useStore } from '@store/globalStore';

function AddedProductsList({}) {
  const { productsChosen } = useStore();

  return (
    <FlashList
      data={productsChosen}
      estimatedItemSize={20}
      renderItem={({ item }) => <AddedProduct {...item} />}
    />
  );
}

export default AddedProductsList;
