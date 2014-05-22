###Code examples

This repository contains example Ext.Direct applications in ExtJs and Sencha Touch for node.js
Please navigate down to source tree to find the one you are interested.

Prerequisites after checking out:

    * node.js servers require to run 'npm install' to retrieve dependent modules.
    * make changes to db-config.json to match your database user/password
    * import schema (mysql only)
    * run server: 'node server.js'


For single server application copy client subfolders (e.g. DemoExtJs) to folder named 'public'
For test setup that demonstrates CORS support you will need second server of your choice (Apache- MAMP, WAMP, e.t.c.). In this case you serve from matching client folder.

###Sencha CMD

To run ExtJs4 and Sencha Touch examples Sencha Cmd v4.0.4.84 must be installed on development machine.
Ext5 requires CMD 5.x TBD or above.

###Frameworks

Important: Sample project you are downloading doesn't provide Sencha framework!
You have to download it and place inside sample folders.
To do that run the following commands (replace FrameworkFolderOnyYourMachine with the actual one where you have downloaded and extracted one of the Sencha frameworks):

* ExtJs:  client/DemoExtJs/ext (Expects version 4.2.1.883 +)
```
cd FrameworkFolderOnyYourMachine
sencha generate app DemoExtJs ~/Desktop/DemoExtJs
```
Once command is completed copy ext folder content from ~/Desktop/DemoExtJs to  client/DemoExtJs/ext


* Sencha Touch :  client/DemoTouch/touch (Expects version 2.3.1+)
```
cd FrameworkFolderOnyYourMachine
sencha generate app DemoExtJs ~/Desktop/DemoExtJs
```
Once command is completed copy ext folder content from ~/Desktop/DemoExtJs to  client/DemoExtJs/ext


Ext5 client/DemoExt5/ext (Expects version TBD)
```
cd FrameworkFolderOnyYourMachine
sencha generate app DemoExtJs ~/Desktop/DemoExtJs
```
Once command is completed copy ext folder content from ~/Desktop/DemoExtJs to  client/DemoExt5/ext

###Building

Before you can run any of examples you should use Sencha CMD.
From commandline (must be in client/DemoExtJS, client/DemoExt5 or client/DemoTouch folder depending on which project are you building):

    * 'sencha app refresh'
    * 'sencha app build'

Point your webserver to client workspace folder.
Please note that node.js server must be run at the same time, otherwise you will end up receiving 404 errors.


###Production build

Production build can be found inside client/[DemoExtJs|DemoTouch]/build/production
For more information, please refer to Sencha CMD reference http://docs.sencha.com/cmd/4.0.0/#!/guide


###Provided examples

ExtJs:

    * Application structure with API provider
    * Grid CRUD Master-detail
    * Cookie / Session
    * Direct method call, shows regular call and onw that has hard exception (syntax error)
    * Form Load / Submit
    * Form file upload (Cross domain upload is not supported!)
    * Tree root / child dynamic load

Sencha Touch:

    * Application structure with API provider
    * List read using directFn
    * Form load / submit

    Note: It contains an override for form load/submit. That fix will be provided as part of Sencha Touch 2.3.2

###Architect 3 sample project

    * check out example from the repository
    * Ensure that node.js server is running
    * In Resources/directapi adjust url property if different from http://localhost:3000/directapi
    * Run build for the project

    * Preview development version from specified Publish path, or for production/testing files inside project/build/[production|testing]

Note: Some unrelated files are stripped out from ext folder to reduce download size!