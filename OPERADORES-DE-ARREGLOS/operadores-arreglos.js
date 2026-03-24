// el operador $elemMatch se utiliza para encontrar al menos
// un documento que se encuentre dentro de un 
// arreglo con algunas condiciones
//vamos hacer una consulta en la colección 
// libros que nos diga que documento contiene 
// el nombre del autor("Benito Taibo") y que su país es México
db.libros.find({
    "autores":{
        $elemMatch: {"nombre": "Benito Taibo", "pais":"Mexicano"}
    }
})

// operador $size
//realizamos una consulta donde nos diga que libro 
// tiene tres autores
db.libros.find({
    "autores": {
        $size: 3
    }
})

//operador $all
//encontramos el documento que contiene el nombre 
// de los dos de los autores(Laura Gallego y Benito Taibo)
db.libros.find({
    "autores.nombre":{
        $all: ["Laura Gallego" , "Benito Taibo"]
    }
})
// operador $in
//vamos a encontrar los libros que contengan
//  el autor(Javier Ruescas)
db.libros.find({
    "autores.nombre":{
        $in: ["Javier Ruescas"]
    }
})

//operador $nin
// vamos encontrar los libros donde no se encuentra
//  el autor(Javier Ruecas)nos retornara 
// todos los demás libros que no tengan ese autor
db.libros.find({
    "autores.nombre":{
        $nin: ["Javier Ruescas"]
    }
})



