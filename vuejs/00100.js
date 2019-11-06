Vue CLI
🛠️ Standard Tooling for Vue.js Development

Get Started →

Feature Rich
Out-of-the-box support for Babel, TypeScript, ESLint, PostCSS, PWA, Unit Testing & End-to-end Testing.

Extensible
The plugin system allows the community to build and share reusable solutions to common needs.

No Need to Eject
Vue CLI is fully configurable without the need for ejecting. This allows your project to stay up-to-date for the long run.

Graphical User Interface
Create, develop and manage your projects through an accompanying graphical user interface.

Instant Prototyping
Instantly prototype new ideas with a single Vue file.

Future Ready
Effortlessly ship native ES2015 code for modern browsers, or build your vue components as native web components.

#Getting Started
Install:

npm install -g @vue/cli
# OR
yarn global add @vue/cli
Create a project:

vue create my-project
# OR
vue ui
MIT Licensed | Copyright © 2018-present Evan You

https://cli.vuejs.org/guide/


	Overview
	WARNING

	This documentation is for @vue/cli. For the old vue-cli, see here.

	Vue CLI is a full system for rapid Vue.js development, providing:

	Interactive project scaffolding via @vue/cli.
	Zero config rapid prototyping via @vue/cli + @vue/cli-service-global.
	A runtime dependency (@vue/cli-service) that is:
	Upgradeable;
	Built on top of webpack, with sensible defaults;
	Configurable via in-project config file;
	Extensible via plugins
	A rich collection of official plugins integrating the best tools in the frontend ecosystem.
	A full graphical user interface to create and manage Vue.js projects.
	Vue CLI aims to be the standard tooling baseline for the Vue ecosystem. It ensures the various build tools work smoothly together with sensible defaults so you can focus on writing your app instead of spending days wrangling with configurations. At the same time, it still offers the flexibility to tweak the config of each tool without the need for ejecting.

	#Components of the System
	There are several moving parts of Vue CLI - if you look at the source code, you will find that it is a monorepo containing a number of separately published packages.

	#CLI
	The CLI (@vue/cli) is a globally installed npm package and provides the vue command in your terminal. It provides the ability to quickly scaffold a new project via vue create, or instantly prototype new ideas via vue serve. You can also manage your projects using a graphical user interface via vue ui. We will walk through what it can do in the next few sections of the guide.

	#CLI Service
	The CLI Service (@vue/cli-service) is a development dependency. It's an npm package installed locally into every project created by @vue/cli.

	The CLI Service is built on top of webpack and webpack-dev-server. It contains:

	The core service that loads other CLI Plugins;
	An internal webpack config that is optimized for most apps;
	The vue-cli-service binary inside the project, which comes with the basic serve, build and inspect commands.
	If you are familiar with create-react-app, @vue/cli-service is roughly the equivalent of react-scripts, although the feature set is different.

	The section on CLI Service covers its detailed usage.

	#CLI Plugins
	CLI Plugins are npm packages that provide optional features to your Vue CLI projects, such as Babel/TypeScript transpilation, ESLint integration, unit testing, and end-to-end testing. It's easy to spot a Vue CLI plugin as their names start with either @vue/cli-plugin- (for built-in plugins) or vue-cli-plugin- (for community plugins).

	When you run the vue-cli-service binary inside your project, it automatically resolves and loads all CLI Plugins listed in your project's package.json.

	Plugins can be included as part of your project creation process or added into the project later. They can also be grouped into reusable presets. We will discuss these in more depth in the Plugins and Presets section.


https://cli.vuejs.org/guide/installation.html


	Installation
	Warning regarding Previous Versions

	The package name changed from vue-cli to @vue/cli. If you have the previous vue-cli (1.x or 2.x) package installed globally, you need to uninstall it first with npm uninstall vue-cli -g or yarn global remove vue-cli.

	Node Version Requirement

	Vue CLI requires Node.js version 8.9 or above (8.11.0+ recommended). You can manage multiple versions of Node on the same machine with nvm or nvm-windows.

	To install the new package, use one of the following commands. You need administrator privileges to execute these unless npm was installed on your system through a Node.js version manager (e.g. n or nvm).

	npm install -g @vue/cli
	# OR
	yarn global add @vue/cli
	After installation, you will have access to the vue binary in your command line. You can verify that it is properly installed by simply running vue, which should present you with a help message listing all available commands.

	You can check you have the right version with this command:

	vue --version
	Edit this page on GitHub Last Updated: 8/13/2019, 1:03:06 PM






https://cli.vuejs.org/guide/prototyping.html







	Instant Prototyping
	You can rapidly prototype with just a single *.vue file with the vue serve and vue build commands, but they require an additional global addon to be installed first:

	npm install -g @vue/cli-service-global
	# or
	yarn global add @vue/cli-service-global
	The drawback of vue serve is that it relies on globally installed dependencies which may be inconsistent on different machines. Therefore this is only recommended for rapid prototyping.

	#vue serve
	Usage: serve [options] [entry]

	serve a .js or .vue file in development mode with zero config


	Options:

	  -o, --open         Open browser
	  -c, --copy         Copy local url to clipboard
	  -p, --port <port>  Port used by the server (default: 8080 or next available port)
	  -h, --help         Output usage information
	All you need is an App.vue file:

	<template>
	  <h1>Hello!</h1>
	</template>
	Then in the directory with the App.vue file, run:

	vue serve
	vue serve uses the same default setup (webpack, babel, postcss & eslint) as projects created by vue create. It automatically infers the entry file in the current directory - the entry can be one of main.js, index.js, App.vue or app.vue. You can also explicitly specify the entry file:

	vue serve MyComponent.vue
	If needed, you can also provide an index.html, package.json, install and use local dependencies, or even configure babel, postcss & eslint with corresponding config files.

	#vue build
	Usage: build [options] [entry]

	build a .js or .vue file in production mode with zero config


	Options:

	  -t, --target <target>  Build target (app | lib | wc | wc-async, default: app)
	  -n, --name <name>      name for lib or web-component (default: entry filename)
	  -d, --dest <dir>       output directory (default: dist)
	  -h, --help             output usage information
	You can also build the target file into a production bundle for deployment with vue build:

	vue build MyComponent.vue
	vue build also provides the ability to build the component as a library or a web component. See Build Targets for more details.

	Edit this page on GitHub Last Updated: 7/25/2019, 1:57:00 AM

https://cli.vuejs.org/guide/creating-a-project.html#vue-create


	Creating a Project
	#vue create
	To create a new project, run:

	vue create hello-world
	WARNING

	If you are on Windows using Git Bash with minTTY, the interactive prompts will not work. You must launch the command as winpty vue.cmd create hello-world. If you however want to still use the vue create hello-world syntax, you can alias the command by adding the following line to your ~/.bashrc file. alias vue='winpty vue.cmd' You will need to restart your Git Bash terminal session to pull in the updated bashrc file.

	You will be prompted to pick a preset. You can either choose the default preset which comes with a basic Babel + ESLint setup, or select "Manually select features" to pick the features you need.

	CLI preview

	The default setup is great for quickly prototyping a new project, while the manual setup provides more options that are likely needed for more production-oriented projects.

	CLI preview

	If you chose to manually select features, at the end of the prompts you also have the option to save your selections as a preset so that you can reuse it in the future. We will discuss presets and plugins in the next section.

	~/.vuerc

	Saved presets will be stored in a JSON file named .vuerc in your user home directory. If you wish to modify saved presets / options, you can do so by editing this file.

	During the project creation process, you may also be prompted to select a preferred package manager, or use the Taobao npm registry mirror for faster dependency installation. Your choices will also be saved in ~/.vuerc.

	The vue create command has a number of options and you can explore them all by running:

	vue create --help
	Usage: create [options] <app-name>

	create a new project powered by vue-cli-service


	Options:

	  -p, --preset <presetName>       Skip prompts and use saved or remote preset
	  -d, --default                   Skip prompts and use default preset
	  -i, --inlinePreset <json>       Skip prompts and use inline JSON string as preset
	  -m, --packageManager <command>  Use specified npm client when installing dependencies
	  -r, --registry <url>            Use specified npm registry when installing dependencies
	  -g, --git [message|false]       Force / skip git initialization, optionally specify initial commit message
	  -n, --no-git                    Skip git initialization
	  -f, --force                     Overwrite target directory if it exists
	  -c, --clone                     Use git clone when fetching remote preset
	  -x, --proxy                     Use specified proxy when creating project
	  -b, --bare                      Scaffold project without beginner instructions
	  -h, --help                      Output usage information
	#Using the GUI
	You can also create and manage projects using a graphical interface with the vue ui command:

	vue ui
	The above command will open a browser window with a GUI that guides you through the project creation process.

	UI preview

	#Pulling 2.x Templates (Legacy)
	Vue CLI >= 3 uses the same vue binary, so it overwrites Vue CLI 2 (vue-cli). If you still need the legacy vue init functionality, you can install a global bridge:

	npm install -g @vue/cli-init
	# vue init now works exactly the same as vue-cli@2.x
	vue init webpack my-project
	Edit this page on GitHub Last Updated: 2/8/2019, 12:47:43 PM


https://cli.vuejs.org/guide/plugins-and-presets.html#plugins

	Plugins and Presets
	#Plugins
	Vue CLI uses a plugin-based architecture. If you inspect a newly created project's package.json, you will find dependencies that start with @vue/cli-plugin-. Plugins can modify the internal webpack configuration and inject commands to vue-cli-service. Most of the features listed during the project creation process are implemented as plugins.

	The plugin based architecture makes Vue CLI flexible and extensible. If you are interested in developing a plugin, check out the Plugin Development Guide.

	TIP

	You can install and manage Plugins using the GUI with the vue ui command.

	#Installing Plugins in an Existing Project
	Each CLI plugin ships with a generator (which creates files) and a runtime plugin (which tweaks the core webpack config and injects commands). When you use vue create to create a new project, some plugins will be pre-installed for you based on your feature selection. In case you want to install a plugin into an already created project, you can do so with the vue add command:

	vue add eslint
	TIP

	vue add is specifically designed for installing and invoking Vue CLI plugins. It is not meant as a replacement for normal npm packages. For normal npm packages, you should still use your package manager of choice.

	WARNING

	It is recommended to commit your project's current state before running vue add, since the command will invoke the plugin's file generator and potentially make changes to your existing files.

	The command resolves @vue/eslint to the full package name @vue/cli-plugin-eslint, installs it from npm, and invokes its generator.

	# these are equivalent to the previous usage
	vue add cli-plugin-eslint
	Without the @vue prefix, the command will resolve to an unscoped package instead. For example, to install the 3rd party plugin vue-cli-plugin-apollo:

	# installs and invokes vue-cli-plugin-apollo
	vue add apollo
	You can also use 3rd party plugins under a specific scope. For example, if a plugin is named @foo/vue-cli-plugin-bar, you can add it with:

	vue add @foo/bar
	You can pass generator options to the installed plugin (this will skip the prompts):

	vue add eslint --config airbnb --lintOn save
	If a plugin is already installed, you can skip the installation and only invoke its generator with the vue invoke command. The command takes the same arguments as vue add.

	TIP

	If for some reason your plugins are listed in a package.json file other than the one located in your project, you can set the vuePlugins.resolveFrom option in the project package.json with the path to the folder containing the other package.json file.

	For example, if you have a .config/package.json file:

	{
	  "vuePlugins": {
	    "resolveFrom": ".config"
	  }
	}
	#Project local plugin
	If you need access to the plugin API in your project and don't want to create a full plugin for it, you can use the vuePlugins.service option in your package.json file:

	{
	  "vuePlugins": {
	    "service": ["my-commands.js"]
	  }
	}
	Each file will need to export a function taking the plugin API as the first argument. For more information about the plugin API, check out the Plugin Development Guide.

	You can also add files that will behave like UI plugins with the vuePlugins.ui option:

	{
	  "vuePlugins": {
	    "ui": ["my-ui.js"]
	  }
	}
	For more information, read the UI Plugin API.

	#Presets
	A Vue CLI preset is a JSON object that contains pre-defined options and plugins for creating a new project so that the user doesn't have to go through the prompts to select them.

	Presets saved during vue create are stored in a configuration file in your user home directory (~/.vuerc). You can directly edit this file to tweak / add / delete the saved presets.

	Here's an example preset:

	{
	  "useConfigFiles": true,
	  "cssPreprocessor": "sass",
	  "plugins": {
	    "@vue/cli-plugin-babel": {},
	    "@vue/cli-plugin-eslint": {
	      "config": "airbnb",
	      "lintOn": ["save", "commit"]
	    },
	    "@vue/cli-plugin-router": {},
	    "@vue/cli-plugin-vuex": {}
	  }
	}
	The preset data is used by plugin generators to generate corresponding project files. In addition to the above fields, you can also add additional configuration for integrated tools:

	{
	  "useConfigFiles": true,
	  "plugins": {...},
	  "configs": {
	    "vue": {...},
	    "postcss": {...},
	    "eslintConfig": {...},
	    "jest": {...}
	  }
	}
	These additional configurations will be merged into package.json or corresponding config files, depending on the value of useConfigFiles. For example, with "useConfigFiles": true, the value of configs.vue will be merged into vue.config.js.

	#Preset Plugin Versioning
	You can explicitly specify versions of the plugins being used:

	{
	  "plugins": {
	    "@vue/cli-plugin-eslint": {
	      "version": "^3.0.0",
	      // ... other options for this plugin
	    }
	  }
	}
	Note this is not required for official plugins - when omitted, the CLI will automatically use the latest version available in the registry. However, it is recommended to provide a explicit version range for any 3rd party plugins listed in a preset.

	#Allowing Plugin Prompts
	Each plugin can inject its own prompts during the project creation process, however when you are using a preset, those prompts will be skipped because Vue CLI assumes all the plugin options are already declared in the preset.

	In some cases you may want the preset to only declare the desired plugins, while leaving some flexibility by letting the user go through the prompts injected by the plugins.

	For such scenarios you can specify "prompts": true in a plugin's options to allow its prompts to be injected:

	{
	  "plugins": {
	    "@vue/cli-plugin-eslint": {
	      // let the users pick their own ESLint config
	      "prompts": true
	    }
	  }
	}
	#Remote Presets
	You can share a preset with other developers by publishing it in a git repo. The repo can contain the following files:

	preset.json: the main file containing the preset data (required).
	generator.js: a Generator that can inject or modify files in the project.
	prompts.js: a prompts file that can collect options for the generator.
	Once the repo is published, you can then use the --preset option to use the remote preset when creating a project:

	# use preset from GitHub repo
	vue create --preset username/repo my-project
	GitLab and BitBucket are also supported. Make sure to use the --clone option if fetching from private repos:

	vue create --preset gitlab:username/repo --clone my-project
	vue create --preset bitbucket:username/repo --clone my-project

	# self-hosted repos
	vue create --preset gitlab:my-gitlab-server.com:group/projectname --clone my-project
	vue create --preset direct:ssh://git@my-gitlab-server.com/group/projectname.git --clone my-project
	#Local Filesystem Preset
	When developing a remote preset, it can be tedious to have to repeatedly push the preset to a remote repo to test it. To simplify the workflow, you can directly work with local presets. Vue CLI will load local presets if the value for the --preset option is a relative or absolute file path, or ends with .json:

	# ./my-preset should be a directory containing preset.json
	vue create --preset ./my-preset my-project

	# or directly use a json file in cwd:
	vue create --preset my-preset.json my-project
	Edit this page on GitHub Last Updated: 7/6/2019, 9:09:38 AM


