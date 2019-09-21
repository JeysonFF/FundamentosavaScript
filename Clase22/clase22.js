function Persona(nombre, apellido, edad, estatura){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.estatura = estatura;
}

Persona.prototype.saludar = function(){
     console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
};

Persona.prototype.soyAlto = function () {
    return this.estatura> 1.8;
};

var jesus = new Persona('Jesus', 'Castellanos', 29, 1.72);
var erika = new Persona('Erika', 'Luna', 33, 1.65);
var arturo = new Persona('Arturo', 'Martinez', 85, 1.89)

console.log(jesus.soyAlto());
console.log(arturo.soyAlto());