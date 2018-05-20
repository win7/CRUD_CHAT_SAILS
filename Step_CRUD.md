
## GO ##
1. crear project
	sails new Diary
2. Entrar dentro del project
	cd
3. Configurar adaptador de BD
	Installar adaptador
		mysql: npm install sails-mysql --save
		postgresql: npm install sails-postgresql --save
		sqlserver:
		mongodb: npm install sails-mongo --save
  Referenciar DB (in config/datastores.js)
    adapter: 'sails-mysql',
    url: 'mysql://user:password@host:port/database',
    or
    adapter: 'sails-postgresql',
    url: 'postgresql://user:password@127.0.0.1:5432/database
4. Crear modelos y controladore
	sails generate api Contact
5. Editar los modelos
6. Editar los controladores
7. Crear Vistas
  Crear una carpeta para las vistas de contacto
  Crear archivos .ejs
    find_all.ejs
    new.ejs
    update.ejs
  Editar layouts/layoout.ejs
    Agregar las pestañas para agregar y listar contactos
8. Crear rutas
9. Ejecuar





