Advanced Custom Fields
Deactivate
Customise WordPress with powerful, professional and intuitive fields

Version 4.4.12 | By Elliot Condon | View details

Dashboard > Custom fields > Add new >
	> {name} > "Add field"
	> Field Label > {This is the name which will appear on the EDIT page}
	> Field name > {created automatically changing the name to snake_case}
	> Field type > {text|input| etc}
	> Required? > {yes|no}
	> Label
	> "Add Field"

> Location > "Page" + "is equal to" + "Home"
> Multilingual Content Setup > "Make 'Field Groups" translatable

> Pages > 

page-...php > 
	<?php the_field('nrs_intro_text')?>

> Pages > edit for French language > 