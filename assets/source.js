var apiKey = "&appid=c32cee6b53ed48e0afdd9368ee69e073";
var apiToday = "https://api.openweathermap.org/data/2.5/weather?q=";
var apiForcast ="https://api.openweathermap.org/data/2.5/forecast?q=";
var cityArr = ["San Antonio"];
var cityName = $("cityName");
var todayUrl = apiToday+cityArr[0]+apiKey;
var forcastUrl = apiForcast+cityArr[0]+apiKey;
//console.log(todayUrl);
//console.log(forcastUrl);     
  var cityElm = $("#cityName");
  var cityName =$("<h1>");
  cityName.text(cityArr[0]);
  cityElm.append(cityName);


  $.ajax({
    url: todayUrl,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    var tempElm =$("#temperature");
    var temperature =$("<p>");
    temperature.text("temp: "+response.main.temp);
    tempElm.append(temperature);
    var humidityElm =$("#humidity");
    var humidity =$("<p>");
    humidity.text("humidit: "+response.main.humidity);
    humidityElm.append(humidity);
    var windElm =$("#windSpeed");
    var windSpeed =$("<p>");
    windSpeed.text("wind speed: "+response.wind.speed);
    windElm.append(windSpeed);

  });       

  $.ajax({
    url: forcastUrl,
    method: "GET",
  }).then(function (response) {
    console.log(response);

            //day 1 forcast
            var dateElm =$("#date1");
            var dates =$("<p>");
            dates.text("date: "+response.list[0].dt_txt);
            dateElm.append(dates);

            var tempElm =$("#temperature1");
            var temperature =$("<p>");
            temperature.text("temp: "+response.list[0].main.temp);
            tempElm.append(temperature);
            
            var humidityElm =$("#humidity1");
            var humidity =$("<p>");
            humidity.text("humidity: "+response.list[0].main.humidity);
            humidityElm.append(humidity);

            var windElm =$("#windSpeed1");
            var windSpeed =$("<p>");
            windSpeed.text("wind speed: "+response.list[0].wind.speed);
            windElm.append(windSpeed);
            //day 2 forcast
            var dateElm =$("#date2");
            var dates =$("<p>");
            dates.text("date: "+response.list[1].dt_txt);
            dateElm.append(dates);

            var tempElm =$("#temperature2");
            var temperature =$("<p>");
            temperature.text("temp: "+response.list[1].main.temp);
            tempElm.append(temperature);
        
            var humidityElm =$("#humidity2");
            var humidity =$("<p>");
            humidity.text("humidity: "+response.list[1].main.humidity);
            humidityElm.append(humidity);

            var windElm =$("#windSpeed2");
            var windSpeed =$("<p>");
            windSpeed.text("wind speed: "+response.list[1].wind.speed);
            windElm.append(windSpeed);
            //day 3 forcast
            var dateElm =$("#date3");
            var dates =$("<p>");
            dates.text("date: "+response.list[2].dt_txt);
            dateElm.append(dates);

            var tempElm =$("#temperature3");
            var temperature =$("<p>");
            temperature.text("temp: "+response.list[2].main.temp);
            tempElm.append(temperature);
        
            var humidityElm =$("#humidity3");
            var humidity =$("<p>");
            humidity.text("humidity: "+response.list[2].main.humidity);
            humidityElm.append(humidity);

            var windElm =$("#windSpeed3");
            var windSpeed =$("<p>");
            windSpeed.text("wind speed: "+response.list[2].wind.speed);
            windElm.append(windSpeed);
            //day 4 forcast
            var dateElm =$("#date4");
            var dates =$("<p>");
            dates.text("date: "+response.list[3].dt_txt);
            dateElm.append(dates);

            var tempElm =$("#temperature4");
            var temperature =$("<p>");
            temperature.text("temp: "+response.list[3].main.temp);
            tempElm.append(temperature);
        
            var humidityElm =$("#humidity4");
            var humidity =$("<p>");
            humidity.text("humidity: "+response.list[3].main.humidity);
            humidityElm.append(humidity);

            var windElm =$("#windSpeed4");
            var windSpeed =$("<p>");
            windSpeed.text("wind speed: "+response.list[3].wind.speed);
            windElm.append(windSpeed);
            //day 5 forcast
            var dateElm =$("#date5");
            var dates =$("<p>");
            dates.text("date: "+response.list[4].dt_txt);
            dateElm.append(dates);

            var tempElm =$("#temperature5");
            var temperature =$("<p>");
            temperature.text("temp: "+response.list[4].main.temp);
            tempElm.append(temperature);
        
            var humidityElm =$("#humidity5");
            var humidity =$("<p>");
            humidity.text("humidity: "+response.list[4].main.humidity);
            humidityElm.append(humidity);

            var windElm =$("#windSpeed5");
            var windSpeed =$("<p>");
            windSpeed.text("wind speed: "+response.list[4].wind.speed);
            windElm.append(windSpeed);

  });




  






