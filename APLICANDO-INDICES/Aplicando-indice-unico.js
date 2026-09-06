//Para aplicar y ver que realmente se esta aplicando un
// índice de tipo único como lo creamos para la colección de libros
// con esto este índice nos va asegurar que no se inserten libros
//con el mismo isbn si tratamos de insertar un libro con el 
// siguiente script:
db.libros.insertOne({
    titulo: "Libro Repetido",
    isbn: "978-607-07-2879-2"
});
// nos retorna el siguiente error
//por que no podemos insertar el libro por que tiene
//el mismo isbn, vemos que el indice se esta ejecutando correctamente:

/* MongoServerError: E11000 duplicate key error collection: Biblioteca.libros 
index: isbn_1 dup key: { isbn: "978-607-07-2879-2" }
 */

//podemos manejar el error usando try y catch de JavaScript
//sabemos que el error es un error 11000 de duplicación de key
//solución con try y catch
try{ 
    db.libros.insertOne({
        titulo:"Libro Repetido", 
        isbn:"978-607-07-2879-2"
    }); 
    print("Libro Guardado Correctamente");
} catch(error){
    if(error.code === 11000){
        print("Error De Validación: isbn ya está registrado en la base de datos");
    } else{
        print("Ocurrió un error inesperado: " + error.message);
    }
}
//nos dará como resultado el error por que ese isbn ya existe:
"Error De Validación: isbn ya está registrado en la base de datos"

//de lo contrario si colocamos un isbn que no exista nos dejara insertar
//el libro a la base de datos:
"Libro Guardado Correctamente"
