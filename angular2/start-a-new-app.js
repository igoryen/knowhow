// creating folder angular2_hello_world

cd blabla // 1
ng new angular2_hello_world
cd angular2_hello_world
cd src
tree -F
explor index.html

ng serve // 2


http://localhost:4200/ // 3


ng generate component hello-world // 4 
	
	/angular2_hello_world/src/app/hello-world/hello-world.component.ts // 5
	/angular2_hello_world/src/app/hello-world/hello-world.component.html // 6
	/angular2_hello_world/src/app/hello-world/hello-world.component.css // 7
	/angular2_hello_world/src/app/app.component.html // 8

ng generate component user-item // 4
	
	/angular2_hello_world/src/app/app.component.html // 9
	/angular2_hello_world/src/app/user-item/user-item.component.ts // 5
	/angular2_hello_world/src/app/user-item/user-item.component.html // 10

ng generate component user-list // 4

	/angular2_hello_world/src/app/app.component.html // 9
	/angular2_hello_world/src/app/user-list/user-list.component.ts // 5,11
	/angular2_hello_world/src/app/user-list/user-list.component.html // 10

/*
1. cd to the dir where the project will live
2. to run the app
	This command live-compiles .ts files to .js files so the web browser will understand.
3. open in the browser
4. to generate a new component named
5. the file where JS ... lives
6. the file where 1 html template lives
7. the file where the styling lives
8. where you add the tag for the new component
9. add the tag for the new component
10. where you modify the html and add this: {{ name }} 
11. add an array in JS code
*/