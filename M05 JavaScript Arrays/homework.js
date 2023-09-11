/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   var p_el = array[0];
   return(p_el);
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   var u_el = array[array.length -1];
   return(u_el);
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return(array.length);
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var incre_uno = array.map((num) => {
      return num+1;
   });
   return incre_uno;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var st_nuevo = palabras.join(' ');
   return st_nuevo;
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   return array.includes(elemento);
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var sum = 0;
   arrayOfNums.forEach((num) => {
      sum = sum + num;
   });
   return sum;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var prom = 0;
   for(let i = 0; i < resultadosTest.length; i++){
      prom = prom + resultadosTest[i];
   }
   var len_ =  resultadosTest.length;
   return prom/len_;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var may_ = 0;
   for(let i = 0; i < arrayOfNums.length; i++){
      if(may_ < arrayOfNums[i]){
         may_ = arrayOfNums[i];
      }else{
         may_ = may_;
      }
   }return may_;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   var mul = 1;
   if(arguments.length === 0){
      return 0;
   }else if(arguments.length === 1){
      return arguments[0];
   }else{
      for(let i = 0; i < arguments.length; i++){
         mul = mul * arguments[i];
      }
   }
   return mul;
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var relem = 0;
   for(let i = 0; i < array.length; i++){
      if(array[i] > 18){
         relem = relem + 1;
      }else{
         relem = relem;
      } 
   }
   return relem;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if((numeroDeDia % 7) == 0 || (numeroDeDia % 7) == 1 || numeroDeDia == 1){
      return ("Es fin de semana");
   }else{
      return ("Es dia laboral");
   }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   let primerD = (""+num);
   if(primerD[0] == 9 ){
      return true;
   }else{
      return false;
   }
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   var alpha = 0;
   var tot = array.length;
   for(let i = 0; i < array.length; i++){
      if(array[0] === array[i]){
         alpha = alpha + 1;
      }else{
         break;
      }
   }
   var kroissant = tot / alpha;
   if (kroissant === 1) {
      return true;
   }else{
      return false;
   }
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var newarr = [];
   for(let i = 0; i < array.length; i++){
      if(array[i] == "Enero" || array[i] == "Marzo" || array[i] == "Noviembre"){
         newarr.push(array[i]);
      }else{
         newarr = newarr;
      }
   }
   if(newarr.length == 3){
      return (newarr);
   }else{
      return ('No se encontraron los meses pedidos');
   }
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var arr = [];
   var wae = 0;
   for(let i = 0; i<11; i++){
      wae = 6 * i;
      arr.push(wae)
   }
   return (arr);
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var arr_cien = [];
   for(let i = 0; i < array.length; i++){
      if(array[i] > 100){
         arr_cien.push(array[i]);
      }
   }
   return arr_cien;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   let i = 0;
   var sum = [];
   do{
      num = num + 2;
      sum.push(num);
      i = i+1;
      if(i == num){
         return("Se interrumpió la ejecución");
         break;
      }
   }while( i<10)
   return sum;
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var i = 0;
   var sum = [];
   do{
      num = num + 2;
      sum.push(num);
      i = i+1;
      if(i == 5){
         i = i +1;
      }
   }while( i < 10)
   return sum;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
