Facelets is an open-source Web template system.
Facelets is the default view handler technology (aka view declaration language) for JavaServer Faces (JSF). 
The language requires valid input XML documents to work. 

Facelets 
- supports all of the JSF UI components
- focuses completely on building the JSF component tree, reflecting the view for a JSF application.

Although both JSP and JSF technologies have been improved to work better together, 
Facelets eliminates the issues noted in Hans Bergsten`s article "Improving JSF by Dumping JSP"

Facelets draws on some of the ideas from Apache Tapestry, and is similar enough to draw comparison. 
The project is conceptually similar to Tapestry`s, which treats blocks of HTML elements as framework components backed by Java classes. 
Facelets also has some similarities to the Apache Tiles framework with respect to support templating as well as composition.

Facelets was originally created by Jacob Hookom in 2005
as a separate, alternative view declaration language for JSF 1.1 and JSF 1.2 
that both used JSP as the default view declaration language. 
Starting from JSF 2.0, Facelets has been promoted by the JSF expert group to be the default view declaration language. 
JSP has been deprecated as a legacy fall back.

-------

Element conversion

In Facelets, templates tags from a tag library can be entered in two forms: 
directly as a qualified xml element 
or indirectly via the jsfc attribute on an arbitrary non-qualified element. 

In the latter case the Facelet compiler will ignore the actual element and will process the element 
as-if it was the one given by the jsfc attribute.

The following example shows the direct usage of qualified tags:

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:h="http://java.sun.com/jsf/html">
    <body>
        <h:form>
            <h:outputText value="Welcome, #{loggedInUser.name}" disabled="#{empty loggedInUser}" />
            <h:inputText value="#{bean.property}" />
            <h:commandButton value="OK" action="#{bean.doSomething}" /> 
        </h:form>
    </body>
</html>

Using the jsfc attribute, the same code can also be expressed as the example given below:

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 
Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:h="http://java.sun.com/jsf/html">
    <body>
        <form jsfc="h:form">
            <span jsfc="h:outputText" value="Welcome, #{loggedInUser.name}" disabled="#{empty loggedInUser}" />
            <input type="text" jsfc="h:inputText" value="#{bean.property}" />
            <input type="submit" jsfc="h:commandButton" value="OK" action="#{bean.doSomething}" /> 
        </form>
    </body>
</html>

The above code can be viewed in a browser, and edited with conventional WYSIWYG design tools. 
This is not possible when directly using the qualified tags. 
Nevertheless, directly using qualified tags is the most popular way of using Facelets in practice 
and is the style most used in books and examples.

==================
Templating

Facelets provides a facility for templating.
A Facelets file can reference a master template and provide content for the placeholders this master template defines. 
The file that references such a template is called the template client. 
Template clients themselves can again be used as a template for other template clients and as such a hierarchy of templates can be created.

The following shows an example of a simple master template:

templates/master_template.xhtml

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" 
    xmlns:h="http://java.sun.com/jsf/html"
    xmlns:ui="http://java.sun.com/jsf/facelets">

    <h:head>
        <meta http-equiv="content-type" content="text/html;charset=UTF-8"/>
        <meta http-equiv="pragma" content="no-cache"/>
    </h:head>

    <h:body>
         Standard header text for every page.

         <ui:insert name="body_content" /> <---<<<

         Standard footer text for every page.
    </h:body>
</html>


The above code contains a default HTML 'frame' and a single placeholder called "body_content". 
A template client can use this template as follows:

template_client.xhtml

<ui:composition template="/templates/master_template.xhtml"
    xmlns="http://www.w3.org/1999/xhtml"
    xmlns:ui="http://java.sun.com/jsf/facelets">

    <ui:define name="body_content">
        This is a template client page that uses the master template.		
    </ui:define>
</ui:composition>

The above code makes use of the template /templates/master_template.xhtml and provides content for the placeholder in that template. 
The final result will be a page called template_client.xhtml that has the content of /templates/master_template.xhtml, 
but with <ui:insert name="body_content"/> replaced by 'This is a template client page that uses the master template.'.


