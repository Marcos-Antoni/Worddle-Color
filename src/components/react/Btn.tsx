import { useColorStore } from "../../store/colorStore.ts";

interface BtnProps {
  children: React.ReactNode;
  alert: number;
}

export default function Btn({ children, alert }: BtnProps) {
  const { setAlert } = useColorStore();

  return (
    <button
      className="fill-[#878a8c]"
      onClick={() => setAlert(alert)}>
      {children}
    </button>
  );
}
