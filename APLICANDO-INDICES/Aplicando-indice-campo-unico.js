// para aplicar el índice de campo único
// primero vamos analizar lo siguiente este índice fue
//creado anteriormente en la coleccion de prestamos y lo hicimos
// a través del campo fecha_prestamos

// teniendo eso en cuenta vamos a realizar una consulta utilizando el 
//índice de campo único que nos diga cuales son los prestamos 
// de todo el 2026 de lo que va del año pero analizaremos esta consulta 
//para ver al optimización de la búsqueda ya que se esta utilizando un indice

//primero vamos a ejecutar la consulta de la siguiente manera
db.prestamos.find({ 
    fecha_prestamo: {$gte: ISODate("2026-01-28")}
}).explain("executionStats")
// de esta manera usando explain podemos analizar como se esta aplicando el indice
//analizando los siguientes aspectos:
// vemos que tenemos el ParsedQuery que nos dice al campo que se esta aplicando
//una condición como podemos ver en la siguiente información vemos que 
//empleamos la condición para traer los prestamos de todo lo que va de esta año
//empezando por una fecha en específico

/* {
    explainVersion: '1',
    queryPlanner: {
        namespace: 'Biblioteca.prestamos',
        indexFilterSet: false,
        parsedQuery: { fecha_prestamo: { '$gte': ISODate('2026-01-28T00:00:00.000Z')}}
    }
} */

//Ahora vamos analizar que se este aplicando el índice de campo único
//en la base de datos para eso verificamos el apartado winningPlan 
//y donde dice los inputStage tiene que decir en su propiedad stage IXSCAN con eso vemos que esta utilizando
//el índice podemos ver también el nombre del índice y el keyPattern que da el campo al
// que se está aplicando el índice como se ve en la siguiente información

/* winningPlan: {
    stage: 'FETCH',
    inputStage: {
        stage: 'IXSCAN',
        keyPattern: { fecha_prestamo: 1 },
        indexName: 'fecha_prestamo_1',
    }
} */

//Podemos también analizar otras cuestiones extra como por ejemplo:
// en este apartado executionStats podemos ver cuantos documentos son analizados
//es decir cuantos prestamos tenemos en esa fecha por ejemplo nos dice que son ocho
// prestamos de libros a lo que va del año como se aprecia en nReturned y totalKeyExamined

/* executionStats: {
    executionSuccess: true,
    nReturned: 8,
    executionTimeMillis: 0,
    totalKeysExamined: 8,
    totalDocsExamined: 8
}
*/

// podemos ver también el filtro que se aplica y a que base de datos
// se está aplicando en el apartado command como se muestra a continuación

/* command: {
    find: 'prestamos',
    filter: { fecha_prestamo: { '$gte': ISODate('2026-01-28T00:00:00.000Z') } },
    '$db': 'Biblioteca'
}, */

// adicionalmente podemos ver también cosas interesantes como por ejemplo la información
//del servidor en que host se ejecuta Mongo, el puerto de la base de datos,
// y la versión de MongoDB todo esto en el apartado de serverInfo como se muestra
//A continuación
/* serverInfo: {
    host: 'MARIO',
    port: 27017,
    version: '5.0.34',
    gitVersion: '3ed0d39e497e5876dab3a0b825f2e504806d0afd'
}, */
