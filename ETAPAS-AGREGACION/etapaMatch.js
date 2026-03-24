//match--> Filtra documentos que coinciden con una
//  condición especifica es similar al método find.
// vamos hacer el filtrado de etapa de agregación
//  con match que nos diga cuales libros 
// tienen más de 3 copias disponibles.

db.libros.aggregate([
    {$match: {copias_disponibles:{$gte: 3}}}
])
