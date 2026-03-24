// este operador se utiliza para agregar un valor a un arreglo solo si no existe en el arreglo evitando duplicados
//por ejemplo vamos a agregar un autor al arreglo de autores en el libro (Organización y Diseño De Computadoras), colocaremos un actor ficticio solo para aplicar el uso del operador.
db.libros.updateOne(
    {"isbn":"8448118294"},
    {$addToSet: {"autores":{"nombre":"Autor_De_Prueba","pais":"Prueba"}}}
)
