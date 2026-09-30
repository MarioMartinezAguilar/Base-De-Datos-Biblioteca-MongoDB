// Esta parte vamos a colocar un poco de seguridad a la
// base de datos en nuestro servidor de mongo:

//primero vamos a cambiarnos a la base de datos 'admin'
//usando el comando 'use admin'

// Ahora vamos a crear el superusuario administrador que tendrá
//control total a nuestro servidor de base  de datos lo hacemos con el siguiente
//script ypo coloque mis datos de ejemplo tu puedes colocar los tuyos:
db.createUser({
  user: "mario-web-95",
  pwd: "mongo-backend95",
  roles: [
    { role: "userAdminAnyDatabase", db: "admin"},
    { role: "readWriteAnyDatabase", db: "admin"}
  ]
});

//significado de algunos conceptos:
/* db.createUser>>> instrucción para crear el usuario
roles>>> Permisos que tiene el usuario
userAdminAnyDatabase>>> Le da permisos para crear o borrar otros usuarios en un futuro.
readWriteAnyDatabase>>> Permiso para leer y escribir datos crear colecciones guardar información o borrar documentos */

//Ahora podemos verificar que nuestro usuario se creo correctamente
//Con el siguiente comando:
db.getUsers();
//nos mostrara el siguiente objeto general dentro la propiedad users que es un array de objetos con la información de nuestro usuario
users =
    {
        users: [
            {
            _id: 'admin.mario-web-95',
            userId: UUID('39c75c72-b126-419f-a26d-b3d972caaad0'),
            user: 'mario-web-95',
            db: 'admin',
            roles: [
                { role: 'readWriteAnyDatabase', db: 'admin' },
                { role: 'userAdminAnyDatabase', db: 'admin' }
            ],
            mechanisms: [ 'SCRAM-SHA-1', 'SCRAM-SHA-256' ]
            }
        ],
    }
//ahora agregamos el candado de autenticación al servidor de mongo
//con el siguiente comando:
//mongod --auth --> Arranca de manera segura el servidor de mongo

//si intentamos acceder de forma normal sin autenticarnos mongo nos lanzara el siguiente error:
// -->> MongoServerError[Unauthorized]: command listDatabases requires authentication

//Ahora podemos conectarnos con nuestro usuario que creamos con el siguiente comando
//en la consola:
// -->> mongosh -u "TuNombreDeUsuario"  --authenticationDatabase "admin" -p

//Después mongo te pedirá la contraseña y listo podremos acceder alas bases de datos en el servidor.

//En El apartado del README se explicara todo el fuljo de la seguridad de mongo
//mostrare como se hace desde la consola de comandos asi como de la interfaz de mongoDB Compass



















