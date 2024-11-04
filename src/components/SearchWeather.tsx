import { AiOutlineCompass } from "react-icons/ai";

type SearchWeather = {
  hasWeatherData: string;
};

export default function SearchWeather({ hasWeatherData }: SearchWeather) {
  return (
    <>
      {hasWeatherData ? null : (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center justify-center flex-col gap-3 font-mono text-center">
            <AiOutlineCompass color="#ffffff60" size={100} />
            <p className="text-[#ffffff60]">Search Weather</p>
          </div>
        </div>
      )}
    </>
  );
}
