// only practice purspose
const API_KEY = '65c2f249afbd5541c418dc6a331f5ae8';
const SearchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`;
    console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data));
}