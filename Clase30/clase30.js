const API_URL='https://swapi.co/api/';
const PEOPLE_URL ='people/:id';

const opts = { crossDomain: true};

function obtenerPersonaje(id, callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    $.get(url, opts, (data)=> console.log(`Hola, yo soy ${data.name}`));
    if(callback){
        callback();
    }
}

obtenerPersonaje(1, ()=>obtenerPersonaje(2,()=>obtenerPersonaje(3)));




