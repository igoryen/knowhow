|src|
	|assets|
	App.vue // #60
		-----------------------
			template
				div#app // #66

			script
				name: '#app' // #65
		-----------------------
	main.js // #62
		----------------------
			import Vue from 'vue'
			import App from './App.vue'

			new Vue({
				el: '#app', // #63
				render: h => h(App) // #64
			});
		-------------------
.babelrc // #68
.gitignore
index.html // #61
	---------------------------
	contains
		div id="app" // #67
		script src='/dist/build.js' //   #59
	--------------------------------
package.json
webpack.config.js
