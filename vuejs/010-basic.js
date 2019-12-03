myproject
	|dist| // #5
	|node_modules|
	|public|
	|src|
		|assets| // #6
			|css|
				style.min.css
			|images|
				logo.png
				puppy.png
			|js|
				main.min.js			
		|components| // #3
			|layout| // #4
				Header.vue
			AddToDoItem.vue
			HellowWorld.vue
			TodoItem.vue
			Todos.vue
		|views| // #2
			About.vue
			Contact.vue
			Home.vue
		App.vue
		main.js // #1
		router.js
	.bitmap
	.gitignore
	babel.config.js
	package-lock.json
	package.json
	README.md

/*
	1. the main js file
	2. views - files that create pieces of pages/UI. They are used by components. Include <template>, <script>, <style>.
	3. components - "DOM" pieces. Have the 3 parts (<template>, <script>, <style>).
	4. DOM elements that are in every page. Have the 3 parts (<template>, <script>, <style>).
	5. ready made files. This folder can also be called "app"
	6. "assets" folder. Holds styling, images, and JS

*/