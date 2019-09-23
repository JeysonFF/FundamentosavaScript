const jesus = {
    nombre : 'Jesus',
    apellido : 'Castellanos',
    edad : 29
}

const  yesika= {
    nombre : 'Yesika',
    apellido : 'Cortés',
    edad : 29
}

function saludar(saludo = 'Hola'){
    console.log(`${saludo}, mi nombre es ${this.nombre}`);
}

// const saludarAJesus = saludar.bind(jesus);
// const saludarAyesika = saludar.bind(yesika);

// setTimeout(saludar.bind(jesus, 'Hola che'), 1000);

// saludar.call(jesus, 'Hola che');

saludar.apply(jesus, ['Hola che'])