export const getWeather = async (city, setWeatherData) => {

    const url = `http://api.weatherapi.com/v1/current.json?key=a7a45993d16f42e8b37164823240902&q=${city}&aqi=no`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5f12d10c80mshddcb0b1f40a82a4p14230ejsnb15e3d9f0352',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
    const temp=result['current']['temp_c']
    setWeatherData({ temperature:temp });
} catch (error) {
	console.error(error);
}
};
 
