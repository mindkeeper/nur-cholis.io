import { create } from 'zustand';

interface ActiveLink {
  activeLink: string;
  setActiveLink: (id: string) => void;
}

export const useActiveLinkStore = create<ActiveLink>()((set) => ({
  activeLink: '',
  setActiveLink: (id) => set({ activeLink: id }),
}));
