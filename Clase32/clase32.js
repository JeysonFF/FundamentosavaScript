const API_URL='https://swapi.co/api/';
const PEOPLE_URL ='people/:id';

const opts = { crossDomain: true};

const obtenerPersonaje = (id)=>{
    return new Promise( (resolve, reject) =>{
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
        $
        .get(url, opts, (data)=>{
            resolve(data);
        })
        .fail(()=>reject(id));
   })};

const onError = (id)=>console.log('Sucedió un error al obtener el personaje ${id}');

obtenerPersonaje(1)
   .then((data)=>{
       console.log(`El personaje 1 es ${data.name}`);
   })
   .catch(onError);


