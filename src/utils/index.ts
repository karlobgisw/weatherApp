export const formatTemperatureC = (temperature: number) : number => {
    const kelvin = 273.15
    return parseInt((temperature - kelvin).toString());
}

export const formatTemperatureF = (temperature: number) : number => {
    const kelvin = 273.15
    return parseInt((((temperature - kelvin)*9/5)+32).toString());
}

export const formatPressureK = (pressure: number) : number => {
    return parseInt((pressure / 10).toString());
}