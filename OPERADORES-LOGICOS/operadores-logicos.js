// operador $and
//vamos a encontrar a los autores que tengan nacionalidad 
// española y que su fecha de nacimiento se a menor a 1900
//en el operador $and estas dos condiciones tienen 
// que cumplirse forzosamente:
db.autores.find({
    $and: [
        {"nacionalidad":"Española"},
        {"fecha_nacimiento": {$lt: ISODate("1900-01-01")}}
    ]
})
// operador $or
// vamos a encontrar a los autores que tengan nacionalidad española y que su fecha de nacimiento sea mayor a 1900
//en este operador $or solo con que una condición se cumpla nos regresara los documentos que cumplan tanto con la nacionalidad como con la fecha de nacimiento(Esta consulta nos regresa los tres autores)
db.autores.find({
    $or: [
        {"nacionalidad":"Española"},
        {"fecha_nacimiento": {$gt: ISODate("1900-01-01")}}
    ]
})
//operador $nor nos devuelve los documentos que no cumplen con ninguna de las condiciones de la consulta
// realizamos una consulta en la colección autores donde no tengan las siguientes condiciones:
//1.nacionalidad: francesa.
//2.fecha_nacimiento: 1927-03-06
// la consulta nos devolverá los autores que no sean de nacionalidad francesa
// y así mismo que no tengan esa fecha de nacimiento especifica
db.autores.find({
    $nor: [
        {"nacionalidad":"Francesa"},
        {"fecha_nacimiento": ISODate("1927-03-06")}
    ]
})

//operador $not
// este operador invierte la condición de la consulta establecida por ejemplo:
// realizamos una consulta que de los autores que hay nacido después de 1900 aplicando el operador $gt mayor que
// pero al aplicar el operador $not invertimos el operador a menor que por lo tanto nos traerá los autores que hay nacido antes de 1900.
db.autores.find({
    "fecha_nacimiento": {
        $not: {$gt: ISODate("1900-01-01")}
    }
})

