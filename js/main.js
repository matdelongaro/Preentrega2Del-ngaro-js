let elegirCarrera = prompt("Bienvenido, que carrera va a correr. ¿CoderHouse o CodeRun?");

while(elegirCarrera != "coderhouse"  && elegirCarrera !="coderun" ){
    alert("Dato erróneo")
    elegirCarrera = prompt ("Seleccione la carrera que va a correr ¿CoderHouse o coderun?")
}
if (elegirCarrera == "coderhouse"){
    alert("Estas son las distancias disponibles")
    let distanciasDisponiblesCoderhouse = distanciasCoderhouse.map((distanciasCoderhouse) => distanciasCoderhouse.nombre + "--" + distanciasCoderhouse.precio + " $" 
    );
    alert(distanciasDisponiblesCoderhouse.join(" - "))
}else if(elegirCarrera == "coderun"){
    alert("No quedan cupos para inscribirse a la carrera CodeRun, recargue la página si quiere consultar disponibilidad en Maratón CoderHouse")
}

while(elegirCarrera == "coderhouse"){
    let distanciaCoderhouse = prompt("Seleccioná una distancia")
    let precio = 0

    if(distanciaCoderhouse == "5k" || distanciaCoderhouse == "10k" || distanciaCoderhouse == "21k" || distanciaCoderhouse == "42k"  ) {
        switch(distanciaCoderhouse){
            case "5k":
            precio = 12000
            break;
            case "10k":
            precio = 14000
            break;
            case "21k":
            precio = 16000
            break;
            case "42k":
            precio = 18000
            break;
            default:
            break;
        }
        carrito.push({distanciaCoderhouse,precio})
        console.log(carrito)
        alert("Gracias por su compra")
        carrito.forEach((carritoFinal) => {
            console.log(`distancias elegida: ${carritoFinal.distanciaCoderhouse}, total a pagar ${carritoFinal.precio}`)
        })
        break;
    }
    else{
        alert("No existe esa distancia")
    }


}


