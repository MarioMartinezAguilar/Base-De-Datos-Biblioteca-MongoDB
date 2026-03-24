// deleteMany elimina los documentos más de uno que 
// cumplan con el filtro especificado
// vamos eliminar los usuarios que tengan la 
// dirección Avenida Insurgentes No#312 
// en nuestra base de datos tenemos 2 usuarios 
// que tienen esa dirección se eliminaran esos dos registros:

db.usuarios.deleteMany(
    {"direccion":"Avenida Insurgentes No#312"}
)