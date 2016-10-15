https://www.jetbrains.com/help/phpstorm/2016.2/transpiling-sass-less-and-scss-to-css.html

Step 1: Install the Sass/SCSS transpiler // translator from Sass to CSS

    1) Download and install Ruby // because Sass and SCSS transpilers are managed through the Ruby Gem manager.
        http://www.ruby-lang.org/en/documentation/installation/#rubyinstaller
        http://rubyinstaller.org/

    2) Specify a path variable for the folder where the Ruby executable file and the gem.bat file are stored. This lets you launch Ruby and Gem Manager from any folder and ensures that Ruby is successfully launched during transpilation. 
    3) Type one of the following commands at the command line prompt:
    gem install sass // <--- chose this one
    or
    gem install scss

    The tool is installed to the folder where Ruby executable file and the gem.bat file are stored. 
    if you get this error:
        ERROR:  Could not find a valid gem 'sass' (>= 0), here is why:
              Unable to download data from https://rubygems.org/ 
                - SSL_connect returned=1 errno=0 state=SSLv3 read server certificate B: certificate verify failed (https://api.rubygems.org/specs.4.8.gz)
    Take these steps:
    1) gem source -a http://rubygems.org/
    2) gem install sass

        PS C:\Users\Igor> gem source -a http://rubygems.org/
            https://rubygems.org is recommended for security over http://rubygems.org/

            Do you want to add this insecure source? [yn]  y
            http://rubygems.org/ added to sources
        PS C:\Users\Igor> gem install sass
            Fetching: sass-3.4.22.gem (100%)
            Successfully installed sass-3.4.22
            Parsing documentation for sass-3.4.22
            Installing ri documentation for sass-3.4.22
            Done installing documentation for sass after 16 seconds
            WARNING:  Unable to pull data from 'https://rubygems.org/': 
                SSL_connect returned=1 errno=0 state=SSLv3 read server certificate B: 
                    certificate verify failed (https://api.rubygems.org/specs.4.8.gz)
            1 gem installed

Step 2: Create a file watcher // transpiler configurations (in PhpStorm)
    PhpStorm provides a predefined File Watcher template for each transpiler

    PhpStorm provides a common procedure and user interface 
        for creating File Watchers of all types. 
        The only difference is in the predefined templates you choose in each case.

    Make sure the File Watchers plugin is enabled. 
    The plugin is bundled with PhpStorm and activated by default. 
    If it is not, enable the plugin. 
    See Enabling and Disabling Plugins for details.

        PhpStorm > File > Settings > Plugins > File Watchers > Checked
    
    1) File > Settings > Tools > File Watchers
        The File Watchers page 
        See the list of File Watchers that are already configured in the project.
    2) Plus ("Add") > Sass 
    3) Program > C:\Ruby22\bin\sass.bat

        a) If you installed the tool through the Node Package Manager, PhpStorm locates the required file itself at <node.js_home>/node_modules/bin/lessc.cmd and fills in the field automatically. 
            sass.bat for Sass
            scss.bat for SCSS 

        b) If you installed the Sass and SCSS tools through Ruby, PhpStorm locates the required files itself at <ruby_home>/bin/sass.bat <ruby_home>/bin/scss.bat respectively and fills in the field automatically. 
        c) Otherwise, type the path manually or click the Browse button browseButton.png and choose the file location in the dialog box that opens.
    Proceed as described on page Using File Watchers. 
        https://www.jetbrains.com/help/phpstorm/2016.2/using-file-watchers.html

        After that 
        the File Watcher will be invoked automatically 
        upon any changes made to the source code or upon save, 
        depending on whether the Immediate File Synchronization check box is selected or cleared, 
        see New Watcher Dialog. 

        File > Settings > Tools > File Watchers > Sass > Options > Immediate File Synchronization > Check
            Uncheck if you want them saved only on "Save"

        The output of a File Watcher is stored in a separate file. 
        The predefined templates suggest the type of the file depending on the transpiler type. 
        By default the output file is created in the same folder as the input file 
        when the File Watcher is invoked for the first time, 
        whereupon this file is only updated. 
        You can customize all these settings during File Watcher creation. 