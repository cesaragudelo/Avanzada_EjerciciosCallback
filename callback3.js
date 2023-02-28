//punto 9
function crearEstudiante(nombre, planeta,edad,estatura,clasificarEstiante){
    setTimeout(function(){
        let estudiante={
            nombre:nombre,
            edad:edad,
            planeta:planeta,
            estatura:estatura
        }
        clasificarEstiante(estudiante.edad)
    },1000)
}

crearEstudiante("Cesar","Marte", 31, 1.86,function(edad){
    if (edad<15) {
        console.log("su edad es: "+edad+" tu clase sera manejo de la fuerza")
    }else{
        console.log("su edad es: "+edad+" tu clase sera uso del sable")
    }
})