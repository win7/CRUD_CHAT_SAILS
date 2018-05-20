# diary

a [Sails v1](https://sailsjs.com) application


### Links

+ [Get started](https://sailsjs.com/get-started)
+ [Sails framework documentation](https://sailsjs.com/documentation)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](https://sailsjs.com/support)
+ [Professional / enterprise options](https://sailsjs.com/enterprise)


### Version info

This app was originally generated on Tue May 15 2018 12:38:54 GMT-0500 (-05) using Sails v1.0.1.

<!-- Internally, Sails used [`sails-generate@1.15.21`](https://github.com/balderdashy/sails-generate/tree/v1.15.21/lib/core-generators/new). -->


This project's boilerplate is based on an expanded seed app provided by the [Sails core team](https://sailsjs.com/about) to make it easier for you to build on top of ready-made features like authentication, enrollment, email verification, and billing.  For more information, [drop us a line](https://sailsjs.com/support).


<!--
Note:  Generators are usually run using the globally-installed `sails` CLI (command-line interface).  This CLI version is _environment-specific_ rather than app-specific, thus over time, as a project's dependencies are upgraded or the project is worked on by different developers on different computers using different versions of Node.js, the Sails dependency in its package.json file may differ from the globally-installed Sails CLI release it was originally generated with.  (Be sure to always check out the relevant [upgrading guides](https://sailsjs.com/upgrading) before upgrading the version of Sails used by your app.  If you're stuck, [get help here](https://sailsjs.com/support).)
-->



## GO CRUD ##
1. crear project
	sails new Diary
2. Entrar dentro del project
	cd
3. Configurar adaptador de BD
	Installar adaptador
		a. mysql: npm install sails-mysql --save
		b. postgresql: npm install postgres-mysql --save
		c. sqlserver:
		d. mongodb: npm install sails-mongo --save
  Referenciar DB (in config/datastores.js)
    - adapter: 'sails-mysql',
    - url: 'mysql://user:password@host:port/database',
    or
    - adapter: 'sails-postgresql',
    - url: 'postgresql://user:password@127.0.0.1:5432/database

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
  En config/routes.js
9. Ejecuar
  sails lift

## GO CHAT ##
1. Crear controlador
    sails generate controller Chat
2. Editar los controladores
    ...
3. Crear Vistas
  Crear carpeta views/chat
    Crear archivos chat_room.ejs
  Editar layouts/layout.ejs
    Agregar las pestañas para UI de chat
4. Crear rutas
  En config/routes.js
5. Ejecuar
  sails lift

# CRUD_CHAT_SAILS
