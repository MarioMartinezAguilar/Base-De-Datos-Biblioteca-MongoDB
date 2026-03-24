//updateMany nos permite actualizar múltiples documentos 
// cuando se cumple con el filtro dado
//vamos actualizar todos los libros que tengan 
// como género "Novela Narrativa" por simplemente Novela
db.libros.updateMany(
    {"genero":"Novela Narrativa"},
    {$set: {"genero":"Novela"}}
)