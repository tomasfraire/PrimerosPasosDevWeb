# Los 33 conceptos que todo desarollador debe entender de JavaScript

En gitHub (Ingles): https://github.com/leonardomso/33-js-concepts

En youtube (Español): https://www.youtube.com/playlist?list=PLfWyZ8S-XzecAttp3QU-gBBXvMqEZTQXB


# 1. La pila de ejecucion (call Stack)

FILO = First In Last Out

La forma en la cual JavaScript recorre o ejecuta lso datos es por medio de una pila, y como en la vida cotidiana apilamos libros o platos, sabemos muy bein que el primero qu ese pone es el ultimoque se va a sacar, si tengo tres libros rojo, amarillo y azul y los coloco de la siguiente forma:

Apoyo el azul sobre la mesa, al azul le apilo el rojo y a este mismo le apilo el amarillo. para obtener el azul debo retirar el amarillo, luego el rojo y recien ahi obtengo el azul. 

Esto tambien nos sirve para econtrar errores, rastrearlos como un mapa, nuestro mapa es la pila. A esto se le conoce como STACKTRACE, que es la secuencia de llamadas que se fueron dando durante la ejecucion del progrmaa hasta que sucedio una excepcion o un error inesperado. INFOMRACION UTIL PARA ENCONTRAR BUGS EN EL CODIGO.

lo que se apila es un Frame o Resgistro que contiene a la funcion, el contexto de ejecucion, el nombre del archivo al que pertenece y el numero de la proxima linea a ejecutar.

Las funciones DEJAN la pila cuando se TERMINAN de ejecutar.

Toda esta infromacion y mas que seguro me flata por ser principiante podemos ver desde las seciones de Call Stack y Scope en las herramientas para desarolladores de los navegadores web modernos. 

# 2. TIPOS DE DATOS PRIMITIVOS


