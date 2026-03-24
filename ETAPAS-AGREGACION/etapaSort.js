//Etapa Sort->Permite ordenar los documentos por
//  uno más campos
//vamos a ordenar a los usuarios por su nombre 
// en orden alfabético utilizando la etapa sort.
db.usuarios.aggregate([
    {$sort: {nombre: 1}}
])


