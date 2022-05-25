/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function actividadesEnComun(persona1, persona2) {
  // La funcion llamada 'actividadesEnComun' recibe como argumento dos arrays de actividades (strings) llamados 'persona1' y 'persona2'
  // y debe devolver un array de strings con las actividades en comun ( aquellas que se repiten ) entre cada array.
  // ej: persona1 = ['leer', 'comer', 'pasear', 'dormir', 'jugar']
  //     persona2 = ['comer', 'dormir', 'futbol']
  // actividadesEnComun(persona1, persona2) => ['comer', 'dormir']
  // Tip: podes usar ciclos for anidados.
  // Tu código aca:

  let comun = [];
  for (let i = 0; i < persona1.length; i++){
    //palabra obtenida 1
    for (let j = 0; j < persona2.length; j++){
    //palabra obtenida 2
      if (persona1[i] === persona2[j]){
        comun.push(persona1[i]);
      }
    }    
  }
  return comun;
}

// No modifiques nada debajo de esta linea //


module.exports = actividadesEnComun