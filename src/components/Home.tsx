import Form from "./Form";
import Spinner from "./Spinner";
import WeatherDetails from "./WeatherDetails";
import useWeather from "../hooks/useWeather";
import NavBar from "./NavBar";
import { MdOutlineLocationOff } from "react-icons/md";
import SearchWeather from "./SearchWeather";

export default function Home() {
  const { weather, fetchWeather, hasWeatherData, loading, notFound, search } =
    useWeather();
  return (
    <div className="bg-[#0b131e] grid grid-cols-[0.4fr_4.5fr] gap-[30px] p-5 w-full h-screen max-h-full max-[1100px]:flex max-[1100px]:flex-col-reverse max-[1100px]:justify-between max-[1100px]:relative  overflow-auto">
      <NavBar></NavBar>
      <div className="grid grid-rows-[0.1fr_1fr] gap-4 relative max-[1100px]:static">
        <Form fetchWeather={fetchWeather}></Form>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {loading && <Spinner></Spinner>}
        </div>
        {hasWeatherData && <WeatherDetails weather={weather}></WeatherDetails>}
        {search && (
          <SearchWeather hasWeatherData={hasWeatherData}></SearchWeather>
        )}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {notFound && (
            <div className="flex items-center justify-center flex-col gap-3 font-mono">
              <MdOutlineLocationOff color="#ffffff60" size={200} />
              <p className="text-[#ffffff60]">City not found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
