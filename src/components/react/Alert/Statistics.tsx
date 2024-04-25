import { useColorStore } from "../../../store/colorStore.ts";
import Alert from "./Alert";

export default function Statistics() {
  const { color, reply, setRestart, bg } = useColorStore();

  const funExit = () => {
    const lastReply = `#${reply?.[bg]?.join("") || ""}`;

    if (lastReply === color) {
      setRestart();
      return;
    }
  };
  return (
    <Alert title="Estadisticas" funExit={funExit}>
      Hola mundo
    </Alert>
  );
}
