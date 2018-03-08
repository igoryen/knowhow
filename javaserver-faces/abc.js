JavaServer Faces (JSF) is a Java specification.
Purpuse: for building component-based user interfaces for web applications.
It was formalized as a standard through the Java Community Process being part of the Java Platform, Enterprise Edition. 

It is also a MVC web framework that simplifies construction of user interfaces (UI) for server-based applications 
by using reusable UI components in a page.

JSF 2 uses Facelets as its default templating system. 
Other view technologies such as XUL or plain Java[3] can also be employed. 
In contrast, JSF 1.x uses JavaServer Pages (JSP) as its default templating system.

How it works
Based on a component-driven UI design-model,
JavaServer Faces uses XML files called "view templates" or "Facelets views". 
The FacesServlet processes requests, loads the appropriate view template, builds a component tree, processes events, 
and renders the response (typically in the HTML language) to the client. 
The state of UI components and other objects of scope interest is saved at the end of each request 
in a process called stateSaving (note: transient true), 
and restored upon next creation of that view. 
Either the client or the server side can save objects and states.