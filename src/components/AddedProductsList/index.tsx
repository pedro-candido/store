import { FlashList } from '@shopify/flash-list';

import AddedProduct from '@components/AddedProduct';
import { useStore } from '@store/globalStore';

function AddedProductsList() {
  const { productsChosen } = useStore();

  return (
    <>
      <FlashList
        data={productsChosen}
        estimatedItemSize={20}
        renderItem={({ item }) => <AddedProduct {...item} />}
      />
    </>
  );
}

export default AddedProductsList;
