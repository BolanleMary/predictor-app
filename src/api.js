import axios from "axios";

const api = axios.create({
  baseURL: "https://api-predictor-9kcm.onrender.com",
  headers: { "Content-Type": "application/json" },
});

// Example API functions
export const getPrediction = () => api.get("/prediction/");
export const getWeather = () => api.get("/weather/");
