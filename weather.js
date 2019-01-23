const baseURL = "api.openweathermap.org/data/2.5/weather?lat={lat}&lon={}"
const key = "5279d721f4445549926ce91e3fa07153"; 
let lat, long;

$(document).ready(function() {
   if ("geolocation" in navigator) {

     navigator.geolocation.getCurrentPosition( function(position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        url = url + "lat=" + lat + "&lon=" + long; 
        console.log(url);
    
        $.getJSON(url, function(json) {
            currentWeather = json.weather[0].description;
            currentLocation = json.name;
            currentTemp = json.main.temp;
           
     $("#temp").html(currentTemp);
   $("#description").html(currentLocation + "&nbsp;" + "has" + "&nbsp;" + currentWeather);

   $("#btn").on("click", function(){
    var tempCalculation; 
 
    if ($("#tempUnit").hasClass("fahrenheit"));