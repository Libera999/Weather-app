const api={
    key: "369760d9047fc29be387ab0e74d372d8",
    base: "https://api.openweathermap.org/data/2.5/" 
}

const searchbox= document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt){
    if (evt.keyCode==13) {
        getResults(searchbox.value);
    }
}

function getResults(query){
    fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
    .then (weather =>{
        return weather.json();
    }) .then (displayResults);
}

function displayResults(weather){

console.log(weather)

  let city = document.querySelector('.location .city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let now = new Date(); //returns todays date and time
  let date = document.querySelector('.location .date');
  date.innerText = dateBuilder(now);

  let temp = document.querySelector('.current .temp');
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

  let weather_el = document.querySelector('.current .weather');
  weather_el.innerText = weather.weather[0].main;

  let locationIcon = document.querySelector('.icon');
  let icon_val = weather.weather[0].icon;
  let iconurl = "/icons/"+icon_val+".png";

  locationIcon.innerHTML = `<img src=${iconurl}>`;

  //let iconurl = "/icons/"+icon_val+".png";
  //locationIcon.innerHTML = "<img src='icons/'+icon_val+'.png'>";

  let hilow = document.querySelector('.hi-low');
  hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;

}

function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  }







