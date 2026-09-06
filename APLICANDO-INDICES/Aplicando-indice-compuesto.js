//Aplicación del índice compuesto en la base de datos
//como vemos este índice compuesto también esta en la colección de libros
// donde establecimos los campos género e idioma delos libros

//Para hacer funcionar nuestro índice compuesto vamos 
//a realizar una consulta en la colección de libros
//buscando los libros por género e idioma como se muestra en el
//siguiente script:
db.libros.find({
    genero:"Literatura Juvenil", 
    idioma:"Español"
}).pretty()

//nos dará como resultado el libro que contenga ese idioma y ese género
//Ahora también podemos nada mas pasar un solo campo 
//y seguirá funcionando el índice compuesto también lo toma en cuenta
//vemos en el siguiente script que solo vamos a buscar el libro por genero
db.libros.find({ 
    genero:"Ingeniería Informática"
})

//devolverá los libros que encuentre con ese género

//Podemos aplicar explain para ver si el índice compuesto se esta ejecutando
db.libros.find({
    genero:"Ingeniería Informática"
}).explain("executionStats")
//vemos que efectivamente se esa ejecutando por la siguiente información:
// con el suso del Scanner de índices de Mongo y el propio nombre del índice
//con indexName

/* inputStage: {
    stage: 'IXSCAN',
    keyPattern: { genero: 1, idioma: 1 },
    indexName: 'genero_idioma_index',
} */