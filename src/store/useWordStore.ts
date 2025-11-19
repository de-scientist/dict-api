import { create } from "zustand";
import { persist } from "zustand/middleware";

interface WordStore {
  word: string;
  setWord: (value: string) => void;
  history: string[];
  addToHistory: (value: string) => void;
}

export const useWordStore = create(
  persist<WordStore>((set) => ({
    word: "",
    setWord: (value) => set({ word: value }),
    history: [],
    addToHistory: (value) => set((state) => ({ history: [value, ...state.history] })),
  }),
  { name: "word-storage" })
);