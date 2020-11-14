const key = '5af66bac38bdf3ab523c64a6b3f0b230';

//const baseURL='http://api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=5af66bac38bdf3ab523c64a6b3f0b230';

//fetch(baseURL)
//    .then((data) => {console.log('response', data.json()) })
//    .catch((error) => {
//        console.log(error);
//    })

const requestCity = async (city) => {
    const baseURL = 'http://api.openweathermap.org/data/2.5/weather'
    const query = '?q='+city+'&appid='+key;
    //const query = '?q=${city}&appid=${key}'; doesn't work

//make fetch call (promise call)
    const response = await fetch(baseURL + query);

//promise data
    const data = await response.json();
    return data;

}

