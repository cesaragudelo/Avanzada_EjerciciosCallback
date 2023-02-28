

function saludar(){//declarando la funcion 1
    setTimeout(function(){
        console.log("hola como estas")
        despedir()//llamando a la funcion 2
    },3000)

}

function despedir(){//declarando la funcion 2
    console.log("adios mucha suerte")
}

saludar()//llamando a la funcion 1
