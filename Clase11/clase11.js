var jesus ={
    nombre: 'Jesus',
    apellido: 'Castellanos',
    edad: 29,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: false
};

var milena ={
    nombre: 'Milena',
    apellido: 'Martinez',
    edad: 17,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: false
};

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre}`);
    if (persona.ingeniero===true){
        console.log(`Es:Ingeniero `);
    }else{
        console.log(`no es Ingeniero`);
    }

    if (persona.cocinero===true){
        console.log(`Es: cocinero `);
    }else{
        console.log(`no es cocinero`);
    }

    if (persona.cantante===true){
        console.log(`Es: cantante `);
    }else{
        console.log(`no es cantante`);
    }

    if (persona.dj===true){
        console.log(`Es: dj `);
    }else{
        console.log(`no es dj`);
    }

    if (persona.guitarrista===true){
        console.log(`Es: guitarrista `);
    }else{
        console.log(`no es guitarrista `);
    }

    if (persona.dron===true){
        console.log(`Vuela dron`);
    }else{
        console.log(`No vuela dron`);
    }
}

const MAYORIA_DE_EDAD = 18;

function esMayorDeEdad(persona){
    return persona.edad >= MAYORIA_DE_EDAD;
}

function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`);
    }else{
        console.log(`${persona.nombre} es menor de edad`);
    }
}



imprimirSiEsMayorDeEdad(jesus);
esMayorDeEdad(jesus)