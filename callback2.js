//siempre inicio declarando la funcion principal
//un parametro de la funcion principal es el collback
function principal(numeros,callback){
    setTimeout(function(){
        let suma=0
        numeros.forEach(numero=>suma=numero+suma)
        callback(suma)//llamando al callback
    },2000)
}

//llamando a la funcion principal
let arreglo=[1,2,3,4,5]
principal(arreglo,function(suma){//declarando el callback
    let operacion=suma*100
    console.log(`la sumatoria final es: ${operacion}`)
})