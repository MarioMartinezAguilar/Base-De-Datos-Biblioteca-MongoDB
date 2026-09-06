//Comando para listar índices
db.libros.getIndices()
//nos traerá todos los índices creados

// Comando para eliminar índices
db.libros.dropIndex("isbn_1")
//dentro del paréntesis pasamos el nombre el índice
