import type { ColorStore, ColorStoreActions } from "./colorStore";

type setRestartProps = (
  store: ColorStore & ColorStoreActions
) => Omit<ColorStore, "color" | "time">;

const setRestart: setRestartProps = (store) => {
  store.setColor();
  return {
    reply: [[]],
    bg: -1,
    btnBg: {},
    alert: 0,
  };
};

export default setRestart;
