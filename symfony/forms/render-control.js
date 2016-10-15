{# app/Resources/views/default/new.html.twig #}
{{ form_start(form) }}
    {{ form_errors(form) }} // 1

    {{ form_row(form.task) }} // 3
    {{ form_row(form.dueDate) }} // 2
{{ form_end(form) }}
	

<!-- app/Resources/views/default/newAction.html.php -->
<?php echo $view['form']->start($form) ?>
    <?php echo $view['form']->errors($form) ?>

    <?php echo $view['form']->row($form['task']) ?>
    <?php echo $view['form']->row($form['dueDate']) ?>
<?php echo $view['form']->end($form) ?>

/*----------------------------------------
1) form_errors()
    Renders any errors global to the whole form (field-specific errors are displayed next to each field).
2) form_row() 
    A helper.
    Renders 
    	- the label, 
    	- any errors, 
    	- the HTML form widget for the given field (e.g. dueDate) inside, by default, a div element.
	does the majority of the work. It renders 
		- the label, 
		- errors 
		- HTML form widget of each field inside a div tag by default. 

*/
Twig:
{{ form.vars.value.task }} // 3
PHP:
<?php echo $form->vars['value']->getTask() ?> // 3
/*
3. form.vars.value
	to access the current data of your form 
*/


{{ form_start(form) }}
    {{ form_errors(form) }}

    <div>
        {{ form_label(form.task) }}
        {{ form_errors(form.task) }}
        {{ form_widget(form.task) }}
    </div>

    <div>
        {{ form_label(form.dueDate) }}
        {{ form_errors(form.dueDate) }}
        {{ form_widget(form.dueDate) }}
    </div>

    <div>
        {{ form_widget(form.save) }}
    </div>

{{ form_end(form) }}

//=====================================================
<?php echo $view['form']->start($form) ?>

    <?php echo $view['form']->errors($form) ?>

    <div>
        <?php echo $view['form']->label($form['task']) ?>
        <?php echo $view['form']->errors($form['task']) ?>
        <?php echo $view['form']->widget($form['task']) ?>
    </div>

    <div>
        <?php echo $view['form']->label($form['dueDate']) ?>
        <?php echo $view['form']->errors($form['dueDate']) ?>
        <?php echo $view['form']->widget($form['dueDate']) ?>
    </div>

    <div>
        <?php echo $view['form']->widget($form['save']) ?>
    </div>

<?php echo $view['form']->end($form) ?>

/*
here "form_row" helper isn't used
Instead, each field is rendered entirely by hand.
the end-product is the same.
*/

//=====================================================================

{{ form_label(form.task, 'Task Description') }} // 6
	
<?php echo $view['form']->label($form['task'], 'Task Description') ?> // 6

/*
6. explicitly specify a label for a field, if the auto-generated label  isn't quite right
*/

{{ form_widget(form.task, {'attr': {'class': 'task_field'}}) }} // 7

<?php echo $view['form']->widget($form['task'], array(
    'attr' => array('class' => 'task_field'), // 7
)) ?>
/*
7) 	adding the class="task_field" to the rendered input text field
	'attr' is a common option
	passed to the widget
	allows you to modify attributes on the form element
*/

	

{{ form.task.vars.id }} // 8
<?php echo $form['task']->vars['id']?> // 8
/*
8) 	to get the id="..." of the ... field
	If you need to render form fields "by hand" 
	also name="", label
*/

{{ form.task.vars.full_name }} // 9
<?php echo $form['task']->vars['full_name'] ?> // 9

/*
9) you need to use the "full_name" value:
To get the value used for the form field's "name" attribute 

*/