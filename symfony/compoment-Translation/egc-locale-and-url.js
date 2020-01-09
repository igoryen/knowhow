you can store the locale of the user in the session.
Thanks to that, 
it may be tempting to use the same URL 
to display a resource in different languages 
based on the user's locale. 

For example, 
http://www.example.com/contact 
could show content in English for one user 
and French for another user. 

Unfortunately, 
this violates a fundamental rule of the Web: 
that a particular URL returns the same resource 
regardless of the user. 
To further muddy the problem, 
which version of the content would be indexed by search engines?

A better policy is 
to include the locale in the URL 
using the special "_locale" parameter:

---------------------------------
	# config/routes.yaml
	contact:
	    path:       /{_locale}/contact
	    controller: App\Controller\ContactController::index
	    requirements:
	        _locale: en|fr|de
---------------------------------

When using the special "_locale" parameter in a route, 
the matched locale is automatically set on the Request 
and can be retrieved via the getLocale() method. 

In other words, 
if a user visits the URI /fr/contact, 
the locale fr will automatically be set as the locale for the current request.

You can now use the locale 
to create routes to other translated pages in your application.