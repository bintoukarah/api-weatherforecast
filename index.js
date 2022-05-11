document.addEventListener("DOMContentLoaded", function () {
  let buttonSearch = document.getElementById("myValue");
  buttonSearch.addEventListener("click", function (event) {
    const cityName = document.getElementById("myCity").value;
    console.log(cityName);
    event.preventDefault();
    const API_KEY = "45cb0e6d117446dabe3fb0c56ffa888a"; // OpenCageData api key 
    let URL = `https://api.opencagedata.com/geocode/v1/json?q=${cityName}&key=${API_KEY}&language=fr&pretty=1`;
    fetch(URL); // on utilise la methode fetch, qui est asynchrone et qui existe par défaut dans le navigateur (on aurait aussi pu utiliser la librairie axios par exemple)
    // on utilise la méthode then() (NB: on pourrait aussi utiliser la syntaxe async/await)
    fetch(URL) // create function to put our fetch
      .then((response) => {
        if (response.status == 200) {
          // on vérifier que l'appel à l'API a fonctionné
          return response.json(); // ne pas oublier le return du callback
        } else console.log(`Erreur lorsqu'on a tenté de récupérer les data`);
      })
      .then((data) => {
        let donGeo = data.results[0].geometry;
        console.log(donGeo);
        let lat = donGeo.lat;
        let lon = donGeo.lng;

        const APIKEY = "27e489831f7a566877884878940a4f9d";
        let URL2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${APIKEY}`;

        fetch(URL2).then((response) => { // create function to put fetch
          if (response.status == 200) {
            // on vérifier que l'appel à l'API a fonctionné
            return response.json(); // ne pas oublier le return du callback
          } else console.log(`Erreur lorsqu'on a tenté de récupérer les data`);
        });
        let week;
        then((data) => {
          let weather = data.current.weather[0].id;
          console.log(meteo);
          if (meteo == 800) {
            //display clear svg
          } else if (meteo >= 600 && meteo <= 622) {
          } else if (meteo >= 500 && meteo <= 532) {
            //display rain svg
          } else if (meteo >= 200 && meteo <= 232) {
            //display thuderstorm
          } else if (meteo >= 300 && meteo <= 321) {
            //display drizzle
          } else if (meteo >= 600 && meteo <= 622) {
            //display snow
          }
        }).catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
    let weekDays = new Date();
    let firstDay = weekDays.getDay();
    console.log(firstDay);
    let week = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wendnesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    function displayDay(day) {
      for (let firstDay = 0; index < week.length; index++) {
        let week = array[0];
      }
    }
  });
});

