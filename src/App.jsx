import React from "react";
import backgroundImage from "./assets/backgroundImage.png"
import Header from "./Component/Header";
function App() {
  
  return (
    <>
      <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center p-4"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Header */}
      
      <Header/>
        {/* Prediction Card */}
      <div className="w-full max-w-md bg-[#539BF9] rounded-2xl shadow p-4 mb-4">
        <div className="flex justify-between items-center mb-4">
          <p className="text-4xl font-bold text-white">86%</p>
          <div className="flex flex-col items-end text-sm text-white">
            <span>Rainfall: 400m³</span>
            <span>Topology: Flat</span>
            <span>Soil permeability: Low</span>
          </div>
        </div>
        <button className="bg-white text-black px-4 py-2 w- rounded-lg shadow hover:bg-blue-700">
          It is likely to get flooded tomorrow
        </button>
      </div>
      {/* Flood Probability Graph (placeholder) */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow p-4 mb-4">
        <div className="h-48 flex items-center justify-center bg-gray-100 rounded-lg text-gray-500">
          Flood Probability Graph
        </div>
      </div>
       {/* Event History */}
      <div className="w-full max-w-md grid grid-cols-4 gap-2 mb-4">
        <div className="p-2 rounded-lg bg-gray-300 text-center text-xs">
          <p>Sept 26</p>
          <p>No or low Rainfall</p>
          <p>reduce flood</p>
        </div>
        <div className="p-2 rounded-lg bg-gray-300 text-center text-xs">
          <p>Sept 27</p>
          <p>No or low Rainfall</p>
          <p>reduce flood</p>
        </div>
        <div className="p-2 rounded-lg bg-[#FF0505] text-black text-center text-xs">
          <p>Yesterday</p>
          <p>Heavy Rain</p>
          <p>Expect flood</p>
        </div>
        <div className="p-2 rounded-lg bg-[#FF0505] text-black text-center text-xs">
          <p>Today</p>
          <p>Heavy Rain</p>
          <p>Expect flood</p>
        </div>
      </div>
      {/* Weather Info */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow p-4 mb-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-3xl font-bold">26°C</p>
            <p className="text-sm">Precipitation: 75</p>
            <p className="text-sm">Humidity: 45%</p>
            <p className="text-sm">Wind: 36km/h</p>
          </div>
          <div className="w-24 h-16 border rounded-lg flex items-center justify-center text-sm text-gray-400">
            Chart/Map
          </div>
        </div>
      </div>
      {/* Predictor Input */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow p-4">
        <p className="font-semibold mb-2">Predictor</p>
        <div className="flex gap-2">
          <input
            type="date"
            className="border rounded-lg px-2 py-1 flex-1 text-sm"
          />
          <input
            type="text"
            placeholder="Event"
            className="border rounded-lg px-2 py-1 flex-1 text-sm"
          />
        </div>
      </div>
        </div> 
         </>
  )
}

export default App
