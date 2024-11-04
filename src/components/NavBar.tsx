import { TbTemperatureCelsius } from "react-icons/tb";
import { TbTemperatureFahrenheit } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import useSettings from "../hooks/useSettings";
export default function NavBar() {
  const { celsius, hectopascal, changeTemperature, changePressure } =
    useSettings();

  return (
    <div className="bg-[#202b3b] rounded-xl flex items-center flex-col gap-20 max-[1100px]:grid max-[1100px]:grid-cols-[0.1fr_1fr] max-[1100px]:gap-0">
      <div className="border-b border-1 border-[#ffffff46] w-full flex items-center justify-center p-4 max-[1100px]:border-b-0 max-[1100px]:border-r max-[1100px]:h-full">
        <IoMdSettings color="white" size={50} />
      </div>
      <div className="flex flex-col gap-5 justify-center items-center w-full px-2 max-[1100px]:flex-row max-[1100px]:place-items-center max-[1100px]:px-5">
        <div
          className="flex justify-center items-center flex-col gap-1 cursor-pointer bg-[#0b0f1459] rounded-xl w-full py-2"
          onClick={changeTemperature}
        >
          {celsius ? (
            <TbTemperatureCelsius color="white" size={25} />
          ) : (
            <TbTemperatureFahrenheit color="white" size={25} />
          )}
          <p className="text-white text-xs font-medium">
            {celsius ? "Celsius" : "Fahrenheit"}
          </p>
        </div>
        <div
          className="flex justify-center items-center flex-col gap-1 cursor-pointer bg-[#0b0f1459] rounded-xl w-full py-2"
          onClick={changePressure}
        >
          <h1 className="text-xl text-white font-medium">
            {hectopascal ? "hPa" : "kPa"}
          </h1>
          <p className="text-white text-xs font-medium">
            {hectopascal ? "Hectopascal" : "Kilopascal"}
          </p>
        </div>
      </div>
    </div>
  );
}
