document.addEventListener("DOMContentLoaded", function () {
    let updateButton = document.getElementById("submit");

    updateButton.addEventListener("click", (event) => { //au click 
        event.preventDefault();

        let nameOfCity = document.getElementById("city").value; //recuper nom de ville
        const API_KEY = "45cb0e6d117446dabe3fb0c56ffa888a" 
        
        // requete à l'API OCD
        let URL = `https://api.opencagedata.com/geocode/v1/json?q=${nameOfCity}&key=${API_KEY}&language=fr&pretty=1`
        fetch(URL)
            .then(response => {
                if (response.status == 200) { // on vérifier que l'appel à l'API a fonctionné
                    return response.json()  // ne pas oublier le return du callback
                }
                else console.log(`Erreur lorsqu'on a tenté de récupérer les data`);
            })
            .then(data => {

                let donGeo = data.results[0].geometry;// extraire lattitude et longitude de ma ville
                // console.log(donGeo);
                let lat = donGeo.lat;//latitude
                let lon = donGeo.lng;//longitude


                // requete à l'API OWM pour recup la meteo a partir des coords de la ville
                const APIKEY = "27e489831f7a566877884878940a4f9d";
                let URL2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${APIKEY}`//utiliser les donnees geo or avoir ma meteo
                fetch(URL2)
                    .then(response => {
                        if (response.status == 200) { // on vérifier que l'appel à l'API a fonctionné
                            return response.json()  // ne pas oublier le return du callback
                        }
                        else console.log(`Erreur lorsqu'on a tenté de récupérer les data`);
                    })
                    .then(data => {
                        // let meteo = data.current.weather[0].id; // recuperer la meteo du jour 

                        // getDay()
                        const myDate = new Date();
                        const currentDay = myDate.getDay(); //extraire l'index de ma journee}
                        let myWeek = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday",
                                    "Sunday", "Monday", "Tuesday", "Wednesday",
                            "Thursday", "Friday", "Saturday"];
                        let theDay = myWeek[currentDay];//associer l'index au nom de ma journee
                        
                        // afficher  5jours de la semaine a partir d'aujourd'hui:
                        for(let i = 0; i < 5 ; i++){
                            let meteo = data.daily[i].weather[0].id // meteo du jour 0
                            theDay = myWeek[currentDay + i];
                            let element = document.createElement("h3");
                            let img = document.createElement("img");

                            let newDiv = document.getElementById("printWeek");
                            newDiv.appendChild(element).innerHTML = `${theDay}`;
                            

                            //afficher l'icone  de la meteo relatif a l'id
                            
                            if (meteo == 800) {
                                newDiv.appendChild(img).src = "assets/weathers/sun.svg";
                                console.log(meteo);
                            } else if (meteo >= 600 && meteo <= 622) {
                                newDiv.appendChild(img).src = `assets/weathers/snow.svg`;
                                console.log(meteo)
                            } else if (meteo > 800) {
                                newDiv.appendChild(img).src = `assets/weathers/clouds.svg`;
                                console.log(meteo);
                            } else if (meteo >= 200 && meteo <= 531) {
                                newDiv.appendChild(img).src = `assets/weathers/rain.svg`;
                                console.log(meteo);
                            } else if (meteo >= 701 && meteo <= 781) {
                                newDiv.appendChild(img).src = `assets/weathers/cloudy.svg`;
                                console.log(meteo);
                            }
                        }
                        
                    })
             
                    .catch(err => console.log(err))
              
            })
            .catch(err => console.log(err))
    });
})