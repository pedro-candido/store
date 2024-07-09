import { create } from 'zustand';
import { createCounterSlice, ICounterStore } from './counter.store';

export const useStore = create<ICounterStore>()((...a) => ({
  ...createCounterSlice(...a),
}));
