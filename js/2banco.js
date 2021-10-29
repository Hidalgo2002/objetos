let cuenta = {
    titular: "Alex",
    saldo: "0",
    ingresar : function(){
    let dinero = prompt("ingresar dinero");
    this.saldo = Number(dinero);
    },
    // extraer:
    // // function(){

    // // },
    // informar: 
    // function(){
        
    // }
    extraer : function(){
        let dinero = prompt ("extraer dinero");
        this.saldo = this.saldo - Number(dinero)
    },
 
}
cuenta.ingresar();
cuenta.extraer();
cuenta.informar();
document.write("tu saldo es de: " + cuenta.saldo);