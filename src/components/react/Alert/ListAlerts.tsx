import { useColorStore } from "../../../store/colorStore.ts";
import Statistics from "./Statistics";
import Configuration from "./Configuration";
import GameOver from "./GameOver";

type Props = {};

export default function ListAlert({}: Props) {
  const { alert } = useColorStore();

  if (alert == 0) return null;
  if (alert == 1) return <Statistics />;
  if (alert == 2) return <Configuration />;
  if (alert == 3) return <GameOver />;
}
