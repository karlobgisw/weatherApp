import axios from "axios"
import { Search } from "../types"
import { z } from "zod"
import { useMemo, useState } from "react"


const WeatherZod = z.object({
    name: z.string(),
    main: z.object({
        feels_like: z.number(),
        grnd_level: z.number(),
        humidity: z.number(),
        pressure: z.number(),
        sea_level: z.number(),
        temp: z.number(),
        temp_max: z.number(),
        temp_min: z.number()
    }),
    weather: z.array(z.object({
        description: z.string(),
        icon: z.string(),
        id: z.number(),
        main: z.string()
    }))
})
export type Weather = z.infer<typeof WeatherZod>

export default function useWeather(){

    const initialState = {
        name: '',
        main: {
            feels_like: 0,
            grnd_level: 0,
            humidity: 0,
            pressure: 0,
            sea_level: 0,
            temp: 0,
            temp_max: 0,
            temp_min: 0
        },
        weather: []
    }

    const [weather, setWeather] = useState<Weather>(initialState);
    const [loading, setLoading] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const [search, setSearch] = useState(true);
    const fetchWeather = async(search:Search)=>{

        const ApiKey = import.meta.env.VITE_API_KEY
        setLoading(true);
        setWeather(initialState);
        setNotFound(false);
        setSearch(false);
        try{

            const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${ApiKey}`
            const {data} = await axios(geoUrl);

            if(!data[0]){
                setNotFound(true);
                setSearch(false);
                return
            }

            const lat = data[0].lat;
            const lon = data[0].lon;
            
            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${ApiKey}`;
            const {data: weatherResult} = await axios(weatherUrl);
            const result = WeatherZod.safeParse(weatherResult);
            console.log(result);
            if(result.success){
                setWeather(result.data)
            }
        }
        catch(error){
            console.log(error)
        }
        finally{
            setLoading(false);
        }
    }
    const hasWeatherData = useMemo( () =>weather.name , [weather])
    return{
        weather,
        fetchWeather,
        hasWeatherData,
        loading,
        notFound,
        search,
    }
}