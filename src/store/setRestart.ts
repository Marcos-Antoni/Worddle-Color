import type { ColorStore, ColorStoreActions } from "./colorStore";

interface ReturnProps {
  reply: string[][];
  bg: number;
  btnBg: Record<string, null | string>;
  // alert: number;
}

type setRestartProps = (
  store: ColorStore & ColorStoreActions
) => ReturnProps;

const setRestart: setRestartProps = (store) => {
  store.setColor(store.row);
  return {
    reply: [[]],
    bg: -1,
    btnBg: {},
    // alert: 0,
  };
};

export default setRestart;
