//el operador $min se utiliza para actualizar el valor de un campo solo si el valor nuevo es menor que el valor actual
//por ejemplo vamos a actualizar la fecha de publicación de un libro(Don Quijote De La Mancha) al modificar la fecha con este operador tenemos que colocar una fecha menor que la que tiene actualmente el libro
db.libros.updateOne(
    {"isbn":"978-9707700611"},
    {$min: {"fecha_publicacion": ISODate("1605-01-14")}}
)