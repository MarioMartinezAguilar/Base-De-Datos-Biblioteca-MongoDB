// realizando una consulta en nuestra colección libros donde nada más queremos 3 documentos los primeros 3
db.libros.find().limit(3)

// consulta con el comando limit en la colección usuarios donde nos muestra los dos primeros usuarios:
db.usuarios.find().limit(2)

//usando el comando skip vamos hacer una consulta en nuestra colección libros omitiendo los 2 primeros libros
// si solo vamos a mostrar dos con el comando limit
db.libros.find().skip(2).limit(2)

// Ahora vamos hacer otra consulta con skip y limit pero utilizando un filtro de búsqueda en el find buscaremos los que tengan como genero Novela Narrativa pero nos vamos a saltar un libro con el comando skip
db.libros.find({"genero": "Novela Narrativa"}).skip(1).limit(2)



