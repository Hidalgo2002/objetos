class Producto{
    constructor(codigo1, nombre1, precio1){
    this.codigo = codigo1;
    this.nombre = nombre1;
    this.precio = precio1;}

    imprimeDatos(){
    document.write(`codigo:${this.codigo}
    <br>nombre:${this.nombre}
    <br>precio:${this.precio}`)
    }
}

let Chocolate = new Producto ( "HRT263", "FELFORT", "90")
console.log(Chocolate);

let Caramelo = new Producto ("JKL591", "TOFI", "2")
console.log(Caramelo);

let Gaseosa = new Producto ("POS251", "COCA COLA", "80")
console.log(Gaseosa);

Chocolate.imprimeDatos();
Caramelo.imprimeDatos();
Gaseosa.imprimeDatos();