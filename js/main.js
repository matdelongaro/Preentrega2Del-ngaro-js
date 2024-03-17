let pais = prompt("Ingrese País")



function mostrarJugadores(player){
    player.forEach(jugador => {
        console.log(jugador.nombre + ' - ' +  jugador.goles + ' goles.' )
    });
}

function filtrarPais(jugador){
    if (pais){
        return jugador.pais === pais
    }
    return jugador;
}

function filtrarJugadores(){
    const resultado = jugadores.filter(filtrarPais);
    if(resultado.length>0){
        mostrarJugadores(resultado);
    }else{
        console.log('sin resultados')
    }
}

filtrarJugadores()