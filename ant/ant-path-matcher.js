java.lang.NoClassDefFoundError: org/springframework/util/AntPathMatcher

Hypothesis:
	classpath is broken

	Solution:
	revise the argument to -cp, your Class-Path entry in MANIFEST.MF or your disk layout.


A classpath is a list of locations to load classes from.

These 'locations' can either be directories, or jar files.

For directories, 
	the JVM will follow an expected pattern for loading a class. 
	If 
		I have the directory C:/myproject/classes in my classpath, 
		and 
		I attempt to load a class com.mycompany.Foo, 
	then 
		it will look under the classes directory for a directory called com, 
		then under that a directory called mycompany, 
		and finally it will look for a file called Foo.class in that directory.

In the second instance, for jar files, 
	it will search the jar file for that class. 

	A jar file is in reality just a zipped collection of directories like the above. 
	If you unzip a jar file, you`ll get a bunch of directories and class files following the pattern above.

	So the JVM traverses a classpath from start to finish 
	looking for the definition of the class when it attempts to load the class definition. 
	For example, in the classpath :

		C:/myproject/classes;C:/myproject/lib/stuff.jar;C:/myproject/lib/otherstuff.jar

	The JVM will attempt to look in the directory classes first, then in stuff.jar and finally in otherstuff.jar.

	When you get a ClassNotFoundException, it means the JVM has traversed the entire classpath and not found the class you`ve attempted to reference. The solution, as so often in the Java world, is to check your classpath.

	You define a classpath on the command line by saying java -cp and then your classpath. 
	In an IDE such as Eclipse, you`ll have a menu option to specify your classpath.

