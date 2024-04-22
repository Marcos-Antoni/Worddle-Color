import { create } from "zustand";
import SetColor from "./setColor";
import SetReply from "./setReply";

interface ColorStore {
  color: string;
  reply: string[][];
  bg: number;
}

interface ColorStoreActions {
  setColor: (number?: number) => void;
  setReply: (button: string) => void;
}

export const useColorStore = create<ColorStore & ColorStoreActions>(
  (set) => ({
    color: SetColor(),
    reply: [[]],
    bg: -1,

    setColor: (newNum) => set(() => ({ color: SetColor(newNum) })),
    setReply: (button) => set((e) => SetReply(button, e.reply, e.bg)),
  })
);
