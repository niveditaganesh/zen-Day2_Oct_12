/* Generate an API key with given link below
    * https://openweathermap.org/guide
    * Print the current weather data in console- By city name, By city ID, By lat lang*/


var request= new XMLHttpRequest();
request.open("GET","http://api.openweathermap.org/data/2.5/weather?q=London&appid=d3d077a6d591e1f71c36cb93ced3b5c4",true);

request.send();
request.onload=function(){
	var data=JSON.parse(this.response);
	
	console.log(data);
	
}


var request= new XMLHttpRequest();
request.open("GET","http://api.openweathermap.org/data/2.5/weather?id=2172797&appid=d3d077a6d591e1f71c36cb93ced3b5c4",true);request.open("GET","http://api.openweathermap.org/data/2.5/weather?q=London&appid=d3d077a6d591e1f71c36cb93ced3b5c4",true);

request.send();
request.onload=function(){
	var data=JSON.parse(this.response);
	
	console.log(data);
	
}


var request= new XMLHttpRequest();
request.open("GET","http://api.openweathermap.org/data/2.5/weather?lat=20.0&lon=77.0&appid=d3d077a6d591e1f71c36cb93ced3b5c4",true);

request.send();
request.onload=function(){
	var data=JSON.parse(this.response);
	
	console.log(data);
	
}