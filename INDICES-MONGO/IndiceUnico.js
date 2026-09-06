// vamos a crear un índice de tipo único 
// en nuestra colección de libros donde 
// el valor de un campo se único esto lo haremos
//  en el campo isb
db.libros.createIndex(
    {"isbn":1},
    {unique: true}
)
// resultado de la consulta Mongo por defecto 
// le da un nombre al índice:
isbn_1
