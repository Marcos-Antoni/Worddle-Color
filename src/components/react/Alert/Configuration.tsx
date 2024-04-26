import { useColorStore } from "../../../store/colorStore.ts";
import Alert from "./Alert";

interface ContainerLabelsProps {
  arrayInputs: number[];
  value: number;
  name: string;
}

export default function Statistics() {
  const { row, col, setRow, setCol, setColor } = useColorStore();
  const inputsRow = [3, 4, 6];
  const inputsCol = [4, 6, 8];

  return (
    <Alert title="Ajustes">
      <form
        className="flex flex-col items-center justify-center w-full h-full"
        onChange={(e) => {
          const { value, name } = e.target as HTMLInputElement;
          const numValue = Number(value);

          if (name === "col") setCol(numValue);
          else {
            setRow(numValue);
            setColor(numValue);
          }
        }}>
        <p className="text-center">Columnas</p>
        <ContainerLabels
          arrayInputs={inputsCol}
          value={col}
          name="col"
        />

        <p className="text-center">Filas</p>
        <ContainerLabels
          arrayInputs={inputsRow}
          value={row}
          name="row"
        />
      </form>
    </Alert>
  );
}

const ContainerLabels = ({
  arrayInputs,
  value,
  name,
}: ContainerLabelsProps) => {
  return (
    <div className="flex items-center justify-evenly w-full mb-[20px]">
      {arrayInputs.map((input) => (
        <label
          key={`key-${name}-${input}`}
          htmlFor={`${name}-${input}`}
          className="flex items-center justify-center w-[70px] h-[70px] border cursor-pointer	rounded-lg"
          style={{
            backgroundColor: value === input ? "#6aaa64" : "#fff",
            color: value === input ? "#fff" : "#000",
          }}>
          <p>{input}</p>
          <input
            className="hidden"
            type="radio"
            id={`${name}-${input}`}
            name={name}
            value={input}
          />
        </label>
      ))}
    </div>
  );
};
