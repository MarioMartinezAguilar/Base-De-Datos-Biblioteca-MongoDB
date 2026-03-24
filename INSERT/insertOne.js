//insertamos datos en la colección usuario con insertOne
db.usuarios.insertOne({
  "nombre": "Mario Aguilar",
  "direccion": "Alcatraz No#418",
  "telefono": "411-210-15-99",
  "email": "mariotics300@gmail.com",
  "fecha_registro": ISODate("2026-01-27")
}),

//insertar en nuestra colección autores con insertOne
db.autores.insertOne({
  "nombre": "Gabriel García Márquez",
  "nacionalidad": "Colombiana",
  "fecha_nacimiento": ISODate("1927-03-04"),
  "biografia": "Escritor, novelista, cuentista y periodista colombiano, conocido por popularizar el realismo mágico.",
  "libros": [ObjectId("696ea2b56a52c266d4bbbab7")]
})
// insertamos autor(Robert C. Martin)
db.autores.insertOne({
  "nombre": "Robert C. Martin",
  "nacionalidad": "Estadounidense",
  "fecha_nacimiento": ISODate("1952-12-10"),
  "biografia": "Es un influyente ingeniero de software, autor y conferencista estadounidense, activo des de 1970, pionero en prácticas de desarrollo como los principios SOLID, Clean Code y Clean Architecture.",
  "libros": [ObjectId("697bbae82e59f3d51b8c7144")]
})

// Insertamos a un autor(Miguel De Cervantes)
db.autores.insertOne({
  "nombre": "Miguel De Cervantes",
  "nacionalidad": "Española",
  "fecha_nacimiento": ISODate("1547-09-29"),
  "biografia": "Fue un novelista, poeta y dramaturgo español, apodado el Manco de Lepanto tras perder la movilidad de su mano izquierda en combate.",
  "libros": [ObjectId("697a7e052e59f3d51b8c7142")]
})


//insertar un libro en nuestra colección de libros haciendo referencia con la colección de autores.
db.libros.insertOne({
  "_id": ObjectId("696ea2b56a52c266d4bbbab7"),
  "titulo": "Cien Años De Soledad",
  "autores": [ObjectId("697965faee96da6eb64fbf67")],
  "fecha_publicacion": ISODate("1967-05-30"),
  "isbn": "978-607-07-2879-2",
  "genero": "Realismo Mágico",
  "copias_disponibles": 1
})
//libro del autor(Robert C. Martin)
db.libros.insertOne({
  "_id": ObjectId("697bbae82e59f3d51b8c7144"),
  "titulo": "Clean Code",
  "autores": [ObjectId("697bbd7dee96da6eb64fbf6e")],
  "fecha_publicacion": ISODate("2008-08-01"),
  "isbn": "978-0132350884",
  "genero": "Ingeníeria De Software",
  "copias_disponibles": 3
})

//inserción de otro libro del mismo autor(Gabriel García Márquez)
db.libros.insertOne({
  "_id": ObjectId("697a5c892e59f3d51b8c7140"),
  "titulo": "Crónica De Una Muerte Anunciada",
  "autores": [ObjectId("697965faee96da6eb64fbf67")],
  "fecha_publicacion": ISODate("1981-04-27"),
  "isbn": "978-8497592437",
  "genero": "Novela Narrativa",
  "copias_disponibles": 2
})
// otro libro autor(Gabriel García Márquez)
db.libros.insertOne(
{
	"_id": ObjectId("697a60832e59f3d51b8c7141"),
	"titulo": "El Coronel No Tiene Quien Le Escriba",
  "autores": [ObjectId("697965faee96da6eb64fbf67")],
	"fecha_publicacion": ISODate("1961-07-15"),
	"isbn": "978-607-26662-0",
	"genero": "Novela Narrativa",
	"copias_disponibles": 1
})


//insertamos un préstamo haciendo referencia a un usuario y aun libro
db.prestamos.insertOne({
  "libro_id": ObjectId("696ea2b56a52c266d4bbbab7"),
  "usuario_id": ObjectId("69793d92ee96da6eb64fbf66"),
  "fecha_prestamo": ISODate("2026-01-28"),
  "fecha_devolucion": ISODate("2026-02-15")
})