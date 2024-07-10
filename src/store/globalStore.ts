import { create } from 'zustand';
import { createCounterSlice } from './counter.store';
import { createProductsSlice } from './products.store';

export const useStore = create<
  ReturnType<typeof createCounterSlice> & ReturnType<typeof createProductsSlice>>()((...a) => ({
  ...createCounterSlice(...a),
  ...createProductsSlice(...a),
}));
