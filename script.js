window.addEventListener("load", () => {
    let long;
    let lat;

    let locationTimezone = document.querySelector(".location-timezone");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let temperatureDescription = document.querySelector(
      ".temperature-description"
    );
    let locationIcon = document.querySelector(".weather-icon");

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        lat = position.coords.latitude;
        long = position.coords.longitude;

        const getData = async () => {
          const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=c8cbc0f6fe2bba567ffc41860b4a46a4&units=metric`)
          const data = await response.json()
          console.log(data);

          const { icon } = data.weather[0];
          temperatureDegree.textContent = Math.floor(data.main.temp);
          temperatureDescription.textContent = data.weather[0].description;
          locationTimezone.textContent = `${data.name}, ${data.sys.country}`;
          locationIcon.innerHTML = `<img src="icons/${icon}.png">`;
        }
        getData()
      });
    }
});
