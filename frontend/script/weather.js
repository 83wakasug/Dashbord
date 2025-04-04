const x = document.getElementById("demo");
const APIkey = "d05879dfc4d456867026bc432442b474";

document.addEventListener("DOMContentLoaded", function () {
  try { 
    getLocation();
  } catch (e) {
    console.log(e);
  }
});

let lan = "";
let lon = ""; 

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}  

function success(position) {
  try {  
    lan = position.coords.latitude;  
    lon = position.coords.longitude;
    url ="http://localhost:3000/getWeatherAndNews";


  
      const headers = new Headers({ "Content-Type": "application/json" });
    
      return fetch(url, {
          method: 'POST',
          body: JSON.stringify({lan, lon }),
          headers: headers,
          mode: 'cors'
        })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Status is not 200');
          }
          return response.json(); 
        }).then((data)=>{
 
          displayWeather(data[0]); 
    
          displayNews(data[1].articles); 
          
        })
        .catch(error => console.error("Error fetching weather", error));
  

  //   const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lan}&lon=${lon}&appid=${APIkey}&units=metric`;

  //   fetch(url)
  //     .then(response => response.json())
  //     .then(data => displayWeather(data))
  //     .catch(error => console.error("Error fetching weather", error));
   } catch (e) {
     console.log(e + " error occurred during getting position");
   }
  
}


function displayNews(articles) {
  const newsContainer = document.getElementById("add_news");
  newsContainer.innerHTML = "<h3>Latest News</h3>"; 

  articles.forEach(article => {
    const newsItem = document.createElement("div");
    newsItem.classList.add("news-item");

    newsItem.innerHTML = `
      <a href="${article.url}" target="_blank">
        <h4>${article.title}</h4>
      </a>
      <p>${article.description || "No description available"}</p>
      <img class="new_image" src=${article.urlToImage} alt="Italian Trulli">
    `;
    newsContainer.appendChild(newsItem);
  });
}
 function error() {
   alert("Sorry, no position available.");
 }

function displayWeather(data) {
  try {
    let container = createDiv();
    
    let cityName = data.city.name; // 都市名
    let days = [0, 8, 16]; // 今日・明日・明後日・しあさってのデータのインデックス
    let dayNames = ["Today", "Tomorrow", "Day after tomorrow"];

    let html = `<h3>${cityName} </h3>`;

    days.forEach((index, i) => {
      let temp = data.list[index].main.temp;
      let icon = data.list[index].weather[0].icon;
      let description = data.list[index].weather[0].description;
      let iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

      html += `
        <div>
          <h4>${dayNames[i]}</h4>
          <p>temp: ${temp}°C</p>
          <p>weather: ${description}</p>
          <img src="${iconUrl}" alt="Weather icon">
        </div>
      `;
    });

    container.innerHTML = html;
    document.getElementById("add_weather").appendChild(container);
  } catch (error) {
    console.log(error);
  }
}

function createDiv() {
  return document.createElement("div");
}
