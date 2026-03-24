//este método remove también sirve para eliminar 
// nada mas que fue más usado en las versión anteriores
//  de MongoBD es decir es un método obsoleto
// vamos eliminar un usuario con remove de 
// nombre Alejandra Lara
db.usuarios.remove(
    {"nombre": "Alejandra Lara"}
)
// nos arroja esta advertencia que utilicemos los
// otros métodos pero al igual funciona
//DeprecationWarning: Collection.remove() is deprecated. 
// Use deleteOne, deleteMany