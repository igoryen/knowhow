Widget

	things like 
	"Columns",
	"Heading",
	"Image" etc.

	THere are "registered" E widgets.

widget categories:
	Basic ~
	General ~
	Pro ~ 


widget custom controls
	input fields

widget "render" function

	protected function render() {
		$settings = $this->get_settings_for_display();

		echo '<div class="title">';
		echo $settings['title'];
		echo '</div>';

		echo '<div class="fname">';
		echo $settings['fname'];
		echo '</div>';

		echo '<div id="lastname" class="lname">';
		echo $settings['lname'];
		echo '</div>';


	}

How to create a widget?
	by extending the Widget_Base abstract class.



Widget structure

	kapok/
	|- assets/
		|- js/
			|-kapok.js
	|- widgets
		|- index.php // silence is golden
		|- inline-editing.php
		|- kapok.php
			//---------------------------------------------------------------------
			<?php
			class Elementor_Test_Widget extends \Elementor\Widget_Base {

				public    function get_name() {}

				public    function get_title() {}

				public    function get_icon() {}

				public    function get_categories() {}

				protected function _register_controls() {}

				protected function render() {}

				protected function _content_template() {}

			}
			//----------------------------------------------------------------
	|- elementor-kapok.php
	|- index.php // silence is golden
	|- plugin.php