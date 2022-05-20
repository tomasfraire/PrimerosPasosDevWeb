# Un resumen/glosario en orden cronologico de lo visto en el curso preparatorio "M0" del bootcamp soy henry.

* expression vs statment:

Un statement ordena una tarea, mientras que una expression es una linea que de codigo que resuelve un valor. 
Una expresion siempre retorna un valor, un statement realiza una accion.

* Variables:

 Contenedor, espacio de memoria reservado para pasarle un valor.

* Tipos de datos:
 Los tipos de datos son una clasificacion de estos, un atributo que ayuda al interprete a saber como procesarlo correctamente.
 strings, numbers, boolean, null, undifinde


* Funciones (argumentos, `return`):

* Declaraciones `if`:

* Valores booleanos (`true`, `false`):

* Math:

* Flujos de control

* Bucles for

Imprime hasta numero 100:

for (var i = 1; i <= 100; i++){
    console.log(i);
}

Imprime hasta numero N:

function imprimeN(n){
    for (var i = 1; i <= n; i++){
        console.log(i);
    }
}

Imprime solo numeros pares:

function imprimeN(n){
    for (var i = 1; i <= n; i++){
        if( i % 2 === 0){
            console.log(i)
        }
    }
}
Imprime solo numeros pares hasta 200, depues de eso para:

function imprimeN(n){
    for (var i = 1; i <= n; i++){
        if( i % 2 === 0){
            console.log(i)
        }
        if( i > 200){
            return;
        }
    }
}

For anidado:

function imprimeN(n){
    for (var i = 1; i <= n; i++){
        if( i % 2 === 0){
            console.log(i)
        }
        if( i > 200) {
            for(var j = 0; j < 10; j++){
                console.log(j);
            }
            return;
        }
    }
}

Bucle anidado visto en clase:

// n filas
// m columnas
function matriz (n, m){
    for (var i = 0; i <= n; i++){
        for ( var j = 0; j <= m; j++){
            console.log(i + ' ' + j);
        }
    }
}

* Bucles While

while (condicion) {
    //bloque de codigo
}

var i = 0;
while (i < 100){
    console.log(i);
    i++;
}

function matriz(n, m) {
    var j = 0;
    var i = 0;
    while (i < n){
        while(j < m) {
            console.log(i, j);
            j++;
        }
        j = 0;
        i++;
    }
}

* Arrays (arreglos, listas, listas de listas, tablas de multiplicar)
var array = [1, 2, 3, 4]

var array2 = [1, tomas, 3, funcion(){console.log('hola')}, 2, [1, 2, 3, 4], null] 

array [0] // 1

array2 [4] // funcion(){console.log('hola')}

function tablaDelSeis(){

  var arrayMulti6 = []
  for (var i = 0; i < 11; i++){
    arrayMulti6.push(6*i);
  }
  return arrayMulti6;
}

array.length

// asignar valor a un array: 
 
var lista = [];

lista[0] = "primer elemento"

//los "huecos" que queden vacios sera undefined, eso sucede si "lista[3] = x" la array sera asi "['primer elemento', undefined, undefined, 'x']" y se vera asi "['primer elemento', <2 empty items>, 'x']"

.push: resive un argumento y pone ese argumento en la ultima posicion de la array. 

.pop: devuelve y Saca el ultimo elemento de la array. 

Recoriendo una Array

var lista = [1, 2, 3, 4, 5]
        //   0, 1, 2, 3, 4 
for( var i = 0; i < lista.length; i++){
    console.log (lista[i]);
}     

while(lista.length > 0) {
    console.log(lista.pop())
}

