import { create } from 'zustand';

// Lưu state
type State = {
  data: string;
};

type Action = {
  changeData: (data: string) => void;
};

export const useStoreCharInstagram = create<State & Action>((set) => ({
  changeData: (data) => set(() => ({ data: data })),
  data: '',
}));
