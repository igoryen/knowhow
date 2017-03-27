// # run the app in the terminal 
ng serve

// # ng looks at angular-cli.json

// # main says
"apps": [
{
    ...
    "main": "main.ts",
    ...
// i.e. the 'main' file of the app is main.ts
// and it bootstraps the app.

// # the bootstrap process boots an Angular module.

// # src/app/app.module.ts specifies the app.Module.
// It uses app.Module to bootstrap the app.

// # app.Module specifies the Component to use as the top-level Component.
// E.g. AppComponent.

// # The top-level Component (e.g. AppComponent)
// has a tag (e.g. <app-user-list>) in the template.
// That tag renders the ... (e.g. list of users)