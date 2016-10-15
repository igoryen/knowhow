https://symfony.com/doc/current/form/form_customization.html

/*
	How do I render this form?
*/
<div>
    <label for="form_age">Age</label> // the label
    <ul>
        <li>This field is required</li>
    </ul>
    <input type="number" id="form_age" name="form[age]" /> // the widget
</div>

// like this

{{ form_row(form.age) }} // 1

<?php echo $view['form']->row($form['age']); ?> // 2
/*
1) the form_row() Twig function to render a form-field's
	-  label, 
	- error 
	- HTML widget 
2) or the row() PHP helper method
*/

<div>
    {{ form_label(form.age) }}
    {{ form_errors(form.age) }}
    {{ form_widget(form.age) }}
</div>

<div>
    <?php echo $view['form']->label($form['age']); ?>
    <?php echo $view['form']->errors($form['age']); ?>
    <?php echo $view['form']->widget($form['age']); ?>
</div>
/*
	OPTION:
	render each of the three parts of the field individually
*/


{{ form_widget(form) }} // 3
{{ form(form) }} // 4

<?php echo $view['form']->widget($form) ?> // 3
<?php echo $view['form']->form($form) ?> // 4


/*
	3) a one-liner to render all the fields of the form. Used for quick prototyping and testing.
	4) a one-liner to render all the fields as well as the form's start and end tags
*/

================
=== Form Themes
================
a theme
used by symfony
a small piece of a template 
it renders just one part of a form - to render each part of a form
- field labels, 
- errors, 
- input text fields, 
- select tags, etc.

The fragments.
they are defined as 
- blocks (in Twig) 
- template files (in PHP).

A theme is 
a set of fragments 
You use them when rendering a form. 

In other words, 
if you want to customize one portion of how a form is rendered, 
you find a theme which contains a customization of the appropriate form fragments.
You import the theme 

Symfony comes with some built-in form themes 
They define each and every fragment needed to render every part of a form:

    form_div_layout.html.twig // 5
    form_table_layout.html.twig // 6
    bootstrap_3_layout.html.twig // 7
    bootstrap_3_horizontal_layout.html.twig // 8
    foundation_5_layout.html.twig // 9

/*
	5. wraps each form field inside a <div> element.
	6. wraps the entire form inside a <table> element and each form field inside a <tr> element.
	7. wraps each form field inside a <div> element with the appropriate CSS classes to apply the default Bootstrap 3 CSS framework styles.
	8. it's similar to the previous theme, but the CSS classes applied are the ones used to display the forms horizontally (i.e. the label and the widget in the same row).
	9. wraps each form field inside a <div> element with the appropriate CSS classes to apply the default Foundation CSS framework styles.
*/

When you use the Bootstrap form themes and render the fields manually, 
calling form_label() for a checkbox/radio field doesn`t show anything. 
Due to Bootstrap internals, the label is already shown by form_widget().

What does this render?
{{ form_widget(form.age) }}
<?php echo $view['form']->widget($form['age']) ?>

Answer:
<input type="number" 
	   id="form_age" 
	   name="form[age]" 
	   required="required" 
	   value="33" />

This input field is rendered by the integer_widget fragment. 
This is because the field type is integer 
and you`re rendering its widget (as opposed to its label or errors).

In Twig that would default to 
	the block integer_widget 
	from the form_div_layout.html.twig template.

In PHP it would rather be 
	the integer_widget.html.php file 
	located in the FrameworkBundle/Resources/views/Form folder.

What does the default implementation of the integer_widget fragment look like?

{# form_div_layout.html.twig #}
{% block integer_widget %}
    {% set type = type|default('number') %}
    {{ block('form_widget_simple') }}
{% endblock integer_widget %}


<!-- integer_widget.html.php -->
<?php 
echo $view['form']->block(
	$form, 
	'form_widget_simple', 
	array('type' => isset($type) ? $type : "number")
	) 
?>


this fragment itself renders another fragment - form_widget_simple:
{# form_div_layout.html.twig #}
{% block form_widget_simple %}
    {% set type = type|default('text') %}
    <input type="{{ type }}" {{ block('widget_attributes') }} {% if value is not empty %}value="{{ value }}" {% endif %}/>
{% endblock form_widget_simple %}

<!-- FrameworkBundle/Resources/views/Form/form_widget_simple.html.php -->
<input
    type="<?php echo isset($type) ? $view->escape($type) : 'text' ?>"
    <?php if (!empty($value)): ?>value="<?php echo $view->escape($value) ?>"<?php endif ?>
    <?php echo $view['form']->block($form, 'widget_attributes') ?>
/> /////

The point is, 
the fragments dictate the HTML output of each part of a form. 
To customize the form output, 
you just need to identify and override the correct fragment. 
A set of these form fragment customizations is known as a form "theme". 
When rendering a form, you can choose which form theme(s) you want to apply.

In Twig 
a theme is a single template file and 
the fragments are the blocks defined in this file.

In PHP 
a theme is a folder and 
the fragments are individual template files in this folder.
=================================
Knowing which Block to Customize

In this example, 
the customized fragment name is "integer_widget" 
because you want to override the HTML widget 
for all integer field types. 
If you need to customize "textarea" fields, 
you would customize "textarea_widget".

The integer part comes from the class name: 
"IntegerType" becomes "integer", based on a standard.

As you can see, 
the fragment name is a combination of 
- the field type and 
- which part of the field is being rendered (e.g. widget, label, errors, row). 
As such, 
to customize how errors are rendered for just input text fields, 
you should customize the text_errors fragment.

More commonly, however, 
you will want to customize how errors are displayed across all fields. 
You can do this by customizing the "form_errors" fragment. 
This takes advantage of field type inheritance. 
Specifically, 
since the text type extends from the form type, the Form component will first look for the type-specific fragment (e.g. text_errors) before falling back to its parent fragment name if it does not exist (e.g. form_errors).

For more information on this topic, see Form Fragment Naming.


=====
=====
Form Theming¶

To see the power of form theming, 
suppose you want to wrap every input number field with a div tag. 
The key to doing this is to customize the "integer_widget" fragment.

Form Theming in Twig¶

When customizing the form field block in Twig, 
you have two options on where the customized form block can live:

Method 									Pros 			Cons
------------------------------------------------------------
Inside the same template as the form 	Quick and easy 	Can not be reused in other templates
Inside a separate template 				Can be reused by many templates 	Requires an extra template to be created

Method 1: 
Inside the same Template as the Form¶

The easiest way to customize the "integer_widget" block 
is to customize it directly in the template 
that is actually rendering the form.
-------------------------------------------
{% extends 'base.html.twig' %}

{% form_theme form _self %} // 20

{% block integer_widget %} // 21
    <div class="integer_widget">
        {% set type = type|default('number') %}
        {{ block('form_widget_simple') }}
    </div>
{% endblock %}

{% block content %}
    {# ... render the form #}

    {{ form_row(form.age) }}
{% endblock %}

/*
20) the special tag using which Twig looks inside the same template for any overridden form blocks. 
21) the customized "integer_widget" block is used when using the widget of the form.age field, assuming it is an integer type field.

The disadvantage of this method is that the customized form block can't be reused when rendering other forms in other templates. In other words, this method is most useful when making form customizations that are specific to a single form in your application. If you want to reuse a form customization across several (or all) forms in your application, read on to the next section.
*/

Method 2: Inside a separate Template¶

You can also choose to put the customized integer_widget form block in a separate template entirely. 
The code and end-result are the same, 
but you can now re-use the form customization across many templates.

{# app/Resources/views/form/fields.html.twig #}
{% block integer_widget %}
    <div class="integer_widget">
        {% set type = type|default('number') %}
        {{ block('form_widget_simple') }}
    </div>
{% endblock %}

Now that you have created the customized form block, 
you need to tell Symfony to use it. 
Inside the template where you are actually rendering your form, 
tell Symfony to use the template via the form_theme tag:

{% form_theme form 'form/fields.html.twig' %}

{{ form_widget(form.age) }}


When the form.age widget is rendered, Symfony will use the integer_widget block from the new template and the input tag will be wrapped in the div element specified in the customized block.