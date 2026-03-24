// updateOne solo actualiza un documento de la base de datos según el filtro dado
// vamos hacer a cambiar el número de teléfono de un usuario en específico con el nombre de (Alejandra Lara) el cual tenía como número telefónico el 455-510-90-10
db.usuarios.updateOne(
    {"nombre":"Alejandra Lara"},
    { $set: {"telefono": "4556108015"}}
)
//también con el método updateOne podemos agregar campos en los documentos
//agregamos el campo "edad" a nuestro usuario(Alejandra Lara)
db.usuarios.updateOne(
    {"nombre":"Alejandra Lara"},
    { $set: {"edad": 28}}
)


