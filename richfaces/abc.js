RichFaces
It is an open source Ajax-enabled component library for JavaServer Faces, hosted by JBoss. 
It allows easy integration of Ajax capabilities into enterprise application development. 
It reached its end-of-life in June 2016.

RichFaces is more than just a component library for JavaServer Faces. 

It adds:

    Skinability (easily change and update application look and feel)
    Component Development Kit (CDK) to assist in constructing JavaServer Faces components
    Dynamic Resource Framework
    Both page wide, and component based Ajax control components.

Framework

The framework is implemented as a component library which adds Ajax capability into existing pages, 
so a developer doesn’t need to write any JavaScript code or to replace existing components with new Ajax widgets. 
RichFaces enables page-wide Ajax support instead of the traditional component-wide support. 
Hence, a developer can define the event on the page that invokes an Ajax request 
and the areas of the page that should be synchronized with the JSF Component Tree after the Ajax request changes the data on the server according to the events fired on the client.

RichFaces allows you to define (by means of JSF tags) different parts of a JSF page you wish to update with an Ajax request, 
and provides a few options to send Ajax requests to the server. 

Also the JSF page doesn`t change from a "regular" JSF page and you don`t need to write any JavaScript code by hand. 
By controlling everything from the server side, almost no JavaScript is needed and the page state can be maintained easily in the server.