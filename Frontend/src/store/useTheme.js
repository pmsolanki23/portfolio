import { create } from "zustand";

export const useTheme = create((set) => ({
  dark: true,
  toggleTheme: () => set((state) => ({ dark: !state.dark })),
}));