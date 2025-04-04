function formatTime(number) {
  return number < 10 ? "0" + number : number;
}


function showClock(){

  try {
    var date = new Date();
    var currentDate = date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  
  
    var currentTime = date.getTime();
    let hours = formatTime(date.getHours());
    let minutes = formatTime(date.getMinutes());
  
    var time_Container = document.getElementById("time");
  
    if (time_Container) {
      time_Container.innerHTML = `${hours}:${minutes}  ${currentDate}`;
      
    } else {
      console.warn("Element with ID 'time' not found.");
    }
  
  
  } catch (error) {
    console.error("An error occurred:", error);
  }
  
}

setInterval('showClock()',1000);

