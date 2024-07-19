const apiKey = '69222663ecba34908968b14a75e1fbff';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
let city = ''
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button')

document.querySelector('.weather').style.display='none';
document.querySelector('.details').style.display='none';
        
const weatherIcon = document.querySelector('.weather-icon');

async function checkweather() {
    const response = await fetch(apiUrl+ city + `&appid=${apiKey}`);
    var data =  await response.json();
    console.log(data);
    
    document.querySelector('.city-name').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';
    document.querySelector('.weather').style.display='flex';
    document.querySelector('.details').style.display='flex';

    if (data.weather[0].main == 'Clouds') {
        weatherIcon.src = 'images/clouds.png'
    } 
    else if (data.weather[0].main == 'Clear') {
        weatherIcon.src = 'images/clear.png' ;     
    }
    else if (data.weather[0].main == 'Rain') {
        weatherIcon.src = 'images/rain.png' ;     
    }
    else if (data.weather[0].main == 'Drizzle') {
        weatherIcon.src = 'images/drizzle.png' ;     
    }
    else if (data.weather[0].main == 'Mist') {
        weatherIcon.src = 'images/mist.png' ;     
    }
}


searchBtn.addEventListener('click',function () {
    city = searchBox.value;
    checkweather();
    searchBox.value = '';
});

document.addEventListener('keypress',function (e) {
    if (e.key == 'Enter') {
        city = searchBox.value;
        checkweather();
        searchBox.value = '';
    }
})