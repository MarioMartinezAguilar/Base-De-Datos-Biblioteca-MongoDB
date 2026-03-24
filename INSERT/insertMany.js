// insertando múltiples registros en colección usuario con la operación insertMany
db.usuarios.insertMany([
    {
        "nombre": "Alejandra Lara",
        "direccion": "5 De Mayo No#610",
        "telefono": "455-510-90-10",
        "email": "alelara@gmail.com",
        "fecha_registro": ISODate("2026-01-28")
    },

    {
        "nombre": "Juan Ayala",
        "direccion": "Avenida Insurgentes No#312",
        "telefono": "457-120-18-01",
        "email": "jjayala123@gmail.com",
        "fecha_registro": ISODate("2026-01-28")
    },

    {
        "nombre": "Erika Vázquez",
        "direccion": "Hidalgo No#110",
        "telefono": "466-130-07-55",
        "email": "erikavaz369@gmail.com",
        "fecha_registro": ISODate("2026-01-28")
    },
    
    {
        "nombre": "Johana Andrade",
        "direccion": "Morelos No#320",
        "telefono": "664-145-05-90",
        "email": "johanaandradeag234@gmail.com",
        "fecha_registro": ISODate("2026-01-28")
    }
  
], {ordered:true})

// inserción de varios libros del autor (Miguel de Cervantes)
db.libros.insertMany([

  {
    "_id": ObjectId("697a7e052e59f3d51b8c7142"),
    "titulo": "Don Quijote De La Mancha",
    "autores": [ObjectId("697a7ea3ee96da6eb64fbf6d")],
    "fecha_publicacion": ISODate("1605-01-16"),
    "isbn": "978-9707700611",
    "genero": "Novela Moderna",
    "copias_disponibles": 2
  },

  {
    "_id": ObjectId("697a80da2e59f3d51b8c7143"),
	  "titulo": "La Galatea",
	  "autores": [ObjectId("697a7ea3ee96da6eb64fbf6d")],
	  "fecha_publicacion": ISODate("1585-02-05"),
	  "isbn": "978-8437613154",
	  "genero": "Novela Pastoril",
	  "copias_disponibles": 1
  }
])

//insertamos en la colecciones detalle_libros
db.detalle_libros.insertMany([

  {
		"libro_id": [ObjectId("696ea2b56a52c266d4bbbab7")],
		"Descripcion": "Narra la historia de siete generaciones de la familia Buendía en el pueblo ficticio de Macondo.",
		"numero_paginas": 496,
		"idioma": "Español",
		"editorial": "Argentina Sudaamericana"
  },

  {
		"libro_id": [ObjectId("697a5c892e59f3d51b8c7140")],
		"Descripcion": "Relata el asesinato de Santiago Nasar a manos de los gemelos Vicario para vengar el supuesto deshonor de su hermana, Angela.",
		"numero_paginas": 96,
		"idioma": "Español",
		"editorial": "Oveja Negra"
  },

  {
		"libro_id": [ObjectId("697a60832e59f3d51b8c7141")],
		"Descripcion": "Narra la historia de un veterano de la Guerra de los Mil Días que, sumido en la pobreza extrema,espera infructuosamente durante 15 años la pensión prometida por el gobierno.",
		"numero_paginas": 128,
		"idioma": "Español",
		"editorial": "Penguin Random House"
  },

  {
		"libro_id": [ObjectId("697a7e052e59f3d51b8c7142")],
		"Descripcion": "Narra la historia de Alonso Quijano, un hidalgo pobre que, de tanto leer libros de caballerías,enloquece y decide convertirse en caballero andante.",
		"numero_paginas": 1216,
		"idioma": "Español",
		"editorial": "Penguin Clásicos"
  },
  {
    "libro_id": [ObjectId("697a80da2e59f3d51b8c7143")],
		"Descripcion": "Una obra pastoril ambientada a orillas del Tajo que narra los amores idealizados de la pastora Galatea, quien defiende su independencia, frente a los pastores Elicio y Erastro.",
		"numero_paginas": 664,
		"idioma": "Español",
		"editorial": "Ediciones Cátedra"
  },
  
  {
    "libro_id": [ObjectId("697bbae82e59f3d51b8c7144")],
		"Descripcion": "Clásico de la ingeniería de software que enseña a escribir código legible, mantenible y eficiente.",
		"numero_paginas":464 ,
		"idioma": "Español",
		"editorial": "Anaya Multimedia"
  }
])
