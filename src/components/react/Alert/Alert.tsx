import { useColorStore } from "store/colorStore.ts";
import Exit from "components/SVG/Exit";

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function Alert({ title, children }: Props) {
  const { setAlert } = useColorStore();

  return (
    <div className="absolute flex justify-center items-center w-full h-full bg-[#00000070]">
      <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-4 w-96">
        <div className="w-full flex justify-end">
          <span
            className="fill-[#878a8c] cursor-pointer hover:fill-[#000000] transition-all duration-300 ease-in-out"
            onClick={() => setAlert(0)}>
            <Exit />
          </span>
        </div>
        <div className="w-full h-auto">
          <h3 className="text-center text-xl font-bold">{title}</h3>
          {children}
        </div>
      </div>
    </div>
  );
}
