const x = document.getElementById("demo");
const APIkey = "d05879dfc4d456867026bc432442b474";

let lan ="";
let lon=""; 
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}  


function success(position) {
  try{  
    lan= position.coords.latitude;
    lon =  position.coords.longitude;
    const url = `api.openweathermap.org/data/2.5/forecast/daily?lat= ${lan}& ${lon}&cnt=4&appid=${APIkey}`;

    fetch(url)
      .then(response=>response.json())
      .then(data=>displayWeather(data))
      .catch(error=>console.error("error fetching weather",error))
  
   
  }catch(e){
    console.log=(e+"error occured during getting position")
  }
}


function error() {
  alert("Sorry, no position available.");
}


function displayWeather(){
 


}





