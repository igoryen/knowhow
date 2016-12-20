

Determine
    https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/

    Ddetermined the MongoDB build I needed 
        MongoDB for Windows 64-bit 


Download
    https://www.mongodb.com/download-center?jmp=nav
    current MongoDB 3.2.11

    Current Stable Release (3.2.11)

Install

    Run the installer
    choose "complete"

    Note

    These instructions assume that you have installed MongoDB to 
    C:\Program Files\MongoDB\Server\3.2\.

Run
    Set up the MongoDB environment.

        MongoDB requires a data directory to store all data. 
        MongoDB’s default data directory path is \data\db. 
        Create this folder 

        Option 1
            manually at C:\data\db

        Option 2
            using the following commands from a Command Prompt:
            md \data\db // mkdir \data\db


    Start MongoDB

        Attempt 1 (fail)
        
            Descended to C:\Program Files\MongoDB\Server\3.2\bin\mongod.exe
            and created a Desktop shortcut for mongod.exe

        Attempt 2

            opened CygWin
            Descended to C:\Program Files\MongoDB\Server\3.2\bin\mongod.exe
            ./mongodb.exe

            allowed the Firewall to let it through
            got the following message
            "waiting for connection on port 27017"

    Connect to MongoDB through the mongo.exe shell

        Opened another terminal (CygWin)
        .\mongo.exe

            MongoDB shell version: 3.2.11
            Connecting to: test


    Begin using MongoDB


Configure a Windows Service for MongoDB Community Edition¶

    1. Open an Administrator command prompt

        Win > type "cmd.exe" > Ctrl+Shift+Enter // to run the Command Prompt as an Admin
    
    2. Create directories for your DB and log files

        mkdir c:\data\db
        mkdir c:\data\log

    3. Create a config file

        // The file must set systemLog.path. 
        // Include additional configuration options as appropriate.

        For example, 
        cd C:\Program Files\MongoDB\Server\3.2\
        type nul > mongod.cfg // touch mongod.cfg
        
        add the contents
            that specifies both systemLog.path and storage.dbPath:

            systemLog:
                destination: file
                path: c:\data\log\mongod.log
            storage:
                dbPath: c:\data\db

    4. Install the MongoDB service.¶

        // Run all of the following commands in Command Prompt 
        // with “Administrative Privileges”.
        cd C:\Program Files\MongoDB\Server\3.2\bin
        // start mongod.exe
        // --install
        // --config (to specify the mongod.cfg file that was just created)
        .\mongod.exe --config "C:\Program Files\MongoDB\Server\3.2\mongod.cfg" --install

    5. Start the MongoDB service

        net start MongoDB
        // fail
        // error 48

Manually Create a Windows Service for MongoDB Community Edition

    // set up the MongoDB server as a Windows Service 
    // that starts automatically at boot time.

    1. Open an Administrator command prompt
        // see above
    2. Create directories for your database and log files
        // see above
    3. Create a configuration file
        // see above
    4. Create the MongoDB service.

        sc.exe create MongoDB binPath= "\"C:\Program Files\MongoDB\Server\3.2\bin\mongod.exe\" --service --config=\"C:\Program Files\MongoDB\Server\3.2\mongod.cfg\"" DisplayName= "MongoDB" start= "auto"
        // ran this after doing 4. Install the MongoDB service.
        // got error: The specified service already exists

        sc.exe requires a space between “=” and the configuration values (eg “binPath= ”), and a “\” to escape double quotes.

        If successfully created, the following log message will display:

        [SC] CreateService SUCCESS

    5. Start the MongoDB service

        net start MongoDB
        // message: The MongoDB service was started successfully.

Stopping the service:
    net stop MongoDB
Removing the service:
    net stop MongoDB
    sc.exe delete MongoDB
