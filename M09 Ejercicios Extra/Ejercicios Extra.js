/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var k = [];
   for(var clave in objeto){
      var valor = objeto[clave];
      var n = [clave, valor];
      k.push(n);
   }
   return k;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var k = [];
   for(let i = 0; i < string.length; i++){
      k.push(string[i]);
   }
   var contar = {};
   k.forEach(element => {
      contar[element] = (contar[element] || 0 ) + 1;
   });
   return contar;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var may_ = "";
   var min_ = "";
   for(let i = 0; i<string.length;i++){
      if(string.charAt(i) === string.charAt(i).toUpperCase()){
         may_ += string.charAt(i);
      }else{
         min_ += string.charAt(i);
      }
   }
   return may_ + min_ ;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var k = frase.split(" ");
   for(var i = 0; i < k.length; i++){
      k[i] = k[i].split("").reverse().join("");
   }
   return k.join(" ");
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var invertido = numero.toString().split("").reverse().join("");
   if(invertido == numero){
      return("Es capicua");
   }else{
      return("No es capicua")
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var k = [];
   for(let i = 0; i < string.length; i++){
      if(string[i] === "a" || string[i] === "b" || string[i] === "c" ){
      }else{
         k.push(string[i]);
      }
   }
   var str_ = k.join("");
   return str_;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   arrayOfStrings.sort(function(a,b){
      return a.length - b.length;
   });
   return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var k = [];
   for(let i = 0; i < array1.length; i++){
      for(let j = 0 ; j< array2.length; j++){
         if(array2[j] === array1[i]){
            k.push(array2[j]);
         }
      }
   }
   return k;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
