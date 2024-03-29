import React from 'react'

const Weather = () => {
  return (
    <div className="container">
      <form className="col-md-6 m-auto py-5">
        <div className="input-group mb-3 flex justify-center">
          <input id="city-name" type="text" className="form-control-4 hover:bg-gray-200 font-bold py-2 px-4 rounded"
            placeholder="Enter a location" />
          <div className="input-group-append">
            <button onclick="searchTemperature()" type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Search
            </button>
          </div>
        </div>
      </form>
      <div className="weather-status text-white text-center">
        <div className="details">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="flex justify-center" id="image-icon" src="https://openweathermap.org/img/wn/02d@2x.png"
              alt="" />
            <div className="px-6 py-4 text-black">
              <div id="city" className="flex justify-center font-bold text-xl mb-2">Delhi</div>
              <h1 id="weather" className="flex justify-center text-gray-700 text-base">Clouds</h1>
              <h3 className="flex justify-center"><span id="temp">38.06</span>&deg;C</h3>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Wish
                you a great day! ♥❤♥❤♥</span>
            </div>
          </div>
        </div>
      </div>
      <script src="WeatherAPI.js"></script>
    </div >
  )
}

export default Weather;