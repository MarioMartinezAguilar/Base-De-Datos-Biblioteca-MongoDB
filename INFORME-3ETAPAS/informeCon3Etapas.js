//realizaremos un informe aplicando las tres etapas
//match,group y sort.
// el informe consiste en darnos el número de 
// total de préstamos por libro y ordenar 
// los resultados para ver cuál es el libro más prestado
//  solo los prestamos realizados en 2026
//usamos match -> para filtrar
// usamos group -> para agrupar
//usamos sort -> para ordenar los resultados
db.prestamos.aggregate([

    {
        // primera etapa con match filtramos la búsqueda 
        // por el campo fecha_prestamo que corresponda 
        // al 2026
        $match:{
            fecha_prestamo:{$gte: ISODate("2026-01-01")}
        }
    },
       // segunda etapa usando el group sumamos 
       // cuantas veces sea prestado cada uno de los libros por su id 
    {
        $group:{
            _id: "$libro_id",
            NumPrestamos:{ $sum: 1}
        }
    },
        // tercera etapa usando el sort los ordenamos 
        // de mayor a menor y obtenemos el libro 
        // que más veces se ha prestado
    {
        $sort:{ NumPrestamos: -1}
    }
])

// resultado de la consulta en el 2026 tenemos 
// 6 préstamos como podemos ver a continuación:
// y el libro más prestado contiene 3 préstamos
//  en lo que va del 2026 que corresponde al de 
// "Don Quijote De La Mancha"
/* {
    _id: ObjectId('697a7e052e59f3d51b8c7142'),
    NumPrestamos: 3
}
{
    _id: ObjectId('697bbae82e59f3d51b8c7144'),
    NumPrestamos: 1
}
{
    _id: ObjectId('697a5c892e59f3d51b8c7140'),
    NumPrestamos: 1
}
{
    _id: ObjectId('696ea2b56a52c266d4bbbab7'),
    NumPrestamos: 1
}
 */