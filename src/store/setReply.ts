import setSend from "./setSend";
import type { ColorStore, ColorStoreActions } from "./colorStore";

type setReplyType = (
  button: string,
  store: ColorStore & ColorStoreActions
) => { reply: string[][] };

interface ObjetProps {
  editable: string[][];
  lastRow: number;
  lastCol: number;
  button: string;
  store: ColorStore & ColorStoreActions;
}

interface ActionsProps {
  [key: string]: ({}: ObjetProps) =>
    | [string[][], number]
    | [string[][]];
}

const actions: ActionsProps = {
  enviar: ({ editable, lastRow, lastCol, store }) =>
    setSend({ editable, lastRow, lastCol, store }),

  borrar: ({ editable, lastRow }) => {
    editable[lastRow] = editable[lastRow].slice(0, -1);
    return [editable];
  },

  default: ({ editable, lastRow, lastCol, button }) => {
    if (lastCol === 6) {
      return [editable];
    } else {
      editable[lastRow][lastCol] = button;
      return [editable];
    }
  },
};

const SetReply: setReplyType = (button, store) => {
  let editable = [...store.reply];
  const lastRow = store.reply.length - 1;
  const lastCol = store.reply[lastRow]?.length;

  const action = actions[button] || actions.default;

  const [reply, bg] = action({
    editable,
    lastRow,
    lastCol,
    button,
    store,
  });

  return {
    reply,
    bg: bg ? bg + store.bg : store.bg,
  };
};

export default SetReply;
