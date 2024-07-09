import { type StateCreator } from 'zustand'

export interface ICounterStore {
  count: number
  increaseCount: () => void
}

export const createCounterSlice: StateCreator<ICounterStore> = (set) => {
  return ({
    count: 0,
    increaseCount: () => set((state) => ({
      count: state.count + 1
    })),
    removeCount: () => set((state) => ({
      count: state.count - 1
    }))
  })
}
