https://stackoverflow.com/questions/26117753/laravel-5-makecontroller-creating-controller-in-app-folder-instead-of-controlle

In Laravel 5, it is not required to specify the path. By default, it will generate the controller in the directory.

So, the controller can be created like this:

php artisan make:controller controllerName
However, if you would like to create it in a custom directory then refer to the line below:

php artisan make:controller pathName/controllerName