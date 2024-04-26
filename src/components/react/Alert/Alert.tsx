import { useColorStore } from "../../../store/colorStore.ts";
import Exit from "../../SVG/Exit";

type Props = {
  title: string;
  children: React.ReactNode;
  funExit?: () => void;
};

export default function Alert({
  title,
  children,
  funExit = () => {},
}: Props) {
  const { setAlert } = useColorStore();

  return (
    <div className="absolute flex justify-center items-center w-full h-full bg-[#00000070]">
      <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-4 sm:w-96 w-[90%]">
        <div className="w-full flex justify-end">
          <span
            className="fill-[#878a8c] cursor-pointer hover:fill-[#000000] transition-all duration-300 ease-in-out"
            onClick={() => {
              setAlert(0);
              funExit();
            }}>
            <Exit />
          </span>
        </div>
        <div className="w-full h-auto">
          <h3 className="text-center text-xl font-bold mb-[20px]">
            {title}
          </h3>
          {children}
        </div>
      </div>
    </div>
  );
}
