// índice campo único  este índice se crea 
// en un solo campo
//vamos a crear un índice en nuestra colección
//  prestamos en su campo fecha_prestamo:
db.prestamos.createIndex(
    {"fecha_prestamo":1}
)
// nos da como resultado el nombre de nuestro 
// índice el valor número 1 significa que lo 
// ordene de manera ascendente:
fecha_prestamo_1
