// el operador $unset se utiliza para
//  eliminar campos específicos de uno o varios documentos
// vamos a eliminar el campo edad del 
// usuario Alejandra Lara
db.usuarios.updateOne(
    {"nombre" : "Alejandra Lara"},
    {$unset: {"edad":""}}
)
