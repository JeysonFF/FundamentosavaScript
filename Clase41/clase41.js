const jesus = {
    nombre : 'Jesus',
    apellido : 'Castellanos',
    edad : 29
}
// const cumpleayos = (persona) => persona.edad++;

const cumpleayosInmutable = (persona) =>({
    ...persona,
    edad: persona.edad +1 
});