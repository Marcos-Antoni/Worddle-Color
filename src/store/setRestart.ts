import type { ColorStore, ColorStoreActions } from "./colorStore";

type setRestartProps = (
  store: ColorStore & ColorStoreActions,
  alert: number
) => Omit<ColorStore, "color" | "time">;

const setRestart: setRestartProps = (store, alert) => {
  store.setColor();
  return {
    reply: [[]],
    bg: -1,
    btnBg: {},
    alert,
  };
};

export default setRestart;
