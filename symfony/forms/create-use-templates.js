http://symfony.com/doc/current/templating.html

Creating and Using Templates
3.1 version

As you know, the controller is responsible for handling each request that comes into a Symfony application. 
In reality, 
the controller delegates most of the heavy work to other places 
so that code can be tested and reused. 
When a controller needs to generate HTML, CSS or any other content, 
it hands the work off to the templating engine. 

In this chapter, 
you`ll learn how to write powerful templates 
that can be used to return content to the user, 
populate email bodies, and more. 
You`ll learn shortcuts, clever ways to extend templates and how to reuse template code.

How to render templates is covered in the controller article.


Templates¶

A template is simply a text file 
that can generate any text-based format (HTML, XML, CSV, LaTeX ...). 
The most familiar type of template is a PHP template 
- a text file parsed by PHP that contains a mix of text and PHP code:

<!DOCTYPE html>
<html>
    <head>
        <title>Welcome to Symfony!</title>
    </head>
    <body>
        <h1><?php echo $page_title ?></h1>

        <ul id="navigation">
            <?php foreach ($navigation as $item): ?>
                <li>
                    <a href="<?php echo $item->getHref() ?>">
                        <?php echo $item->getCaption() ?>
                    </a>
                </li>
            <?php endforeach ?>
        </ul>
    </body>
</html>

But Symfony packages (uses) an even more powerful templating language called Twig. 
Twig allows you to write concise, readable templates 
that are more friendly to web designers and, in several ways, more powerful than PHP templates:

<!DOCTYPE html>
<html>
    <head>
        <title>Welcome to Symfony!</title>
    </head>
    <body>
        <h1>{{ page_title }}</h1>

        <ul id="navigation">
            {% for item in navigation %}
                <li><a href="{{ item.href }}">{{ item.caption }}</a></li>
            {% endfor %}
        </ul>
    </body>
</html>


Twig defines three types of special syntax:

{{ ... }}
    "Says something": prints a variable or the result of an expression to the template.
{% ... %}
    "Does something": a tag that controls the logic of the template; it is used to execute statements such as for-loops for example.
{# ... #}
    "Comment something": it`s the equivalent of the PHP /* comment */ syntax. It's used to add single or multi-line comments. The content of the comments isn't included in the rendered pages.

Twig also contains filters, 
which modify content before being rendered. 
The following makes the title variable all uppercase before rendering it:
{{ title|upper }}

Twig comes with a long list of tags, filters and functions that are available by default. 
You can even add your own custom filters, functions (and more) via a Twig Extension.

Twig code will look similar to PHP code, with subtle, nice differences. 
The following example uses a standard "for" tag and the cycle function to print ten div tags, 
with alternating odd, even classes:

{% for i in 1..10 %}
    <div class="{{ cycle(['even', 'odd'], i) }}">
      <!-- some HTML here -->
    </div>
{% endfor %}

Throughout this chapter, template examples will be shown in both Twig and PHP.

Why Twig?

	Twig templates are meant to be simple and won`t process PHP tags. 
	This is by design: the Twig template system is meant to express presentation, not program logic. 
	The more you use Twig, the more you`ll appreciate and benefit from this distinction. 
	And of course, you`ll be loved by web designers everywhere.

	Twig can also do things that PHP can`t, such as 
	- whitespace control, 
	- sandboxing, 
	- automatic HTML escaping, 
	- manual contextual output escaping, 
	- and the inclusion of custom functions and filters that only affect templates. 
	
	Twig contains little features that make writing templates easier and more concise. 
	Take the following example, which combines a loop with a logical if statement:


	<ul>
	    {% for user in users if user.active %}
	        <li>{{ user.username }}</li>
	    {% else %}
	        <li>No users found</li>
	    {% endfor %}
	</ul>

Twig Template Caching¶

	Twig is fast 
	because each template is compiled to a native PHP class and cached. 
	But don`t worry: 
	this happens automatically and doesn`t require you to do anything. 
	And while you`re developing, 
	Twig is smart enough to re-compile you templates after you make any changes. 
	That means Twig is fast in production, but easy to use while developing.

Template Inheritance and Layouts¶

	More often than not, 
	templates in a project share common elements, 
	like the header, footer, sidebar or more. 
	In Symfony, this problem is thought about differently: 
	a template can be decorated by another one. 
	This works exactly the same as PHP classes: 
	template inheritance allows you to build a base "layout" template 
	that contains all the common elements of your site defined as blocks (think "PHP class with base methods"). A child template can extend the base layout and override any of its blocks (think "PHP subclass that overrides certain methods of its parent class").

	First, build a base layout file:

	{# app/Resources/views/base.html.twig #}
	<!DOCTYPE html>
	<html>
	    <head>
	        <meta charset="UTF-8">
	        <title>{% block title %}Test Application{% endblock %}</title>
	    </head>
	    <body>
	        <div id="sidebar">
	            {% block sidebar %}
	                <ul>
	                    <li><a href="/">Home</a></li>
	                    <li><a href="/blog">Blog</a></li>
	                </ul>
	            {% endblock %}
	        </div>

	        <div id="content">
	            {% block body %}{% endblock %}
	        </div>
	    </body>
	</html>

	<!-- app/Resources/views/base.html.php -->
	<!DOCTYPE html>
	<html>
	    <head>
	        <meta charset="UTF-8">
	        <title><?php $view['slots']->output('title', 'Test Application') ?></title>
	    </head>
	    <body>
	        <div id="sidebar">
	            <?php if ($view['slots']->has('sidebar')): ?>
	                <?php $view['slots']->output('sidebar') ?>
	            <?php else: ?>
	                <ul>
	                    <li><a href="/">Home</a></li>
	                    <li><a href="/blog">Blog</a></li>
	                </ul>
	            <?php endif ?>
	        </div>

	        <div id="content">
	            <?php $view['slots']->output('body') ?>
	        </div>
	    </body>
	</html>

	This template defines the base HTML skeleton document of a simple two-column page. 
	In this example, three {% block %} areas are defined (title, sidebar and body). 
	Each block may be overridden by a child template or left with its default implementation. 
	This template could also be rendered directly. 
	In that case the title, sidebar and body blocks would simply retain the default values used in this template.

	A child template might look like this:

	{# app/Resources/views/blog/index.html.twig #}
		{% extends 'base.html.twig' %}

		{% block title %}My cool blog posts{% endblock %}

		{% block body %}
		    {% for entry in blog_entries %}
		        <h2>{{ entry.title }}</h2>
		        <p>{{ entry.body }}</p>
		    {% endfor %}
		{% endblock %}

	<!-- app/Resources/views/blog/index.html.php -->
		<?php $view->extend('base.html.php') ?>

		<?php $view['slots']->set('title', 'My cool blog posts') ?>

		<?php $view['slots']->start('body') ?>
		    <?php foreach ($blog_entries as $entry): ?>
		        <h2><?php echo $entry->getTitle() ?></h2>
		        <p><?php echo $entry->getBody() ?></p>
		    <?php endforeach ?>
		<?php $view['slots']->stop() ?>

	The parent template is identified by a special string syntax (base.html.twig). 
	This path is relative to the app/Resources/views directory of the project. 
	You could also use the logical name equivalent: ::base.html.twig. 
	This naming convention is explained fully in Template Naming and Locations.

	The key to template inheritance is the {% extends %} tag. 
	This tells the templating engine to first evaluate the base template, 
	which sets up the layout and defines several blocks. 
	The child template is then rendered, at which point the title and body blocks of the parent are replaced by those from the child. Depending on the value of blog_entries, the output might look like this:

	<!DOCTYPE html>
		<html>
		    <head>
		        <meta charset="UTF-8">
		        <title>My cool blog posts</title>
		    </head>
		    <body>
		        <div id="sidebar">
		            <ul>
		                <li><a href="/">Home</a></li>
		                <li><a href="/blog">Blog</a></li>
		            </ul>
		        </div>

		        <div id="content">
		            <h2>My first post</h2>
		            <p>The body of the first post.</p>

		            <h2>Another post</h2>
		            <p>The body of the second post.</p>
		        </div>
		    </body>
		</html>

		Notice that since the child template didn`t define a sidebar block, 
		the value from the parent template is used instead. 
		Content within a {% block %} tag in a parent template is always used by default.

		to be continued