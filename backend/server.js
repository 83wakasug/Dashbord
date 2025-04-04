require('dotenv').config(); 

const WEATHER_API_KEY=process.env.WEATHER_API_KEY;
const NEWS_API_KEY = process.env.NEWS_API_KEY;




console.log(`weather: ${WEATHER_API_KEY}`);
console.log(`news: ${NEWS_API_KEY}`);
const fs = require('fs')
const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors({
  origin: ['http://localhost:8080', 'http://127.0.0.1:5500'], 
  credentials: true
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});




app.post('/getWeatherAndNews', async function requestHandler(req, res) {
  const lan =req.body.lan;
  const lon = req.body.lon;
  const data = await fetchAllData(lan, lon);
  res.send( data);
});


async function fetchAllData(lan,lon) {
  const urls = [
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lan}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`, 
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`
  ];
  try {
    const results = await Promise.all(urls.map(url => fetch(url).then(response => response.json())));
    return results;
  } catch (error) {
    console.error('Error occured during fetching data', error);
  }
}