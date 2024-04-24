import { create } from "zustand";
import SetColor from "./setColor";
import SetReply from "./setReply";
import setRestart from "./setRestart";

export interface ColorStore {
  color: string;
  reply: string[][];
  bg: number;
  btnBg: Record<string, null | string>;
  alert: number;
  time: number;
}

export interface ColorStoreActions {
  setColor: (number?: number) => void;
  setReply: (button: string) => void;
  setBtnBg: (button: string, color: string) => void;
  setAlert: (alert: number) => void;
  setRestart: (alert: number) => void;
}

export const useColorStore = create<ColorStore & ColorStoreActions>(
  (set) => ({
    color: SetColor(),
    reply: [[]],
    bg: -1,
    btnBg: {},
    alert: 0,
    time: 2000,

    setColor: (newNum) => set(() => ({ color: SetColor(newNum) })),

    setReply: (button) => set((e) => SetReply(button, e)),

    setBtnBg: (button, color) =>
      set((e) => ({ btnBg: { ...e.btnBg, [button]: color } })),

    setAlert: (alert) => set(() => ({ alert })),

    setRestart: (alert) => set((e) => setRestart(e, alert)),
  })
);
