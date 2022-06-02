/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function palabraMasLarga(array) {
  // La funcion llamada 'palabraMasLarga' recibe un array 'array' de frases (strings) como parametro
  // y debe devolver la palabra mas larga entre todas las frases ( Es decir la palabra con mayor cantidad de caracteres)
  // Por ej:
  // palabraMasLarga(['hola esto string', 'frase con palabra']) debe devolver 'palabra'
  // Tu código aca:
  let word = '';

  for (let i = 0; i < array.length; i++){
    
    let str = array[i];
    let words = str.split(' ');
    
    for (let j = 0; j < words.length; j++){
      if (word.length < words[j].length ){
        word = words[j];
      }
    }
  }
  return word;
}

// No modifiques nada debajo de esta linea //


module.exports = palabraMasLarga