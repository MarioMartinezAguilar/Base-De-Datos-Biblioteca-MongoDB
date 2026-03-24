// el método deleteOne sirve para eliminar 
// un documento de la base de datos que coincida
//  con el filtro de búsqueda dado.
//este comando solo elimina uno.
//Vamos a eliminar un usuario de nuestro base de datos 
// que tenga como nombre Juan Ayala.

db.usuarios.deleteOne(
    {"nombre":"Juan Ayala"}
)
