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
