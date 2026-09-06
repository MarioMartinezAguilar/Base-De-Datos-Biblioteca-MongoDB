//Vamos aplicar nuestro índice de texto que creamos 
//en la coleccion de libros en esta ocasión primero 
//realizaremos una búsqueda básica usando 
//el operador $text y el operador $search

//en el script siguiente realizamos una búsqueda
//básica en la coleccion de libros para traer el libro por
//su nombre es este casa fue el libro de Quijote de la mancha
//como podemos ver en el siguiente script

db.libros.find(
    { $text:{$search: "Quijote"}
});

//Ahora realizaremos una búsqueda de frases exactas
//usando nuestro índice de texto de igual manera se aplica en 
//la colección de libros utilizando los mismos operadores anteriores
// $text y $search para este script utilizamos la búsqueda
//de una frase exacta usando esta sintaxis "\"Frase Exacta\""
//traemos el libro que coincida con la frase Cien años de soledad

db.libros.find(
    { $text :{$search: "\"Cien años de soledad\""}
}).pretty()

// Ahora haremos una búsqueda para excluir palabras especificas
//también la aplicamos en nuestra colección de libros
//en este caso usamos los mismos operadores $text y $search
// usando la sintaxis del guión -palabra 
//cabe señalar que este tipo de búsqueda no nos devuelve
//ningún documento ya que estamos excluyendo la palabra es decir
//el titulo del libro como se muestra en el siguiente script
db.libros.find({ 
    $text :{$search: "Quijote -mancha"}
})

// Búsqueda por relevancia y puntuación /Score
//aplicaremos una búsqueda igual en nuestra coleccion de libros 
// utilizando ahora el operador $meta y agregando un score de puntuación
// al documento, explicando un poco tenemos el operador $meta
//nos sirve para ver la puntuación que oculta mongo de que tan 
//relevante es una palabra a la hora de realizar búsquedas
// en este caso escribimos alguna palabra 
//que tenga el título del libro(Quijote), como se muestra en el script
// el textScore nos sirve para calcular que tán relevante es esa 
//palabra dentro del documento, finalmente ordenamos con el operador $sort
//permite ordenar los documentos más relevante a los menos relevantes según la puntuación
// que nos de la hora de buscar
 db.libros.find({ $text: {$search: "Quijote"}}, 
    {score: {$meta: "textScore"}
    })
    .sort({ score: {$meta: "textScore"}
});
//como podemos ver este script nos traerá los documentos
//mas relevantes en este caso solo tenemos  un libro con ese nombre
//la puntuación sera baja como se muestra a continuación

//resultado de la búsquedaÑ
/* {
    _id: ObjectId('697a7e052e59f3d51b8c7142'),
    titulo: 'Don Quijote De La Mancha',
    autores: [ ObjectId('697a7ea3ee96da6eb64fbf6d') ],
    fecha_publicacion: ISODate('1605-01-14T00:00:00.000Z'),
    isbn: '978-9707700611',
    genero: 'Novela Moderna',
    copias_disponibles: 2,
    score: 0.6
} */