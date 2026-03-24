// vamos a crear un índice de tipo único 
// en nuestra colección de libros donde 
// el valor de un campo se único esto lo haremos
//  en el campo isb
db.libros.createIndex(
    {"isb":1},
    {untique: true}
)
// resultado de la consulta Mongo por defecto 
// le da un nombre al índice:
isb_1
