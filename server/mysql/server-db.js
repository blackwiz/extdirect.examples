var mysql = require('mysql'),
    nconf = require('nconf');

nconf.env().file({ file: 'db-config.json'});

var dbConfig = nconf.get();

var mySQL = {
    connect : function(){
        var conn = mysql.createConnection({
            host: dbConfig.hostname,
            port: dbConfig.port,
            user: dbConfig.user,
            password: dbConfig.password,
            database: dbConfig.db
        });

        conn.connect(function(err) {
            if(err){
                console.error('Connection had errors: ', err.code);
                console.error('Connection params used: hostname = ' +  dbConfig.hostname + ', username = ' + dbConfig.user + ', db = '+  dbConfig.db );
                process.exit(1);
            }
        });

        return conn;
    },

    disconnect : function(conn){
        conn.end();
    },

    debugError: function(fn, error){
        // Generate SOFT error, instead of throwing hard error.
        // We send messages with debug ingo only if in development mode

        if(global.App.mode === 'development'){
            fn({message: {
                text: 'Database error',
                debug: error
            }
            });
        }else{
            fn({message: {
                text: 'Unknown error',
                debug: null
            }
            });
        }
    }
};

//test db connection and terminate if connection fails
mySQL.connect();

// Make MySql connections available globally, so we can access them from within modules
//Store inside database property of App
global.App.database = mySQL;