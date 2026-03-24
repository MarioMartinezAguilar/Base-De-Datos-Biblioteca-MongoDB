//replaceOne nos permite remplazar totalmente un documento con coincida con un filtro especificado.
//a diferencia de un updateOne replaceOne reemplaza todo el documento excepto el campo id.
// vamos a actualizar completamente un libro utilizando su isbn en este caso será el de nombre llamado "Clean Code"
//será reemplazado por otro libro:
db.libros.replaceOne(
    {"isbn": "978-0132350884"},
    {
        "titulo": "Organización y Diseño De Computadoras",
  	    "autores": [
  		    {"nombre": "David A. Patterson","pais":"USA"},
  		    {"nombre": "John L. Hennessy", "pais":"USA"}
  	    ],
        "fecha_publicacion": ISODate("1994-01-01"),
  	    "isbn": "8448118294",
  	    "genero": "Ingeniería Informática",
  	    "copias_disponibles": 3
    }
)