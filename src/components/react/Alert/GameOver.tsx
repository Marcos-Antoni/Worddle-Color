import Alert from "./Alert";
import { useColorStore } from "../../../store/colorStore.ts";

export default function Statistics() {
  const { color, setRestart } = useColorStore();
  return (
    <Alert
      title="Game Over"
      funExit={() => {
        setRestart();
      }}>
      <div>
        <div
          className="w-full h-[75px] rounded-lg flex justify-center items-center"
          style={{ background: color }}>
          <p className="text-center bg-white text-2xl rounded-lg px-[20px]">
            {color}
          </p>
        </div>
      </div>
    </Alert>
  );
}
