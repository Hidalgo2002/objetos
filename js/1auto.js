let auto = {
marca: "audi",
modelo: "2016",
color: "rojo",
puertas: "3",
combustible: "nafta",
encendido1:false,
encendido:function(){
    console.log("encendido")
    this.encendido1 = true
},
apagado:function(){
    console.log("apagado")
    this.encendido1 = false
}
}

auto.apagado()
console.log(auto)