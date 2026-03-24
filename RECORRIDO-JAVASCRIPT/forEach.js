// Podemos recorrer documentos a través de un 
// ciclo de un ciclo forEach de JavaScript y dar 
// un resultado vas legible para el usuario poder extraer
//  propiedades de un documento específicas por ejemplo:
// con un ciclo forEach vamos a recorrer la colección de 
// libros  y que nos muestra en pantalla nada más los 
// nombres de los libros extrayendo solo su título del 
// documento con el ciclo de JavaScript forEach:

db.libros.find().forEach(libro => print("Título Del Libro:" + libro.titulo))

// dando como resultado el título de todos nuestros libros:
/* Título Del Libro:Cien Años De Soledad
Título Del Libro:Crónica De Una Muerte Anunciada
Título Del Libro:El Coronel No Tiene Quien Le Escriba
Título Del Libro:Don Quijote De La Mancha
Título Del Libro:La Galatea
Título Del Libro:Organización y Diseño De Computadoras
Título Del Libro:Por una Rosa */