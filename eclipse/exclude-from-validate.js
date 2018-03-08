https://stackoverflow.com/questions/2272237/how-to-exclude-specific-folders-or-files-from-validation-in-eclipse

to exclude node_modules/

-----------

Window > Preferences > Validation

-----------
// https://stackoverflow.com/questions/6495378/exclude-directories-subdirectories-from-validation-in-eclipse/6495480
// this one worked for me (180109)
Window > Show view > Navigator >
	> folder rck > Properties > 
	> Resource > Attributes > Derived chk >
	> OK
Project > Clean > OK

----------


