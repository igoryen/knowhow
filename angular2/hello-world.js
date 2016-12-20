// creating folder angular2_hello_world

cd blabla // to the dir where the project will live
ang new angular2_hello_world
cd angular2_hello_world
cd src
tree -F
explor index.html

// run the app
ng serve

// open in the browser
http://localhost:4200/

// generate a new component named 'hello-world'
ng generate component hello-world

	// the file where JS ... lives
	/angular2_hello_world/src/app/hello-world/hello-world.component.ts

	// the file where 1 html template lives
	/angular2_hello_world/src/app/hello-world/hello-world.component.html

	// the file where the styling lives
	/angular2_hello_world/src/app/hello-world/hello-world.component.css

	// where you add the tag for the new component
	/angular2_hello_world/src/app/app.component.html


// generate a new component
ng generate component user-item

	// add the tag for the new component
	/angular2_hello_world/src/app/app.component.html

	// JavaScript code
	/angular2_hello_world/src/app/user-item/user-item.component.ts

	// where you add this: {{ name }}
	/angular2_hello_world/src/app/user-item/user-item.component.html


// generate a component to render a list
ng generate component user-list

	// add the tag for the new component
	/angular2_hello_world/src/app/app.component.html

	// add an array in JS code
	/angular2_hello_world/src/app/user-list/user-list.component.ts

	// modify the html
	/angular2_hello_world/src/app/user-list/user-list.component.html