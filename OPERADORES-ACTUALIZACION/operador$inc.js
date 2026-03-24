//operador de actualización $inc se utiliza para 
// incrementar o decrementar un valor numérico en la base de datos:
// por ejemplo vamos a incrementar el valor de 
// número de copias disponibles de un 
// libro(Cien Años De Soledad) que solo tiene 
// una copia disponible y queremos que tenga 4 copias disponibles:
db.libros.updateOne(
    {"isbn":"978-607-07-2879-2"},
    {$inc: {"copias_disponibles": 3}}
)

