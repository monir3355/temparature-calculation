const fetchWeather = async(cityName) =>{
  const  API_key = 'baafed59bf99a51746610eeef1b5229c';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_key}`;
  const res = await fetch(url)
  const data = await res.json()
  displayWeather(data);
}

const displayWeather = (data) => {
  document.getElementById('temparature').innerText = data.main.temp;
  document.getElementById('place').innerText = data.name;
  console.log(data);
}

const searchWeather = () =>{
  const inputField = document.getElementById('inputField');
  const inputFieldVAlue = inputField.value;
  fetchWeather(inputFieldVAlue);
}
