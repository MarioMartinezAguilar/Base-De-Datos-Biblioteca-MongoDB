// operador $type
// Se utiliza para encontrar documento donde en uno de 
// ellos tienen un tipo de dato específico por ejemplo:
// Realizamos una consulta que nos devuelva los 
// autores que tengan el campo fecha_nacimiento de tipo date
// aquí nos tiene que devolver todos los autores
//  ya que al momento de insertarlos los registramos
//  con ese tipo de dato
db.autores.find({
    "fecha_nacimiento":{
        $type: "date"
    }
})

// operador $exists
// se utiliza para encontrar documentos donde exista 
// un campo en especial por ejemplo:
// realizamos una consulta en la colección préstamos
//  para ver si en los documentos tiene alguno que contenga el campo estado, así que el operador recibe true para verificar por lo tanto en nuestra consulta no nos dará nada ya que no tenemos documentos con ese campo 
db.prestamos.find({
    "estado":{
        $exists: true
    }
})

// ahora si colocamos el valor false en el operador nos regresara todos los documentos que no tengan ese campo
db.prestamos.find({
    "estado":{
        $exists: false
    }
})