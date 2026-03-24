//el índice de texto permite realizar búsqueda
//  de texto completo en un campo o conjunto de 
// campos de tipo cadena
// vamos a crear un índice de texto en la colección
//  de libros en el campo título para hacer más
// fácil su búsqueda por su título del libro:
db.libros.createIndex(
    {"titulo":"text"},
    {name:"titulo_index"}
)
//Como resultado nos devuelve el nombre del índice
// el campo name hace referencia a que nosotros 
// le estamos dando un nombre a nuestro índice:
titulo_index

