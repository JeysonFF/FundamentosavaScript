const API_URL='https://swapi.co/api/';
const PEOPLE_URL ='people/:id';

const lukeurl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`;
const opts = { crossDomain: true};
const onPeopleResponse =(data)=> console.log(`Hola yo soy ${data.name}`);

$.get(lukeurl, opts, onPeopleResponse);
