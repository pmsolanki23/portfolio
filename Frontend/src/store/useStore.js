import { create } from "zustand";

export const useStore = create((set) => ({
  projects: [],
  setProjects: (data) => set({ projects: data }),
}));