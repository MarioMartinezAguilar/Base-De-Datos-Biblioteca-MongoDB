//Índice compuesto incluyen más de un campo y permite
//  realizar  consultas con múltiples campos 
// Vamos a crear un índice compuesto en la colección 
// de libros relacionado con el género y el idioma del
//  libro:
db.libros.createIndex(
    {"genero": 1,"idioma":1},
    {name:"genero_idioma_index"}
)
// nos da como resultado el nombre de nuestro índice:
genero_idioma_index
