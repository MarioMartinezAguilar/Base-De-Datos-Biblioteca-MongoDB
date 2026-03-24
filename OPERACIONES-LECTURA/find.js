//comando find() devuelve todos los documentos de una colección
db.usuarios.find()

// find(query) haremos una consulta a la colección préstamos 
// para verificar si un usuario realizamos algún préstamo de algún libro:
db.prestamos.find({"usuario_id": ObjectId("69793d92ee96da6eb64fbf66")})

// consulta en la colección libros buscamos todos los libros
//  que tengan como género(Novela Narrativa)
db.libros.find({"genero": "Novela Narrativa"})

// uso de find podemos almacenar en una variable en MongoDB 
// el resultado de la consulta
let librosGenero = db.libros.find({"genero": "Novela Narrativa"})

// solamente escribimos el nombre de la variable y 
// nos dará el resultado de la consulta
librosGenero

//Consulta con findOne en la colección autores la consulta
//  solo nos mostrara un documento con la información de un solo autor
db.autores.findOne()

//Consulta con utilizando findOne pasando un query como 
// búsqueda igual solo nos retorna un solo documento que 
// cumpla con la condición de búsqueda(Por Nombre):
db.autores.findOne({"nombre": "Miguel De Cervantes"})


