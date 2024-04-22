type setReplyType = (
  button: string,
  useReply: string[][],
  useBg: number
) => { reply: string[][] };

interface ActionsProps {
  [key: string]: (
    editable: string[][],
    lastRow: number,
    lastCol: number,
    button: string
  ) => [string[][], number] | [string[][]];
}

const actions: ActionsProps = {
  enviar: (editable, lastRow, lastCol) => {
    if (lastCol === 6) {
      editable[lastRow + 1] = [];
      return [editable, 1];
    } else {
      return [editable];
    }
  },
  borrar: (editable, lastRow) => {
    editable[lastRow] = editable[lastRow].slice(0, -1);
    return [editable];
  },
  default: (editable, lastRow, lastCol, button) => {
    if (lastCol === 6) {
      return [editable];
    } else {
      editable[lastRow][lastCol] = button;
      return [editable];
    }
  },
};

const SetReply: setReplyType = (button, useReply, useBg) => {
  let editable = [...useReply];
  const lastRow = useReply.length - 1;
  const lastCol = useReply[lastRow]?.length;

  const action = actions[button] || actions.default;

  const [reply, bg] = action(editable, lastRow, lastCol, button);

  return {
    reply,
    bg: bg ? useBg + bg : useBg,
  };
};

export default SetReply;
