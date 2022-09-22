/*
Nombre: Jan Marco Berges
C.I:30212327
Nota: El resultado se puede ver en la consola, luego del pedido de datos
*/

var capitalInicial=parseInt(prompt("Introduzca el valor de su capital inicial, si su capital es decimal coloque un punto ' . ' "));
var tiempoInversion=parseInt(prompt("Introduzca de cuantos años sera su inversion"));
var tasaInteres=parseInt(prompt("Introduzca la tasa de interes anual, si su interes es decimal coloque un punto ' . ' "));
var aporteAnual=parseInt(prompt("Introduzca su aporte anual, si su aporte es decimal coloque un punto ' . ' "));  //Pedido de datos

calculoInteres(); //Uso de la funcion 

function calculoInteres(){ //creacion de la funcion sin pasar argumentos
    
    var intereses = 0; //creacion de la variable local "interes"
    tiempoInversion*=12;
    tasaInteres/=12; //calculos necesarios para operar el calculo 

    for(var i = 1; i<=tiempoInversion;i++){ //bucle de para enseñar el calculo
        intereses = (capitalInicial/100) * tasaInteres; //calculo de interes
        console.log("Mes= ", i, "Capital=", capitalInicial.toFixed(2), "Tasa de Interes=", tasaInteres.toFixed(2), "Intereses=", intereses.toFixed(2)); //muestra del calculo mediante cada mes
        capitalInicial+=intereses; //suma de intereses mas el capital para la proxima iteracion
        if (i%12==0){ //condicional para añadir el aporte anual 
            capitalInicial+=aporteAnual; 
            console.log("Se ha realizado un aporte anual al capital inicial");
        }
    }
}

