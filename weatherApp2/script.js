let weather ={

    apikey:`7433a9f54666f2e2e86340938b09b0e9`,
   fetchWeather:function(city){
       fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&unites=metric&appid=7433a9f54666f2e2e86340938b09b0e9`
       ).then((response)=>response.json()).then((data)=>{
           console.log('inside second then')
            this.displayWeather(data)
        })
   },
   displayWeather:function(data){
        const {name}=data;
        const {icon,description}=data.weather[0];
        const {temp,humidity}=data.main;
        const { speed}=data.wind;
        console.log(name,icon,description,temp,description,speed);
        document.querySelector(".city").innerText=`Weather in ${name}`;
        document.querySelector(".icon").src=`https://openweathermap.org/img/wn/${icon}@2x.png`
        document.querySelector(".temp").innerText=`Temperature: ${temp}°C`;
        document.querySelector(".description").innerText=`Description: ${description}`;
        document.querySelector(".humidity").innerText=`Humadity: ${humidity}%`;
        document.querySelector(".wind").innerText=`Wind Speed:${speed}km/hr`; 
        document.querySelector(".weather").classList.remove("loading");  
        document.body.style.backgroundImage="url('https://source.unsplash.com/1600x900/?"+ name  +"')"
   },
   search:function(){
       this.fetchWeather(document.querySelector(".search-bar").value)
   }

};
document.querySelector(".search-button").addEventListener('click',()=>{
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup",function(event){
    if(event.key=="Enter"){
        weather.search();
    }
})

document.querySelector(".search-bar").addEventListener("blur",()=>{
    document.querySelector(".weather").classList.add("loading");
    document.querySelector(".search-bar").value="";
})