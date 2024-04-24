import type { ColorStore, ColorStoreActions } from "./colorStore";

interface ObjetSendProps {
  editable: string[][];
  lastRow: number;
  lastCol: number;
  store: ColorStore & ColorStoreActions;
}

type setSendProps = ({}: ObjetSendProps) =>
  | [string[][], number]
  | [string[][]];

const setSend: setSendProps = ({
  editable,
  lastRow,
  lastCol,
  store,
}) => {
  if (lastCol === 6) {
    editable[lastRow + 1] = [];
    return [editable, 1];
  } else return [editable];
};

export default setSend;
