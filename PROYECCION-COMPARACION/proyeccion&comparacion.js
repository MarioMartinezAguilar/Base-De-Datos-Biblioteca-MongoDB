// Consulta haciendo uso de la proyección 
// en este caso mostraremos los libros pero proyectaremos 
// solo los campos que queremos mostrar título y 
// autores solamente:
db.libros.find({},{"titulo": 1,"autores": 1})

// Ahora vamos hacer una proyección pero 
// no mostraremos en la consulta el id del libro 
db.libros.find({},{"titulo": 1,"autores": 1,"_id": 0})

//operador de comparación equals en MongoDb($eq)
//realizamos una consulta con el operador
//  $eq que nos diga cual libro tiene 496 páginas
//  en la colección detalle_libros
db.detalle_libros.find({"numero_paginas": {$eq: 496}})

//operador not equal($ne)
//realizamos una consulta donde nos devolverá 
// todos los libros que no sean del genero Novela Narrativa.
db.libros.find({"genero": {$ne: "Novela Narrativa"}})

//operador greater than(mayor que)($gt)
// realizamos una búsqueda en la colección
//  detalle_libros aquellos libros que 
// cuenten con más de 1000 paginas
db.detalle_libros.find({"numero_paginas": {$gt: 1000}})

//operador greater than or equal(mayor o igual que)($gte)
//realizamos una consulta en la colección libros donde nos devuélvalos libros con el número de copias disponibles mayor o igual a 3 utilizado este operador
db.libros.find({"copias_disponibles": {$gte: 3}})

//operador less than(menor que)($lt)
//realizamos una consulta en la colección de detalle_libros que nos devuelva los libros tengan menos de 300 paginas(Nos devolverá dos libros que cumplen con esa condición)
db.detalle_libros.find({"numero_paginas":{$lt: 300}})

//operador less than or equal to(menor o igual que)($lte)
//realizamos una consulta donde en la colección libros donde nos devuelva los libros que el número de copias disponibles sea menor o igual que  2 devolverá los libros que tengan 1 o 2 copias disponibles
db.libros.find({"copias_disponibles": {$lte: 2}})

// operadores de comparación (slice y $)
//Para utilizar el operador de proyección slice 
// primero vamos a crear un libro que tenga varios autores
//insertamos el libro
db.libros.insertOne({
  "titulo": "Por una Rosa",
  "isbn": "978-8490437926",
  "fecha_publicacion": ISODate("2017-03-16"),
  "editorial": "Montena",
  "autores": [
    {
      "nombre": "Laura Gallego",
      "pais": "Española"
    },
    {
      "nombre": "Benito Taibo",
      "pais": "Mexicano" 
    },
    {
      "nombre": "Javier Ruescas",
      "pais": "Español"
    } 
  ],
  "genero": "Literatura Juvenil", 
  "numero_paginas": 193,
  "idioma": "Español"
}) 
// vamos aplicar el operador slice donde vamos a 
// traer los primeros dos autores de libros  
db.libros.find(

  {"titulo": "Por una Rosa"},

  {"autores": { $slice: 2}}

)
//Ahora vamos a utilizar el operador de proyección ($)
// realizamos la siguiente consulta en la colección de 
// libros donde traeremos el nombre del autor solamente
//  con la siguiente sintaxis:
db.libros.find(
  {"autores.nombre": "Laura Gallego"},
  {"autores.$": 1}
  
)








