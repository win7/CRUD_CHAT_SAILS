# Diary

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
## After download run ##
1. Run:
> npm install
2. Config db:
- In /config/datastore.js

## GO CRUD ##
1. Create project:
> sails new Diary
2. Into project:
> cd (into to project)
3. Config adapter db:
Install adapter
- mysql: npm install sails-mysql --save
- postgresql: npm install postgres-mysql --save
- sqlserver:
- mongodb: npm install sails-mongo --save
Reference to DB (in config/datastores.js)
- adapter: 'sails-mysql',
- url: 'mysql://user:password@host:port/database',
or
- adapter: 'sails-postgresql',
- url: 'postgresql://user:password@127.0.0.1:5432/database
4. Create model and controller:
> sails generate api Contact
5. Edit model:
6. Edit controller:
7. Create views:
Create folder Contact
Into folder contact, create files .ejs
- find_all.ejs
- new.ejs
- update.ejs
Edit layouts/layoout.ejs
- Add item for item create and list Contacts
8. Create routes in:
config/routes.js
9. Run server:
> sails lift

## GO CHAT ##
1. Create controller:
> sails generate controller Chat
2. Edit controller:
    ...
3. Create views:
Create folder chat
Into folder chat, create files .ejs
- chat_room.ejs
Edit layouts/layoout.ejs
- Add item for chat
4. Create routes in:
config/routes.js
5. Run server
> sails lift

# CRUD_CHAT_SAILS
