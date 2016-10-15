http://symfony.com/doc/current/forms.html

example: 
simple ToDo app

usecases:
Task
CRUD for tasks

the data for a single task
are represented and stored by the generic "Task" class

the "Task" class
will be a plain POPO (plain old PHP object)
will contain getters and setters
It is library/framework-agnostic.

Data are 
- submitted by the user
vua the HTML form
to a "Task" instance
- validated
- persisted to the DB


Course of work:
A. create the Class (here, "Task")
B. the HTML form (the form object):
    1) create/build it
    2) render it in a template


Where is Point B done?
Level 1: from inside the controller
Level 2: in a standalone class // which is recommended as your form becomes reusable.


B1: Build the form object
    class DefaultController extends Controller {

        public function newAction(Request $request) {
            // create a task and give it some dummy data for this example
            $task = new Task();
            // setters
            $task->setTask('Write a blog post'); // 5
            $task->setDueDate(new \DateTime('tomorrow'));

            $form = $this->createFormBuilder($task)
                ->add('task', TextType::class) // 1
                ->add('dueDate', DateType::class) // 2
                ->add('save', SubmitType::class, array('label' => 'Create Task')) // 3
                ->getForm();

            return $this->render('default/new.html.twig', array(
                'form' => $form->createView(), // 4
            ));
        }

        // =================================================
        // 1) to add a field / input of type "text". Corresponds to Task::task
        //      This input field will have the value of 
        //      the task property from the $task object (i.e. "Write a blog post"). 
        //      This is the first job of a form: 
        //      - to take data from an object
        //      - to translate it into a format that's suitable for being rendered in an HTML form.
        // 2) to add a field / input of type "date". Corresponds to Task::date
        // 3) to add a field / button to POST-submit data with label saying "Create Task"
        //      by default, the form will submit a POST request 
        //      back to the same controller that renders it.
        // 4) to pass a form "view" object to the template
        // 5) the task property from the $task object will go into the 'task' input field

        // The form system accesses the value of the "protected $task" property of the Task instance 
        // via the getTask() and setTask() methods on the Task class. 
        // A class's property must have a "getter" and "setter" method (unless it is "public") 
        // so that the Form component can get and put data onto the property. 
        // For a boolean property, you can use 
        // an "isser" or "hasser" method (e.g. isPublished() or hasReminder()) 
        // instead of a getter (e.g. getPublished() or getReminder()).

    What is a "form builder"?
    the ... that is used by Symfony to build "form" objects
    it`s purpose is to 
    - allow you to write simple form "recipes" 
    - have it do all the heavy-lifting of actually building the form.

B2: Render the form in a template

    1) pass a special form "view" object to your template (notice the $form->createView() in the controller above) 
    2) use a set of form helper functions:

Twig:
    {# app/Resources/views/default/new.html.twig #}

    {{ form_start(form) }} // 6
    {{ form_widget(form) }} // 7
    {{ form_end(form) }} // 8

PHP
    <!-- app/Resources/views/default/new.html.php -->
    <?php echo $view['form']->start($form) ?>
    <?php echo $view['form']->widget($form) ?>
    <?php echo $view['form']->end($form) ?>

    //----------------------------------------
    // 6) To render the start tag of the form, 
    //    including the correct enctype attribute when using file uploads.
    // 7) to render all the fields, which includes 
    //    - the field element itself, 
    //    - a label 
    //    - any validation error messages for the field.
    // 8) To render the end tag of the form and any fields that have not yet been rendered, 
    //    in case you rendered each field yourself. 
    //    This is useful for rendering hidden fields and taking advantage of the automatic CSRF Protection.


Handle form submissions / handle data submitted in the form

    This is the second job of a form 
    - to translate user-submitted data back to the properties of an object. 
    To make this happen, the submitted data from the user must be written into the Form object. 
    The controller must have this functionality/logic


    $form->handleRequest($request); // 9

    if ($form->isSubmitted() && $form->isValid()) {
        // $form->getData() holds the submitted values
        // but, the original `$task` variable has also been updated
        $task = $form->getData();

        // ... perform some action, such as saving the task to the database
        // for example, if Task is a Doctrine entity, save it!
        // $em = $this->getDoctrine()->getManager();
        // $em->persist($task);
        // $em->flush();

        return $this->redirectToRoute('task_success');
    }
    /* =================================
    9) Order of calls:
        1. $form->handleRequest()
        2. $form->createView()

        1) The page loads in a browser, 
        2) The form is created and rendered. 
        3) $form->handleRequest() - recognizes that the form was not submitted and does nothing. 
        4) $form->isSubmitted() returns false if the form was not submitted.

        5) The user submits the form
        6) $form->handleRequest() recognizes this and 
            immediately writes the user-submitted data back into 
            the object $task::task and $task::dueDate properties.
        7) The object $task is validated. 
            a. If it is invalid, 
                - $form->isValid() returns false
                - the form is rendered again, 
                    but now with validation errors; 

            b. If valid, 
                - the submitted data is again written into the form, 
                - $form->isValid() returns true. 
        8) Comes the opportunity:
            a. perform some actions using the $task object (e.g. persisting it to the database) 
            b. redirect the user to some other page (e.g. a "thank you" or "success" page).
                Why redirect?
                So that the user can't hit the "Refresh" button of their browser and re-post the data.
    */

Validate the form

    validation is applied to the underlying object (e.g. Task). 
    The question is not whether the "form" is valid, 
    but whether or not the $task object is valid 
    after the form has applied the submitted data to it. 

    Calling $form->isValid() is a shortcut. 
    It asks the $task object whether or not it has valid data.


    // src/AppBundle/Entity/Task.php
    namespace AppBundle\Entity;
    use Symfony\Component\Validator\Constraints as Assert;
    class Task {
        /**
         * @Assert\NotBlank() // 10
         */
        public $task;

        /**
         * @Assert\NotBlank() // 10
         * @Assert\Type("\DateTime") // 11
         */
        protected $dueDate;
    }

    # src/AppBundle/Resources/config/validation.yml
    AppBundle\Entity\Task:
        properties:
            task:
                - NotBlank: ~ // 10
            dueDate:
                - NotBlank: ~ // 10
                - Type: \DateTime // 11

    /* ================================================
        10) validation metadata: a validation constraint so that (input) field cannot be empty 
        11) a validation constraint so that the field is a valid DateTime object.
    */


HTML5 Validation

    Thanks to HTML5, 
    many browsers can natively enforce certain validation constraints on the client side. 
    The most common validation is activated by rendering a required attribute on fields that are required. 
    For browsers that support HTML5, 
        this will result in a native browser message being displayed 
        if the user tries to submit the form with that field blank.

    Generated forms take full advantage of this new feature 
    by adding sensible HTML attributes that trigger the validation. 
    
    {# app/Resources/views/default/new.html.twig #}
    {{ form(form, {'attr': {'novalidate': 'novalidate'}}) }} // 12

    <!-- app/Resources/views/default/new.html.php -->
    <?php echo $view['form']->form($form, array(
        'attr' => array('novalidate' => 'novalidate'), // 12
    )) ?>
    /* =========================================
        12) the attribute "nonvalidate" added to 
            the form tag
            used to disable the client-side validation, 
            This is especially useful 
            when you want to test your server-side validation constraints, 
            but are being prevented by your browser from, for example, submitting blank fields.
    */

Built-in Field Types¶

    Symfony comes standard with a large group of field types 
    that cover all of the common form fields and data types you`ll encounter:

    Field Type Options¶
            ->add('dueDate', DateType::class) // 13
            ->add('dueDate', DateType::class, array('widget' => 'single_text')) // 14
                    

        /*=========================
            13) to render the "dueDate" field as 3 select boxes: 
                YEAR | MONTH | DAY
            14) to render the "dueDate" field as a single text box 
                (where the user would enter the date as a string in the box):
        */

        ->add('dueDate', 'date', array(
            'widget' => 'single_text',
            'required' => false // 15
        ))

        /*===========================
            15) the 'required' option
                - the most common option 
                - can be applied to any field
                - set to true by default
                    i.e. if the field is left blank, 
                    HTML5-ready browsers will apply client-side validation .
                - set it to false
                    if you don't want this behavior
                This option is "nice", 
                but true server-side validation should always be used.
        */

        ->add('dueDate', DateType::class, array(
            'widget' => 'single_text',
            'label'  => 'Due Date', // 16
        ))
        /* ======================================
            16) sets the label for the form field
                can be applied to any field
                Set it to `false` if you don't need a lable
        */


        public function newAction() {
            $task = new Task();

            $form = $this->createFormBuilder($task)
                ->add('task') // 17 
                ->add('dueDate', null, array('widget' => 'single_text')) // 18
                ->add('save', SubmitType::class)
                ->getForm();
        }
        /*============================
            17) Argument 2 is omitted
                this activates "field-type guessing"
                Symfony guesses from the validation rules 
                that both the "task" field is a normal TextType field 
                and the dueDate field is a DateType field
            18) passing an options array as the third argument 
                to apply these options are applied to the guessed field.
        */


        ->add('task', null, array(
            'attr' => array('maxlength' => 4) // 19
        )) 
        /*===============================
            19) pass the option in the options field array to override one of the guessed values
        */


        // src/AppBundle/Form/TaskType.php // 20
        namespace AppBundle\Form;

        use Symfony\Component\Form\AbstractType;
        use Symfony\Component\Form\FormBuilderInterface;
        use Symfony\Component\Form\Extension\Core\Type\SubmitType;

        class TaskType extends AbstractType {
            public function buildForm(FormBuilderInterface $builder, array $options) {
                $builder
                    ->add('task')
                    ->add('dueDate', null, array('widget' => 'single_text'))
                    ->add('save', SubmitType::class)
                ;
            }
        }

        /*===========================================
            20) a separate, standalone PHP class
                where you build the form
                and house the logic for building the task form.
                It can then be reused anywhere in your application
                this is a better practice.
                Placing the form logic into its own class means 
                that the form can be easily reused elsewhere in your project. 
                This is the best way to create forms.
        */

        // src/AppBundle/Controller/DefaultController.php // 21
        use AppBundle\Form\TaskType;

        public function newAction() {
            $task = ...;
            $form = $this->createForm(TaskType::class, $task);

            // ...
        }
        /* ==============================================
            21) The controller
            where you use the class to quickly build a form object:
        */

        use Symfony\Component\OptionsResolver\OptionsResolver;
        public function configureOptions(OptionsResolver $resolver)  {
            $resolver->setDefaults(array(
                'data_class' => 'AppBundle\Entity\Task', // 22
            ));
        }
        /* ======================================
            22) A GOOD IDEA: explicitly specify the 'data_class' option 
                to tell the form the name of the class (here AppBundle\Entity\Task) 
                that holds the underlying data
                Every form needs to know the name of the class.
        */

        use Symfony\Component\Form\FormBuilderInterface;
        public function buildForm(FormBuilderInterface $builder, array $options) {
            $builder
                ->add('task')
                ->add('dueDate', null, array('mapped' => false)) // 23
                ->add('save', SubmitType::class)
            ;
        }

        /*==================================
            23) set the 'mapped' option to false: 
                because here you need extra fields in the form 
                (for example: a "do you agree with these terms" checkbox) 
                that will not be mapped to the underlying object
                otherwise, w
                when mapping forms to objects, this (as all fields) are mapped, 
                and if a field on the form does not exist on the mapped object 
                it will cause an exception to be thrown.
                Additionally, 
                if there are any fields on the form that aren't included in the submitted data, 
                those fields will be explicitly set to null.
        */

        $form->get('dueDate')->getData(); // 24
        /*==========================
            24) to access field data  in a controller
        */
        $form->get('dueDate')->setData(new \DateTime()); // 25
        /*==========================
            // 25) to modify directly the data of an unmapped field  
        */