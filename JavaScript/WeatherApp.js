
// $(document).ready(function()
// {
// $("#submit-btn").click(function()
// {
// let curCity=$("#city").val();
// if(curCity!='')
// {
// $.ajax({
// url: "https://api.openweathermap.org/data/2.5/weather?q="+curCity+"&units=metric&APPID=2be55dff465e07395479cb3854ba8f37",
// type: "GET",
// dataType: "jsonp",
// success: function(data){
//     let latitude= data.coord.lat;
//     let longitude=data.coord.lon;
// document.getElementById('weatherCity').value=curCity;
// document.getElementById('coordinates').value= latitude+" & "+ longitude;
// document.getElementById('weather').value=data.weather[0].main;
// document.getElementById('temperature').value=data.main.temp;
// document.getElementById('pressure').value=data.main.pressure;
// document.getElementById('humidity').value=data.main.humidity;
// document.getElementById('visibility').value=data.visibility;
// document.getElementById('windSpeed').value=data.wind.speed;
// document.getElementById('cloud').value=data.clouds.all+"%";

// }

// });

// }
// else
// {
//    alert("Enter a valid City")
// }
// });
// });
let url="https://api.openweathermap.org/data/2.5/weather?q=";
let appId="&units=metric&APPID=2be55dff465e07395479cb3854ba8f37";
function getWeatherInfo()
{
    
    let city=document.getElementById('city').value;
    let finalurl=url+city+appId;
    console.log(finalurl);
    fetch(finalurl)
    .then(result => result.json())
    .then((data) => {
        try{
        let latitude= data.coord.lat;
    let longitude=data.coord.lon;
document.getElementById('weatherCity').value=city;
document.getElementById('coordinates').value= latitude+" & "+ longitude;
document.getElementById('weather').value=data.weather[0].main;
document.getElementById('temperature').value=data.main.temp;
document.getElementById('pressure').value=data.main.pressure;
document.getElementById('humidity').value=data.main.humidity;
document.getElementById('visibility').value=data.visibility;
document.getElementById('windSpeed').value=data.wind.speed;
document.getElementById('cloud').value=data.clouds.all+"%";
document.getElementById('image').innerHTML="<img src=http://openweathermap.org/img/w/" +
data.weather[0].icon +
".png"+
">" ;
        }
        catch{
            alert("Not a Valid City");
            
        }

}).catch(err => console.error(err));
}