http://www.quackit.com/javascript/tutorial/javascript_void_0.cfm

'void' 
It is a JS operator.
1. evaluates the given expression
2. returns a value of 'undefined'

example:
<a href="JavaScript:void(0);" ...


if an expression is inserted into a web page
that can cause an unwanted side-effect
use 'JavaScript:void(0)'
It will return the primitive value 'undefined'

Common usage:
with hyperlinks

Normally:
a click on a hyperlink
the browser does these:
- loads a new page
- refreshes the old page

But I have attached some JavaScript to that link.
I do not want the browser to do page-load or page-refresh.

You can stop the WB from doing it.
Use 'JavaScript:void(0)'.

I created a link.
I want it to display a message on double-click.
I do not want the WB to do page-reload-refresh on single click.
I use 'JavaScript:void(0)'.

<a href="JavaScript:void(0);" ondblclick="alert('Well done!')">Double Click Me!</a>

