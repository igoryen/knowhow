-----------------------

	3 components:
	A - webpack
	B - webpack-cli
	C - webpack-dev-server
	

	installed the vue cli into tandem
	planned to install the vue cli into the root
	the problem with the default installation
	folder A (src) has JS and CSS
	folder B (public) has HTML and images
	folder C (dist) has the bundle made by webpack

	tried to think of a way how to use this setup with the dir hierarchy of CNX
	couldn't think of anything

	a guy on the internet said
	webpack can be installed and configured manually
	started doing it manually

	webpack installation goes wrong all the time
	3 components:
	A - webpack
	B - webpack-cli
	C - webpack-dev-server
	there seems to be a combination 
	certain versions
	at which this trio can cooperate

	people on the internet suggest their versions
	but i want to have the latest

	Attempt:
	follow somebody's recommendation
	to make it work at least somehow.

	Trying this: (https://stackoverflow.com/questions/40379139/cannot-find-module-webpack-bin-config-yargs) DATE: 190514
	pasted this into package.json
	"webpack": "^4.31.0",
	"html-webpack-plugin": "^3.0.0",
	"webpack-bundle-analyzer": "^3.3.2",
	"webpack-cli": "^3.3.2",
	"webpack-dev-server": "^3.3.1",
	"webpack-merge": "^4.1.0"

	A - action
	Q - question
	O - observation
	R - result

	E1: Added the above to package.json
		npm install
		webpack --version
	R: prompts installing webpack-cli
	
	I: why install webpack-cli after I ran npm install?
	
	A3: I agreed to install webpack-cli
		installation script runs ('npm install -D webpack-cli')
	
	A4: I run 'webpack --version'
	R:  It prompts me to install webpack-cli 

	O1: Webpack CLI I wanted to install: "webpack-cli": "^3.3.2",
		Webpack cli that was installed:  "webpack-cli": "^3.3.9", // higher version

	A5: repeat actons 3-4
	
	O2: infinite loop of actions 3-4 

	A6: edited package.json with the following:
		"webpack": "^3.0.0",
		"webpack-cli": "2.0.13",
		"webpack-config-utils": "2.0.0",
		"webpack-dev-server": "^2.7.1",
		"webpack-validator": "2.2.7"

	E:  npm install
	R:  warnings, 
	A:  package.json matches the above
	E:  webpack --version
	R:  asks me if I want to install webpack-cli

	E:  I say yes.
	R:  Error: Cannot find module 'webpack-cli'

	H:  webpack-cli not installed globally
	E:  npm i -g webpack-cli
	R:  npm WARN webpack-cli@3.3.9 requires a peer of webpack@4.x.x but none is installed. 
		You must install peer dependencies yourself.
	O:  My package.json has "webpack": "^3.0.0"
		`npm i -g webpack-cli` tries to install version 3.3.9
		but 3.3.9 requires webpack@4.x.x

	H:  i need to install webpack (update it to) 4.x.x
		how? 
		npm install --save-dev webpack

	E:  npm install --save-dev webpack
	R:  package.json - "webpack": "^3.12.0",
	A:  npm install --save-dev webpack installs version 3.x.x, not 4.x.x

	P:  i need to install webpack@4.x.x
	H:  npm install webpack@next webpack-cli --save-dev 
		Source: https://medium.com/webpack/webpack-4-beta-try-it-today-6b1d27d7d7e2
	E:  npm install webpack@next webpack-cli --save-dev 
	R: 	package.json
		"webpack": "^5.0.0-alpha.29",
    	"webpack-cli": "^2.1.5",
    I:  I have installed webpack@5 and its cli @2.1.5
    H:  it must know what it's doing.
    	this was intentional
    	this is a working combination
    P:  if I run webpack --version it 
    	- will show me version 
    	- will not ask me to install CLI
    E:  webpack --version
    R: 	4.41.0
    A:  this is the correct command to run:
    	npm install webpack@next webpack-cli --save-dev 
    	Source: https://medium.com/webpack/webpack-4-beta-try-it-today-6b1d27d7d7e2

    --------------------

    P: I need to run the webpack-dev-server but I don't know how
    O: package.json has object 'scripts' with prop "start"
    H: if I run `npm run start` the server will run
    E: npm run start
    R: Error: Cannot find module 'webpack/bin/config-yargs'
    	log: failed to execute the start script (webpack-dev-server)
    I: webpack-dev-server can't execute
    P: if I simply run "webpack-dev-server" in the terminal, it will fail
    E: webpack-dev-server
    R: Error: Cannot find module 'webpack/bin/config-yargs'

    I: the port number is taken by another process
    H: the port number is wrong
    P: if I change the port number it will work
    
    E: node_modules/webpack-dev-server/bin/webpack-server.js
    	old: const DEFAULT_PORT = 8080;
    	new: const DEFAULT_PORT = 8585;
    	npm run start
    R: Error: Cannot find module 'webpack/bin/config-yargs'
   	
   	E: node_modules/webpack-dev-server/bin/webpack-server.js
   		old: const DEFAULT_PORT = 8585;
   		new: const DEFAULT_PORT = 8888;
    	npm run start
    R: Error: Cannot find module 'webpack/bin/config-yargs'

    H: My npm cache is dirty
    P: If I clean it, the server will start
    E: make these in sequence:
    	npm cache clean --force
    	npm install
    	npm run start

    R: Error: Cannot find module 'webpack/bin/config-yargs'

    P: if I use a different combination, it will work
    E: using this one: https://github.com/mzgoddard/jest-webpack/issues/27#issuecomment-389130755
    	old:
    		"webpack": "^5.0.0-alpha.29",
		    "webpack-cli": "^2.1.5",
		    "webpack-config-utils": "2.0.0",
		    "webpack-dev-server": "^2.7.1",
    	new:
    	"devDependencies": {
	    	"webpack": "^4.8.3",
	    	"webpack-cli": "^2.1.3",
	    	"webpack-dev-server": "^3.1.4"
    	}
    	npm install
    	npm run start

    R: npm run start
    -----------------------------------------------------
    	Igor.Entaltsev@NASCD158 J:\plum\Connexions
    	$ npm run start

    	> connexions-monolith@1.0.0 start J:\plum\Connexions
    	> webpack-dev-server

    	10% building 2/2 modules 0 activei ｢wds｣: Project is running at http://localhost:8081/
    	i ｢wds｣: webpack output is served from /
    	i ｢wds｣: Content not from webpack is served from J:\plum\Connexions
    	10% building 2/5 modules 3 active ...m\Connexions\node_modules\babel-loader\lib\index.js??ref--4!J:\plum\Connexions\src\pageTwo.jsi ｢wdm｣: wait until bundle finished: /
    	× ｢wdm｣: Hash: 10712ab2a93b1ecd7406
    	Version: webpack 4.41.0
    	Time: 5670ms
    	Built at: 10/24/2019 3:53:47 PM
    	                          Asset       Size   Chunks                         Chunk Names
    	                     index.html  282 bytes           [emitted]
    	pageOne.f48f9e6a032ed99ea973.js    360 KiB  pageOne  [emitted] [immutable]  pageOne
    	pageTwo.1cc915dacd7852f13ef5.js    360 KiB  pageTwo  [emitted] [immutable]  pageTwo
    	Entrypoint pageOne = pageOne.f48f9e6a032ed99ea973.js
    	Entrypoint pageTwo = pageTwo.1cc915dacd7852f13ef5.js
    	[0] multi (webpack)-dev-server/client?http://localhost:8081 ./src/pageOne.js 40 bytes {pageOne} [built]
    	[1] multi (webpack)-dev-server/client?http://localhost:8081 ./src/pageTwo.js 40 bytes {pageTwo} [built]
    	[./node_modules/ansi-html/index.js] 4.16 KiB {pageOne} {pageTwo} [built]
    	[./node_modules/ansi-regex/index.js] 135 bytes {pageOne} {pageTwo} [built]
    	[./node_modules/strip-ansi/index.js] 161 bytes {pageOne} {pageTwo} [built]
    	[./node_modules/webpack-dev-server/client/index.js?http://localhost:8081] (webpack)-dev-server/client?http://localhost:8081 4.29 KiB {pageOne} {pageTwo} [built]
    	[./node_modules/webpack-dev-server/client/overlay.js] (webpack)-dev-server/client/overlay.js 3.51 KiB {pageOne} {pageTwo} [built]
    	[./node_modules/webpack-dev-server/client/socket.js] (webpack)-dev-server/client/socket.js 1.53 KiB {pageOne} {pageTwo} [built]
    	[./node_modules/webpack-dev-server/client/utils/createSocketUrl.js] (webpack)-dev-server/client/utils/createSocketUrl.js 2.89 KiB {pageOne} {pageTwo} [built]
    	[./node_modules/webpack-dev-server/client/utils/log.js] (webpack)-dev-server/client/utils/log.js 964 bytes {pageOne} {pageTwo} [built]
    	[./node_modules/webpack-dev-server/client/utils/reloadApp.js] (webpack)-dev-server/client/utils/reloadApp.js 1.59 KiB {pageOne} {pageTwo} [built]
    	[./node_modules/webpack-dev-server/client/utils/sendMessage.js] (webpack)-dev-server/client/utils/sendMessage.js 402 bytes {pageOne} {pageTwo} [built]
    	[./node_modules/webpack/hot sync ^\.\/log$] (webpack)/hot sync nonrecursive ^\.\/log$ 170 bytes {pageOne} {pageTwo} [built]
    	[./src/pageOne.js] 245 bytes {pageOne} [built] [failed] [1 error]
    	[./src/pageTwo.js] 245 bytes {pageTwo} [built] [failed] [1 error]
    	    + 20 hidden modules

    	ERROR in ./src/pageTwo.js
    	Module build failed (from ./node_modules/babel-loader/lib/index.js):
    	TypeError: Cannot read property 'babel' of undefined
    	    at Object.module.exports (J:\plum\Connexions\node_modules\babel-loader\lib\index.js:103:36)

    	ERROR in ./src/pageOne.js
    	Module build failed (from ./node_modules/babel-loader/lib/index.js):
    	TypeError: Cannot read property 'babel' of undefined
    	    at Object.module.exports (J:\plum\Connexions\node_modules\babel-loader\lib\index.js:103:36)
    	Child html-webpack-plugin for "index.html":
    	     1 asset
    	    Entrypoint undefined = index.html
    	    [./node_modules/html-webpack-plugin/lib/loader.js!./node_modules/html-webpack-plugin/default_index.ejs] 376 bytes {0} [built]
    	    [./node_modules/lodash/lodash.js] 528 KiB {0} [built]
    	    [./node_modules/webpack/buildin/global.js] (webpack)/buildin/global.js 472 bytes {0} [built]
    	    [./node_modules/webpack/buildin/module.js] (webpack)/buildin/module.js 497 bytes {0} [built]
    	i ｢wdm｣: Failed to compile.
    -----------------------------------------------------
    H: Babel is not installed.
    P: If I run "npm list babel-cli" it will tell me if babel is installed
    E: npm list babel-cli
    R: connexions-monolith@1.0.0 J:\plum\Connexions
		`-- (empty)     `
	A: Does this mean babel is not installed?

	P: If I run "babel --version" and it gives me the babel version number, it will mean Babel is installed.
	E: $ babel --version .
		'babel' is not recognized as an internal or external command, operable program or batch file.

	H: If I install Babel, "npm run start" will work
	E: npm i babel-install -DE // https://www.npmjs.com/package/babel-install
    R: success

    E: npm run start
    --------------------------------------
        $ npm run start

        > connexions-monolith@1.0.0 start J:\plum\Connexions
        > webpack-dev-server

        10% building 2/2 modules 0 activei ｢wds｣: Project is running at http://localhost:8081/
        i ｢wds｣: webpack output is served from /
        i ｢wds｣: Content not from webpack is served from J:\plum\Connexions
        10% building 4/12 modules 8 active J:\plum\Connexions\node_modules\webpack-dev-server\client\utils\createSocketUrl.jsi ｢wdm｣: wait until bundle finished: /
        × ｢wdm｣: Hash: 10712ab2a93b1ecd7406
        Version: webpack 4.41.0
        Time: 3112ms
        Built at: 10/24/2019 4:07:48 PM
                                  Asset       Size   Chunks                         Chunk Names
                             index.html  282 bytes           [emitted]
        pageOne.f48f9e6a032ed99ea973.js    360 KiB  pageOne  [emitted] [immutable]  pageOne
        pageTwo.1cc915dacd7852f13ef5.js    360 KiB  pageTwo  [emitted] [immutable]  pageTwo
        Entrypoint pageOne = pageOne.f48f9e6a032ed99ea973.js
        Entrypoint pageTwo = pageTwo.1cc915dacd7852f13ef5.js
        [0] multi (webpack)-dev-server/client?http://localhost:8081 ./src/pageOne.js 40 bytes {pageOne} [built]
        [1] multi (webpack)-dev-server/client?http://localhost:8081 ./src/pageTwo.js 40 bytes {pageTwo} [built]
        [./node_modules/ansi-html/index.js] 4.16 KiB {pageOne} {pageTwo} [built]
        [./node_modules/ansi-regex/index.js] 135 bytes {pageOne} {pageTwo} [built]
        [./node_modules/strip-ansi/index.js] 161 bytes {pageOne} {pageTwo} [built]
        [./node_modules/webpack-dev-server/client/index.js?http://localhost:8081] (webpack)-dev-server/client?http://localhost:8081 4.29 KiB {pageOne} {pageTwo} [built]
        [./node_modules/webpack-dev-server/client/overlay.js] (webpack)-dev-server/client/overlay.js 3.51 KiB {pageOne} {pageTwo} [built]
        [./node_modules/webpack-dev-server/client/socket.js] (webpack)-dev-server/client/socket.js 1.53 KiB {pageOne} {pageTwo} [built]
        [./node_modules/webpack-dev-server/client/utils/createSocketUrl.js] (webpack)-dev-server/client/utils/createSocketUrl.js 2.89 KiB {pageOne} {pageTwo} [built]
        [./node_modules/webpack-dev-server/client/utils/log.js] (webpack)-dev-server/client/utils/log.js 964 bytes {pageOne} {pageTwo} [built]
        [./node_modules/webpack-dev-server/client/utils/reloadApp.js] (webpack)-dev-server/client/utils/reloadApp.js 1.59 KiB {pageOne} {pageTwo} [built]
        [./node_modules/webpack-dev-server/client/utils/sendMessage.js] (webpack)-dev-server/client/utils/sendMessage.js 402 bytes {pageOne} {pageTwo} [built]
        [./node_modules/webpack/hot sync ^\.\/log$] (webpack)/hot sync nonrecursive ^\.\/log$ 170 bytes {pageOne} {pageTwo} [built]
        [./src/pageOne.js] 245 bytes {pageOne} [built] [failed] [1 error]
        [./src/pageTwo.js] 245 bytes {pageTwo} [built] [failed] [1 error]
            + 20 hidden modules

        ERROR in ./src/pageTwo.js
        Module build failed (from ./node_modules/babel-loader/lib/index.js):
        TypeError: Cannot read property 'babel' of undefined
            at Object.module.exports (J:\plum\Connexions\node_modules\babel-loader\lib\index.js:103:36)

        ERROR in ./src/pageOne.js
        Module build failed (from ./node_modules/babel-loader/lib/index.js):
        TypeError: Cannot read property 'babel' of undefined
            at Object.module.exports (J:\plum\Connexions\node_modules\babel-loader\lib\index.js:103:36)
        Child html-webpack-plugin for "index.html":
             1 asset
            Entrypoint undefined = index.html
            [./node_modules/html-webpack-plugin/lib/loader.js!./node_modules/html-webpack-plugin/default_index.ejs] 376 bytes {0} [built]
            [./node_modules/lodash/lodash.js] 528 KiB {0} [built]
            [./node_modules/webpack/buildin/global.js] (webpack)/buildin/global.js 472 bytes {0} [built]
            [./node_modules/webpack/buildin/module.js] (webpack)/buildin/module.js 497 bytes {0} [built]
        i ｢wdm｣: Failed to compile.
    --------------------------------------
    A: 
        prev: 
            10% building 2/5 modules 3 active J:\plum\Connexions\node_modules\babel-loader\lib\index.js??ref--4!J:\plum\Connexions\src\pageTwo.jsi
        New:
            10% building 4/12 modules 8 active J:\plum\Connexions\node_modules\webpack-dev-server\client\utils\createSocketUrl.jsi

    ------------------------
    H: I have installed babel incorrectly
    E1/3: npm install @babel/core @babel/preset-env // https://stackoverflow.com/questions/52087421/module-build-failed-from-node-modules-babel-loader-lib-index-js-typeerror#52087623

    E2/3: package.json
        ------
            "version": "1.0.0.",
            "babel": {
              "presets": [
                "@babel/preset-env"
              ]
            },
        ------
    E3/3: npm run start
    R: the same 

    --------------------------------------------
        > connexions-monolith@1.0.0 start J:\plum\Connexions
        > webpack-dev-server

        10% building 2/2 modules 0 activei ｢wds｣: Project is running at http://localhost:8081/
        i ｢wds｣: webpack output is served from /
        i ｢wds｣: Content not from webpack is served from J:\plum\Connexions
        10% building 3/6 modules 3 active J:\plum\Connexions\node_modules\webpack\hot sync nonrecursive /^\.\/log$/i ｢wdm｣: wait until bundle finished: /
        × ｢wdm｣: Hash: 10712ab2a93b1ecd7406
        Version: webpack 4.41.0
        Time: 3206ms
        Built at: 10/24/2019 5:13:06 PM
                                  Asset       Size   Chunks                         Chunk Names
                             index.html  282 bytes           [emitted]
        pageOne.f48f9e6a032ed99ea973.js    360 KiB  pageOne  [emitted] [immutable]  pageOne
        pageTwo.1cc915dacd7852f13ef5.js    360 KiB  pageTwo  [emitted] [immutable]  pageTwo
        Entrypoint pageOne = pageOne.f48f9e6a032ed99ea973.js
        Entrypoint pageTwo = pageTwo.1cc915dacd7852f13ef5.js
        [0] multi (webpack)-dev-server/client?http://localhost:8081 ./src/pageOne.js 40 bytes {pageOne} [built]
        [1] multi (webpack)-dev-server/client?http://localhost:8081 ./src/pageTwo.js 40 bytes {pageTwo} [built]
        [./node_modules/ansi-html/index.js] 4.16 KiB {pageOne} {pageTwo} [built]
        [./node_modules/ansi-regex/index.js] 135 bytes {pageOne} {pageTwo} [built]
        [./node_modules/strip-ansi/index.js] 161 bytes {pageOne} {pageTwo} [built]
        [./node_modules/webpack-dev-server/client/index.js?http://localhost:8081] (webpack)-dev-server/client?http://localhost:8081 4.29 KiB {pageOne} {pageTwo} [built]
        [./node_modules/webpack-dev-server/client/overlay.js] (webpack)-dev-server/client/overlay.js 3.51 KiB {pageOne} {pageTwo} [built]
        [./node_modules/webpack-dev-server/client/socket.js] (webpack)-dev-server/client/socket.js 1.53 KiB {pageOne} {pageTwo} [built]
        [./node_modules/webpack-dev-server/client/utils/createSocketUrl.js] (webpack)-dev-server/client/utils/createSocketUrl.js 2.89 KiB {pageOne} {pageTwo} [built]
        [./node_modules/webpack-dev-server/client/utils/log.js] (webpack)-dev-server/client/utils/log.js 964 bytes {pageOne} {pageTwo} [built]
        [./node_modules/webpack-dev-server/client/utils/reloadApp.js] (webpack)-dev-server/client/utils/reloadApp.js 1.59 KiB {pageOne} {pageTwo} [built]
        [./node_modules/webpack-dev-server/client/utils/sendMessage.js] (webpack)-dev-server/client/utils/sendMessage.js 402 bytes {pageOne} {pageTwo} [built]
        [./node_modules/webpack/hot sync ^\.\/log$] (webpack)/hot sync nonrecursive ^\.\/log$ 170 bytes {pageOne} {pageTwo} [built]
        [./src/pageOne.js] 245 bytes {pageOne} [built] [failed] [1 error]
        [./src/pageTwo.js] 245 bytes {pageTwo} [built] [failed] [1 error]
            + 20 hidden modules

        ERROR in ./src/pageOne.js
        Module build failed (from ./node_modules/babel-loader/lib/index.js):
        TypeError: Cannot read property 'babel' of undefined
            at Object.module.exports (J:\plum\Connexions\node_modules\babel-loader\lib\index.js:103:36)

        ERROR in ./src/pageTwo.js
        Module build failed (from ./node_modules/babel-loader/lib/index.js):
        TypeError: Cannot read property 'babel' of undefined
            at Object.module.exports (J:\plum\Connexions\node_modules\babel-loader\lib\index.js:103:36)
        Child html-webpack-plugin for "index.html":
             1 asset
            Entrypoint undefined = index.html
            [./node_modules/html-webpack-plugin/lib/loader.js!./node_modules/html-webpack-plugin/default_index.ejs] 376 bytes {0} [built]
            [./node_modules/lodash/lodash.js] 528 KiB {0} [built]
            [./node_modules/webpack/buildin/global.js] (webpack)/buildin/global.js 472 bytes {0} [built]
            [./node_modules/webpack/buildin/module.js] (webpack)/buildin/module.js 497 bytes {0} [built]
        i ｢wdm｣: Failed to compile.
    --------------------------------------------
    Difference from the previous one (#2):
    3) 10% building 3/6 modules 3 active 
        J:\plum\Connexions\node_modules\webpack\hot sync nonrecursive /^\.\/log$/i ｢wdm｣: wait until bundle finished: /
    2) 10% building 4/12 modules 8 active 
        J:\plum\Connexions\node_modules\webpack-dev-server\client\utils\createSocketUrl.jsi ｢wdm｣: wait until bundle finished: /





	*************************
	P: problem, 
	O: observation, 
	I: inference / question, 
	H: hypothesis, 
	P: prediction, 
	E: experiment, 
	R: results, 
	A: analysis, 
	C: conclusion



------------------------------------
The seven steps of the scientific method
problem, observation, inference, hypothesis,             experiment,           conclusion, result
         observation,            hypothesis,             experiment, analysis, conclusion, results
         observation, question,  hypothesis,                         results,  conclusion
         observation,            hypothesis, prediction, experiment, conclusion

