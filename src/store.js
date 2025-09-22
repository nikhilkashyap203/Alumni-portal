import { create } from 'zustand';

const useFilterStore = create((set) => ({
  state: '',
  field: '',
  college: '',
  setState: (state) => set({ state }),
  setField: (field) => set({ field }),
  setCollege: (college) => set({ college }),
}));

export default useFilterStore;