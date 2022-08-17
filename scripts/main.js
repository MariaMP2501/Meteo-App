/* var callBackGetSuccess = function(data){
   console.log("donnees api", data)
alert("Meteo temp : " + data.main.temp);
  var element = document.getElementById("zone_meteo");
    element.innerHTML = "La temperature est de " + data.main.temp;
}
function buttonClickGET(){
    var queryLocation = document.getElementById("queryLocation").value;
    var url="https://api.openweathermap.org/data/2.5/weather?q="+queryLocation+"&appid=2ff1a46f208608a3db71e9f4c8b3018e"
    


    $.get(url, callBackGetSuccess).done(function(){
        //alert ('second success');
    })
    .fail(function(){
        alert("error");
    })
    .allways(function(){
        //alert ('finished');
    });x
} */

const descrip = document.querySelector('.descrip');
const temp = document.querySelector('.temp');
const loc = document.querySelector('.loc');
const ico = document.querySelector('.ico').src;

 

function Chercher(){
    var langue = "fr"
    var queryLoc = document.querySelector('.queryLoc').value;
    const link= 'https://api.openweathermap.org/data/2.5/weather?q='+queryLoc+'&curent.temp=metric:Celsius&exclude=hourly,daily&appid=2ff1a46f208608a3db71e9f4c8b3018e&units=metric&lang=' + langue + ''


    fetch(link)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        var t = Math.round(data.main.temp)

        descrip.innerHTML = data.weather[0].description
        temp.innerHTML = t += "°C";
        loc.innerHTML = data.name
        ico.innerHTML = data.weather[0].icon 
        

        var lien ="./ressources/jour/"+data.weather[0].icon+".svg"
        document.querySelector('.ico').src=lien;

        var lat = data.coord.lat;
        var lon = data.coord.lon;


        fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&exclude=hourly,minutely&lang=fr&units=metric&appid=2ff1a46f208608a3db71e9f4c8b3018e').then(res => res.json()).then(data => {

            var Jeudi = data.daily[0].feels_like.day        
            var Vendredi = data.daily[1].feels_like.day        
            var Samedi = data.daily[2].feels_like.day        
            var Dimanche = data.daily[3].feels_like.day        
            var Lundi = data.daily[4].feels_like.day        
            var Mardi = data.daily[5].feels_like.day        
            var Mercredi = data.daily[6].feels_like.day      
            
            
            document.querySelector('.Lundi').innerHTML = Math.round(Lundi);
            document.querySelector('.Mardi').innerHTML = Math.round(Mardi);
            document.querySelector('.Mercredi').innerHTML = Math.round(Mercredi);
            document.querySelector('.Jeudi').innerHTML = Math.round(Jeudi);
            document.querySelector('.Vendredi').innerHTML = Math.round(Vendredi);
            document.querySelector('.Samedi').innerHTML = Math.round(Samedi);
            document.querySelector('.Dimanche').innerHTML = Math.round(Dimanche);

            var day = Math.round(data.daily[0].feels_like.day)
            var day2 = Math.round(data.daily[0].feels_like.day)
            var night = Math.round(data.daily[0].feels_like.night)
            var night2 = Math.round(data.daily[0].feels_like.night)
            var even = Math.round(data.daily[0].feels_like.eve)
            var even2 = Math.round(data.daily[0].feels_like.eve)
            var morn = Math.round(data.daily[0].feels_like.morn)
            var morn2 = Math.round(data.daily[0].feels_like.morn)
            
            document.querySelector('.morn').innerHTML = morn;
            document.querySelector('.morn2').innerHTML = morn;
            document.querySelector('.night').innerHTML = night;
            document.querySelector('.night2').innerHTML = night;
            document.querySelector('.even').innerHTML = even;
            document.querySelector('.even2').innerHTML = even;
            document.querySelector('.day').innerHTML = day;
            document.querySelector('.day2').innerHTML = day;

        
        console.log(jour)

                
            })
        
        
    });

}



const container =document.querySelector('.maria');