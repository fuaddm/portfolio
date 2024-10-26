import { create } from "zustand";

export type sidebarState = {
  isOpen: boolean;
  toggle: () => void;
};

export const useSidebarStore = create<sidebarState>((set) => ({
  isOpen: false,
  toggle: () =>
    set((state) => ({
      isOpen: !state.isOpen,
    })),
}));
