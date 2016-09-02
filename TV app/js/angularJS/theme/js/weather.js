var app=angular.module("weatherApp",[]);

app.controller("weatherCtr", function($http){
    var wc=this;
    wc.city="Durban";
    wc.cities=["Durban","Dalton","Londo","Paris","Cape Town"];
    wc.cityChange=function()
    {
        wc.cityName=wc.city;
            var promise=$http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q='+wc.city+'&units=metric&appid=8c11fd893f110c902dabb2c1a2d5a867');
            
            promise.then(function(payLoad)
            {
                var response=$http.get('https://restcountries.eu/rest/v1/alpha?codes='+payLoad.data.city.country);
                response.then(function(countryData){
                    wc.countryName=countryData.data[0].name;
                    console.log(countryData);
                },
                function(errorCountryData)
                {
                });


                wc.flag=payLoad.data.city.country;
                wc.icon=payLoad.data.list[0].weather[0].icon;
                wc.weatherDesciption=payLoad.data.list[0].weather[0].description;
                wc.clouds=payLoad.data.list[0].clouds;
                wc.deg=payLoad.data.list[0].deg;
                wc.humidity=payLoad.data.list[0].humidity;
                wc.pressure=payLoad.data.list[0].pressure;
                wc.speed=payLoad.data.list[0].speed;
                console.log(payLoad.data);
            },
            function(errorPayLoad){
                console.log("bye");
            });
    }

    wc.addNewCity = function() {
		wc.city = this.newCity;
		this.cityChange();

        if (wc.cities.indexOf(wc.newCity) === -1) 
        {
			 wc.cities.push(wc.newCity);
              wc.errorMessage="";
		}
        
	}
    wc.cityChange();
});

