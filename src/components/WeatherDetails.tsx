import { Weather } from "../hooks/useWeather";
import { TiWeatherStormy } from "react-icons/ti";
import { TiWeatherShower } from "react-icons/ti";
import { TiWeatherDownpour } from "react-icons/ti";
import { TiWeatherSnow } from "react-icons/ti";
import { FiAlertTriangle } from "react-icons/fi";
import { TiWeatherSunny } from "react-icons/ti";
import { TiWeatherCloudy } from "react-icons/ti";
import { motion } from "framer-motion";
import { FaTemperatureEmpty } from "react-icons/fa6";
import { WiBarometer } from "react-icons/wi";
import { FaMountain } from "react-icons/fa";
import { FaTint } from "react-icons/fa";
import { FaWater } from "react-icons/fa";
import useSettings from "../hooks/useSettings";
import { formatPressureK, formatTemperatureF } from "../utils";
import { formatTemperatureC } from "../utils";

type WeatherDetailsProps = {
  weather: Weather;
};

const WeatherIcons: { [key: string]: JSX.Element } = {
  Thunderstorm: <TiWeatherStormy color={"#ffffff90"} size={100} />,
  Drizzle: <TiWeatherShower color={"#ffffff90"} size={100} />,
  Rain: <TiWeatherDownpour color={"#ffffff90"} size={100} />,
  Snow: <TiWeatherSnow color={"#ffffff90"} size={100} />,
  "7": <FiAlertTriangle color={"#ffffff90"} size={100} />,
  Clear: <TiWeatherSunny color={"#ffffff90"} size={100} />,
  Clouds: <TiWeatherCloudy color={"#ffffff90"} size={100} />,
};

export default function WeatherDetails({ weather }: WeatherDetailsProps) {
  const { celsius, hectopascal } = useSettings();

  return (
    <motion.div
      className="flex items-center justify-center font-mono gap-5 max-[700px]:flex-col"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <div className="bg-[#202b3b] h-[90%] p-10 rounded-xl flex flex-col items-center gap-5">
        <h3 className="text-8xl text-[#ffffff90] font-bold">
          {weather.weather[0].main}
        </h3>
        <p className="text-[#ffffff60]">{weather.weather[0].description}</p>
        {weather.weather[0].id.toString().startsWith("7")
          ? WeatherIcons[7]
          : WeatherIcons[weather.weather[0].main]}
        <div className="flex items-center justify-center gap-6">
          {formatTemperatureC(weather.main.temp_min) !==
          formatTemperatureC(weather.main.temp_max) ? (
            <>
              <p className="text-[#ffffff90] font-thin">
                Min:
                {celsius
                  ? `${formatTemperatureC(weather.main.temp_min)}`
                  : `${formatTemperatureF(weather.main.temp_min)}`}
                {celsius ? <>&deg;C</> : <>&deg;F</>}
              </p>
              <h1 className="text-[#ffffff90] text-7xl">
                {celsius
                  ? `${formatTemperatureC(weather.main.temp)}`
                  : `${formatTemperatureF(weather.main.temp)}`}
                {celsius ? <>&deg;C</> : <>&deg;F</>}
              </h1>
              <p className="text-[#ffffff90] font-thin">
                Max:
                {celsius
                  ? `${formatTemperatureC(weather.main.temp_max)}`
                  : `${formatTemperatureF(weather.main.temp_max)}`}
                {celsius ? <>&deg;C</> : <>&deg;F</>}
              </p>
            </>
          ) : (
            <h1 className="text-[#ffffff90] text-7xl">
              {celsius
                ? `${formatTemperatureC(weather.main.temp)}`
                : `${formatTemperatureF(weather.main.temp)}`}
              {celsius ? <>&deg;C</> : <>&deg;F</>}
            </h1>
          )}
        </div>
      </div>
      <div className="flex flex-col bg-[#202b3b] p-5 gap-6 rounded-xl max-[700px]:flex-row">
        <div className="text-[#ffffff90] flex flex-col items-center justify-center gap-1 text-sm">
          <FaTemperatureEmpty size={20} />
          <p>Feels like</p>
          <p>
            {celsius
              ? `${formatTemperatureC(weather.main.feels_like)}`
              : `${formatTemperatureF(weather.main.feels_like)}`}
            {celsius ? <>&deg;C</> : <>&deg;F</>}
          </p>
        </div>
        <div className="text-[#ffffff90] flex flex-col items-center justify-center gap-1 text-sm">
          <FaMountain size={20} />
          <p>GroundLevel</p>
          <p>
            {hectopascal
              ? `${weather.main.grnd_level} hPa`
              : `${formatPressureK(weather.main.grnd_level)} kPa`}
          </p>
        </div>
        <div className="text-[#ffffff90] flex flex-col items-center justify-center gap-1 text-sm">
          <FaTint size={20} />
          <p>Humidity</p>
          <p>{weather.main.humidity}%</p>
        </div>
        <div className="text-[#ffffff90] flex flex-col items-center justify-center gap-1 text-sm">
          <WiBarometer size={25} />
          <p>Pressure</p>
          <p>
            {hectopascal
              ? `${weather.main.pressure} hPa`
              : `${formatPressureK(weather.main.pressure)} kPa`}
          </p>
        </div>
        <div className="text-[#ffffff90] flex flex-col items-center justify-center text-sm">
          <FaWater size={20} />
          <p>SeaLevel</p>
          <p>
            {hectopascal
              ? `${weather.main.sea_level} hPa`
              : `${formatPressureK(weather.main.sea_level)} kPa`}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
