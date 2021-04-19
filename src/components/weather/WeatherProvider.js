// import { settings } from "../../../api/Keys.js"

// let forecast = []
// let singleForecast = ""
// const event = document.querySelector(".container")

// const moveCapturedForcast = () => {
//     const forecastObtained = new CustomEvent("havetheforecast")
//     event.dispatchEvent(forecastObtained)
// }

// export const getWeatherData = () => {
//     return fetch(`http://api.openweathermap.org/data/2.5/forecast/?zip=37215&units=imperial&appid=${settings.weatherKey}`)
//          .then(response => response.json())
//         .then(parsedWeather => {
//             forecast = parsedWeather.list
//         })
//         .then(useWeatherData)
//         .then(moveCapturedForcast)
// }
// export const useWeatherData = () => {
//       return forecast.slice()
// }

// export const getOneDayWeatherData = (zip) => {
//     return fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${zip},us&units=imperial&appid=${settings.weatherKey}`)
//          .then(response => response.json())
//         .then(parsedWeather => {
//             singleForecast = parsedWeather
//         })
// }

// export const useOneDayWeatherData = () => {
//     return singleForecast
// }