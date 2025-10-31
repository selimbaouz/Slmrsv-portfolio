import { create } from 'zustand';

interface snippetsFilteredProps {
    searchQuery: string;
    setSearchQuery: (searchQuery: string) => void;
    category: string;
    setCategory: (category: string) => void;
}

export const useSnippetsFiltered = create<snippetsFilteredProps>((set) => ({
    searchQuery: "",
    setSearchQuery: (searchQuery) => set({ searchQuery }),
    category: "All projects",
    setCategory: (category) => set({ category }),
  }))