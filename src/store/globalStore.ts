import { create } from 'zustand';

import { createProductsSlice } from './products.store';

export const useStore = create<ReturnType<typeof createProductsSlice>>()((...a) => ({
  ...createProductsSlice(...a),
}));
