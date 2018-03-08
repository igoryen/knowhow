Seam was a web application framework.
Seam was developed by JBoss, a division of Red Hat.



Seam 3 provides a modular set of extensions to the CDI programming model. // CDI = context and dependency injection
Seam`s mission is to provide a fully integrated development platform 
for building rich, standards-based Internet applications tailored for traditional and cloud deployments. 
Seam 3 is intended to be a more scalable, feature rich set of extensions than Seam 2, which is under maintenance development only.

Seam sources on Github https://github.com/seam 
have not been updated since September 2012. 
Active development of Seam 3 has been halted by Red Hat.



Seam 2
Seam 2 combines the two frameworks 
	Enterprise JavaBeans (EJB3) and 
	JavaServer Faces (JSF). 

However, simple POJOs can be used at the back end. 
One can turn any EJB3 object or any simple POJO object into a Seam component by just using annotations. 
Once a component becomes a Seam component, it can be accessed through JSF or through other business-logic components in a unified manner. 
Thus, one can access any back-end EJB component from the front-end by addressing it by its Seam component name. This Java web framework incorporates identity management features.

Seam 2 introduces the concept of bijection, taken from Spring's dependency injection feature where objects can be in-jected or out-jected to/from assigned variables using the @In and @Out annotations.

The framework also expands the concept of contexts. Each Seam component exists within a context. The default Seam context, a conversation, can span multiple pages and usually spans the whole business flow, from start to finish. The session context captures all actions of a user until he/she logs out or closes the browser - even across multiple uses of the browser back-button.

One can automatically generate a CRUD (create-read-update-delete) web-application from an existing database using the command-line tool seam-gen supplied with the framework.

Seam facilitates WYSIWYG development through the use of JBoss Tools, a set of plug-ins targeted at the open-source Eclipse integrated development environment.

Seam integrates out of the box with the RichFaces and ICEfaces Ajax libraries, as well as with many other Ajax libraries - without the need to write JavaScript code.

Seam also includes a PDF document creator, e-mailing, graph creation, and the creation of Microsoft Excel worksheets.