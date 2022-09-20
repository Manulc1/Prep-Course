// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código: 
//    var numeros =0;
//    for(var i=0;i<11;i++){
//     numeros += i;
//    }
//    return numeros;
     var acum = 0;
     var i = 1;
     while(i<11){
       acum += i;
       i++;
     } 
     return acum;
}  

var array= [1,2,3,4,5,6,7,8,9,10]

function encuentraPares(array){
   // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  //var result = Array.from(array).filter(element => element % 2 === 0);
  var result=[];
  for(var i = 0;i<array.length;i++){
   //indice
   
    if(array[i]%2===0){
      result.push(array[i]);
    }
  }
    return result
}   


 
  
  function elevaAlCuadrado(array){ 
    
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  var result = array.map(function(valores_arreglo){ 
      return  valores_arreglo ** 2;
     
  })
  return result
} 
    //cuadrado.forEach((index) => {
//    return(cuadrado.slice(index,index+1));
//  });

 


function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código: 
  //var arreglo = [1,2,3,4,5,6,7,8,9,10];
  
  var total=array.reduce(function(acumulador,elementosDelArray){
    return acumulador + elementosDelArray;
  })
  return total;
  
  /*var result = 0;
  for(var i = 0;i < array.length;i++){
    result += array[i]; 

  } return result*/
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  return num.toString().length;
   
} 
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
