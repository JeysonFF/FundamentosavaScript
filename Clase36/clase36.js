var jesus={
    nombre: 'Jesus',
    apellido: 'Castellanos',
    edad : 28
};

function esMayorDeEdad(persona){
    let mensaje;
    if (persona.edad>=18) {
        mensaje = 'Es mayor de edad';
    }else{
        mensaje = 'Es menor de edad';
    }
    console.log(mensaje);
}

esMayorDeEdad(jesus);