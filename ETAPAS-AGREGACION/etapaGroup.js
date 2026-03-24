//Group->Nos permite agrupar documentos por un campo 
// específico
//Vamos agrupar nuestros libros por el número
//  de copias disponibles es decir vamos a mostrar 
// cuantos libros tienen 1, 2, 3,4 o más copias.

db.libros.aggregate([
    {$group: {_id: "$copias_disponibles", total_libros:{ $sum:1}}}
])
// resultado de la agrupación como podemos ver 
// tenemos 7 libros en el campo _id representa el
//  número de copias y el campo total_libros 
// nos dice el número de libros que hay:
/* {
    _id: 1,
    total_libros: 2
}
{
    _id: 2,
    total_libros: 2
}
{
    _id: 3,
    total_libros: 1
}
{
    _id: null,
    total_libros: 1
}
{
    _id: 4,
    total_libros: 1
} */
// vamos hacer una agrupación de libros en el 
// documento detalle_libros por el idioma español 
// y vamos a calcular el promedio del número de paginas
db.detalle_libros.aggregate([
    {$group: {_id: "$idioma", promedioPaginas: {$avg: "$numero_paginas"}}}
])
//resultado de la consulta para sacar el promedio
/* {
    _id: 'Español',
    MaximoNumPaginas: 1216
} */

// vamos hacer agrupar libros en el documento
//  detalle_libros por el idioma y vamos a 
// calcular el valor el libro que tenga el valor máximo
//  en el número de paginas
db.detalle_libros.aggregate([
    {$group: {_id: "$idioma", MaximoNumPaginas: {$max: "$numero_paginas"}}}
])
//resultado de la consulta para sacar el valor máximo
/* {
    _id: 'Español',
    MaximoNumPaginas: 1216
} */


